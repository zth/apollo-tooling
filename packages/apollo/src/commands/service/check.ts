import { flags } from "@oclif/command";
import { table } from "heroku-cli-util";
import { introspectionFromSchema } from "graphql";

import { gitInfo } from "../../git";
import { ChangeType, format, SchemaChange as Change } from "../../diff";
import { ProjectCommand } from "../../Command";
import { HistoricQueryParameters } from "apollo-language-server/lib/engine/operations/checkSchema";

export default class ServiceCheck extends ProjectCommand {
  static aliases = ["schema:check"];
  static description =
    "Check a service against known operation workloads to find breaking changes";
  static flags = {
    ...ProjectCommand.flags,
    tag: flags.string({
      char: "t",
      description: "The published tag to check this service against"
    }),
    from: flags.string({
      description:
        "The offset in seconds from zero (x < 0) for the starting point of the requested time window",
      default: "-86400"
    }),
    to: flags.string({
      description:
        "The offset in seconds from -0 (x < -0) for the ending point of the requested time window",
      default: "-0"
    }),
    queryCountThreshold: flags.integer({
      description:
        "Minimum number of requests within the requested time window for a query to be considered.",
      default: 1
    }),
    queryCountThresholdPercentage: flags.integer({
      description:
        "Number of requests within the requested time window for a query to be considered, relative to total request count. Expected values are between 0 and 0.05 (minimum 5% of total request volume)",
      default: 0
    })
  };

  async run() {
    const { gitContext, checkSchemaResult }: any = await this.runTasks(
      ({ config, flags, project }) => [
        {
          title: "Checking service for changes",
          task: async ctx => {
            if (!config.name) {
              throw new Error("No service found to link to Engine");
            }

            const tag = flags.tag || config.tag || "current";
            const schema = await project.resolveSchema({ tag });
            ctx.gitContext = await gitInfo();

            const historicParameters = this.validateHistoricParams({
              from: flags.from,
              to: flags.to,
              queryCountThreshold: flags.queryCountThreshold,
              queryCountThresholdPercentage: flags.queryCountThresholdPercentage
            });

            ctx.checkSchemaResult = await project.engine.checkSchema({
              id: config.name,
              schema: introspectionFromSchema(schema).__schema,
              tag: flags.tag,
              gitContext: ctx.gitContext,
              frontend: flags.frontend || config.engine.frontend,
              historicParameters
            });
          }
        }
      ]
    );

    const { targetUrl, diffToPrevious } = checkSchemaResult;
    const { changes /*, type, validationConfig */ } = diffToPrevious;
    const failures = changes.filter(
      ({ type }: Change) => type === ChangeType.FAILURE
    );

    if (changes.length === 0) {
      return this.log("\nNo changes present between schemas\n");
    }
    this.log("\n");
    table(changes.map(format), {
      columns: [
        { key: "type", label: "Change" },
        { key: "code", label: "Code" },
        { key: "description", label: "Description" }
      ]
    });
    this.log("\n");
    // exit with failing status if we have failures
    if (failures.length > 0) {
      this.exit();
    }
    return;
  }

  validateHistoricParams({
    to,
    from,
    queryCountThreshold,
    queryCountThresholdPercentage
  }: {
    to: string;
    from: string;
    queryCountThreshold: number;
    queryCountThresholdPercentage: number;
  }): HistoricQueryParameters {
    const toNum = Number(to);
    const fromNum = Number(from);

    if (
      to === "0" ||
      Number.isNaN(toNum) ||
      toNum > 0 ||
      !Number.isInteger(toNum)
    ) {
      throw new Error(
        "Please provide a valid number for the --to flag. Valid numbers are in the range x <= -0."
      );
    }

    if (
      from === "0" ||
      Number.isNaN(fromNum) ||
      fromNum >= toNum ||
      !Number.isInteger(fromNum)
    ) {
      throw new Error(
        "Please provide a valid number for the --from flag. Valid numbers are integers in the range x < -0, and --from must be less than --to."
      );
    }

    if (!Number.isInteger(queryCountThreshold) || queryCountThreshold < 1) {
      throw new Error(
        "Please provide a valid number for the --queryCountThreshold flag. Valid numbers are integers in the range x >= 1."
      );
    }

    if (
      queryCountThresholdPercentage < 0 ||
      queryCountThresholdPercentage > 100
    ) {
      throw new Error(
        "Please provide a valid number for the --queryCountThresholdPercentage flag. Valid numbers are in the range 0 <= x <= 100."
      );
    }

    const asPercentage = queryCountThresholdPercentage / 100;

    return {
      to: toNum,
      from: fromNum,
      queryCountThreshold,
      queryCountThresholdPercentage: asPercentage
    };
  }
}
