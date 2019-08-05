# Changelog

## Upcoming

- `apollo`
  - `service:push`
    - `overrideComposedSchema` option added, which allows schemas to be force-pushed directly to federated graphs
- `apollo-codegen-core`
  - <First `apollo-codegen-core` related entry goes here>
- `apollo-codegen-flow`
  - <First `apollo-codegen-flow` related entry goes here>
- `apollo-codegen-scala`
  - <First `apollo-codegen-scala` related entry goes here>
- `apollo-codegen-swift`
  - Fix issue where type names were not being properly escaped [iOS 193](https://github.com/apollographql/apollo-ios/issues/193)
  - Fix overcorrection on removing redundant modifiers [#1449](https://github.com/apollographql/apollo-tooling/issues/1449)
- `apollo-codegen-typescript`
  - <First `apollo-codegen-typescript` related entry goes here>
- `apollo-env`
  - <First `apollo-env` related entry goes here>
- `apollo-graphql`
  - <First `apollo-graphql` related entry goes here>
- `apollo-language-server`
  - <First `apollo-language-server` related entry goes here>
- `apollo-tools`
  - <First `apollo-tools` related entry goes here>
- `vscode-apollo`
  - <First `vscode-apollo` related entry goes here>

## `vscode-apollo@1.9.1`, `apollo-language-server@1.14.1`

- `apollo-language-server@1.14.1`
  - Fix cache invalidation bug for reload schema which caused outdated results in autocomplete [#1446](https://github.com/apollographql/apollo-tooling/pull/1446)

## `vscode-apollo@1.9.0`, `apollo-language-server@1.14.0`, `apollo-codegen-swift@0.34.2`

- `vscode-apollo@1.9.0`
  - Add Dart support for vscode [#1385](https://github.com/apollographql/apollo-tooling/pull/1385)
- `apollo-language-server@1.14.0`
  - Add Dart operation extraction [#1385](https://github.com/apollographql/apollo-tooling/pull/1385)
- `apollo-codegen-swift@0.34.2`
  - Prevent compiler warnings for redundant access-level modifiers when using `--namespace` [1241](https://github.com/apollographql/apollo-tooling/pull/1241)

## `apollo@2.16.1`, `apollo-language-server@1.13.1`, `vscode-apollo@1.8.1`

- `apollo@2.16.1`
  - Add `ApolloConfig` type to exports from `apollo` [#1413](https://github.com/apollographql/apollo-tooling/pull/1413)
- `apollo-language-server@1.13.1`
  - Add error message for service lookup failure [#1413](https://github.com/apollographql/apollo-tooling/pull/1413)
- `vscode-apollo@1.8.1`
  - Only activate extension on apollo.config.js/ts [#1411](https://github.com/apollographql/apollo-tooling/pull/1411)
  - Changed the status bar title to be "Apollo" to save space. [#1415](https://github.com/apollographql/apollo-tooling/pull/1415)

## `apollo@2.16.0`, `apollo-codegen-swift@0.34.0`, `apollo-language-server@1.13.0`, `apollo-tools@0.4.0`, `vscode-apollo@1.8.0`

- `apollo@2.16.0`
  - Add `service:list` and tests [#1358](https://github.com/apollographql/apollo-tooling/pull/1358) and header [#1377](https://github.com/apollographql/apollo-tooling/pull/1377)
  - Update `service:list` test to use a simulated time to prevent relative dates causing snapshot failures [#1374](https://github.com/apollographql/apollo-tooling/pull/1374)
  - Update `service:check` to support `--markdown` and `--json` flags for federated schema [#1378](https://github.com/apollographql/apollo-tooling/pull/1378)
  - Exit status code 1 after composition errors in service:push [#1403](https://github.com/apollographql/apollo-tooling/pull/1403)
  - Update `service:check` to include `graphCompositionId` in query params for UI [#1401](https://github.com/apollographql/apollo-tooling/pull/1401)
- `apollo-codegen-swift@0.34.0`
  - Update Swift codegen to add operation name to generated query classes [#1386](https://github.com/apollographql/apollo-tooling/pull/1386)
  - Append terminating newline character to generated files [#531](https://github.com/apollographql/apollo-ios/issues/531)
- `apollo-language-server@1.13.0`
  - Allow template literal placeholders that span multiple rows[#1299](https://github.com/apollographql/apollo-tooling/pull/1299)
  - Add support for extracting GraphQL documents from Ruby source files using `<<-GRAPHQL...GRAPHQL` heredoc. [#1304](https://github.com/apollographql/apollo-tooling/pull/1304)
- `apollo-tools@0.4.0`
  - Handle `subscribe` in `buildServiceDefinition` and add type in `resolverMap` [#1047](https://github.com/apollographql/apollo-tooling/pull/1047)
- `vscode-apollo@1.8.0`
  - Add support for Ruby source files using `<<-GRAPHQL...GRAPHQL` heredoc. [#1304](https://github.com/apollographql/apollo-tooling/pull/1304)

## `apollo@2.15.0`, `apollo-language-server@1.12.0`

- `apollo@2.15.0`
  - Relax graphql version, resolve missing types "Boolean", "String" [#1355](https://github.com/apollographql/apollo-tooling/pull/1355)
- `apollo-language-server@1.12.0`
  - Relax graphql version, resolve missing types "Boolean", "String" [#1355](https://github.com/apollographql/apollo-tooling/pull/1355)

## `apollo-graphql@0.3.3`

- `apollo-graphql@0.3.3`
  - buildSchemaFromSDL - Add support for merging Scalar and Enum resolvers to schema [#1345](https://github.com/apollographql/apollo-tooling/pull/1345)

## `apollo@2.14.0`, `apollo-language-server@1.11.0`, `vscode-apollo@1.7.4`

- `apollo@2.14.0`
  - Add integration tests to `service:check` [#1308](https://github.com/apollographql/apollo-tooling/pull/1308)
  - Add support for federated service to `service:check` [#1308](https://github.com/apollographql/apollo-tooling/pull/1308)
- `apollo-language-server@1.11.0`
  - Add support for federated service to `service:check` [#1308](https://github.com/apollographql/apollo-tooling/pull/1308)
- `vscode-apollo@1.7.4`
  - Fix bug causing some editor features to sometimes give stale results [#1361](https://github.com/apollographql/apollo-tooling/pull/1361)

## `apollo@2.13.1`, `apollo-graphql@0.3.2`

- `apollo@2.13.1`
  - Remove federation warnings and update types [#1332](https://github.com/apollographql/apollo-tooling/pull/1332)
- `apollo-graphql@0.3.2`
  - buildSchemaFromSDL - support meta fields on abstract types [#1330](https://github.com/apollographql/apollo-tooling/pull/1330)

## `apollo@2.13.0`, `apollo-language-server@1.10.0`

- `apollo@2.13.0`
  - update `client:push` to pass the tag / graphVariant [#1307](https://github.com/apollographql/apollo-tooling/pull/1307)
- `apollo-language-server@1.10.0`
  - Use offset equal to length of tagname when parsing JS documents[#1050](https://github.com/apollographql/apollo-tooling/issues/1050)
  - Allow template literal placeholders that span multiple rows[#1299](https://github.com/apollographql/apollo-tooling/pull/1299)

## `apollo@2.12.4`, `apollo-language-server@1.9.0`, `vscode-apollo@1.7.0`

- `apollo@2.12.4`
  - Update client:push command with new resolver and more output [#1290](https://github.com/apollographql/apollo-tooling/pull/1290)
- `apollo-language-server@1.9.0`
  - update stats window types [#1292](https://github.com/apollographql/apollo-tooling/pull/1292)
  - Allow configuration of validation rules [#1288](https://github.com/apollographql/apollo-tooling/pull/1288)
- `vscode-apollo@1.7.0`
  - Allow configuration of validation rules [#1288](https://github.com/apollographql/apollo-tooling/pull/1288)

## `apollo@2.12.3`, `apollo-language-server@1.8.4`

- `apollo@2.12.3`
  - Pin graphql to the ~14.2.x range (#1291)[https://github.com/apollographql/apollo-tooling/pull/1291]
- `apollo-language-server@1.8.4`
  - Pin graphql to the ~14.2.x range (#1291)[https://github.com/apollographql/apollo-tooling/pull/1291]

## `apollo@2.12.1`, `apollo-language-server@1.8.3`

- `apollo@2.12.1`
  - Add debugging logs to `apollo client:push` and `apollo service:push` [# 1273](https://github.com/apollographql/apollo-tooling/pull/1273)
  - remove `apollo service:info` command, since it's undocumented and unused [#1274](https://github.com/apollographql/apollo-tooling/pull/1274)
- `apollo-language-server@1.8.3`
  - Fix \_\_typename addition for InlineFragments [#1286](https://github.com/apollographql/apollo-tooling/pull/1286)

## `apollo-codegen-flow@0.33.10`, `apollo-codegen-typescript@0.34.0`, `vscode-apollo@1.6.10`

- `apollo-codegen-flow@0.33.10`
  - Renamed `useFlowReadOnlyTypes` option to `useReadOnlyTypes` [#1205](https://github.com/apollographql/apollo-tooling/pull/1205)
- `apollo-codegen-typescript@0.34.0`
  - Added `useReadOnlyTypes` option to use readonly types [#1205](https://github.com/apollographql/apollo-tooling/pull/1205)
- `vscode-apollo@1.6.10`
  - Fix defaultValue syntax highlighting [#1269](https://github.com/apollographql/apollo-tooling/pull/1269)
  - Fix single quote syntax highlighting [#1270](https://github.com/apollographql/apollo-tooling/pull/1269)

## `apollo@2.11.1`, `apollo-language-server@1.8.1`, `vscode-apollo@1.6.9`

- `apollo@2.11.1`
  - Document engine requirements in client:check and client:push [#1077](https://github.com/apollographql/apollo-tooling/pull/1077)
- `apollo-language-server@1.8.1`
  - Fix windows file paths by normalizing all URIs to a consistent format [#1213](https://github.com/apollographql/apollo-tooling/pull/1213).
  - Fix positionToOffset to consider windows line endings [#1213](https://github.com/apollographql/apollo-tooling/pull/1213).
- `vscode-apollo@1.6.9`
  - Add env variable to silence TLS errors [#1212](https://github.com/apollographql/apollo-tooling/pull/1212)

## `apollo@2.11.0`, `apollo-language-server@1.8.0`, `apollo-graphql@0.3.0`, `apollo-language-server@1.8.0`, `apollo-env@0.5.0`

- `apollo@2.11.0`
  - Leverage updates to apollo-language-server to support federated services [#1251](https://github.com/apollographql/apollo-tooling/pull/1251)
  - Add `service:delete` command for deleting federated services [#1251](https://github.com/apollographql/apollo-tooling/pull/1251)
- `apollo-env@0.5.0`
  - Add new utils and predicates [#1251](https://github.com/apollographql/apollo-tooling/pull/1251)
- `apollo-graphql@0.3.0`
  - Require graphql@^14.2.1 [#1251](https://github.com/apollographql/apollo-tooling/pull/1251)
  - Add buildSchemaFromSDL and related utilities for constructing partial schemas
    [#1251](https://github.com/apollographql/apollo-tooling/pull/1251)
  - Add transformSchema and related utilities for easily transforming schemas
    [#1251](https://github.com/apollographql/apollo-tooling/pull/1251)
- `apollo-language-server@1.8.0`
  - Fix windows file paths by normalizing all URIs to a consistent format [#1213](https://github.com/apollographql/apollo-tooling/pull/1213).
  - Fix positionToOffset to consider windows line endings [#1213](https://github.com/apollographql/apollo-tooling/pull/1213).
  - Extend Engine API for federated schema uploads and checks [#1251](https://github.com/apollographql/apollo-tooling/pull/1251)
  - Reorganize files and exports [#1251](https://github.com/apollographql/apollo-tooling/pull/1251)

## `apollo@2.10.3`

- `apollo@2.10.3`
  - Add service:check debuggability [#1250](https://github.com/apollographql/apollo-tooling/pull/1250)

## `apollo@2.10.2`

- `apollo@2.10.2`
  - Relocate debug statements [#1245](https://github.com/apollographql/apollo-tooling/pull/1245)

## `apollo@2.10.1`

- `apollo@2.10.1`
  - Add service:push debuggability [#1244](https://github.com/apollographql/apollo-tooling/pull/1244)

## `apollo@2.10.0`

- `apollo@2.10.0`
  - Add `client:download-schema` command to download schemas from engine to an output file [#1108](https://github.com/apollographql/apollo-tooling/pull/1108)

## `apollo@2.9.0`, `apollo-language-server@1.7.0`

- `apollo@2.9.0`
  - Support local schema files in service:check [#1118](https://github.com/apollographql/apollo-tooling/pull/1116)
- `apollo-language-server@1.7.0`
  - Fix on-hover bugs introduced by replacing visitWithTypeInfo [#1196](https://github.com/apollographql/apollo-tooling/pull/1196)
  - Add `gql` extension to the default `includes` configuration [#1176](https://github.com/apollographql/apollo-tooling/pull/1176)
  - Simple perf improvements (debouncer + cache) [#1206](https://github.com/apollographql/apollo-tooling/pull/1206)

## `apollo@2.8.3`

- `apollo@2.8.3`
  - Update `service:check` output for errors and correct pluralization [#1178](https://github.com/apollographql/apollo-tooling/pull/1178)

## `apollo@2.8.2`

- `apollo@2.8.2`
  - Update `service:check`'s `--markdown` output to include clients affected, number of operations checked, pluralization improvements, and backticks around service and schema variant [#1164](https://github.com/apollographql/apollo-tooling/pull/1164)
  - Update `service:check` output to show failures before passes [#1168](https://github.com/apollographql/apollo-tooling/pull/1168)

## `apollo@2.8.1`

- `apollo@2.8.1`
  - Add git info back to `checkSchema` to fix detail links[#1165](https://github.com/apollographql/apollo-tooling/pull/1165)
- `apollo-language-server@1.6.2`

## `apollo@2.8.0`

- `apollo@2.8.0`
  - Add `--markdown` output option to `service:check` [#1072](https://github.com/apollographql/apollo-tooling/pull/1072)
  - Enhance formatting for `service:check` output [#1146](https://github.com/apollographql/apollo-tooling/pull/1146)
- `apollo-language-server@1.6.1`

## `apollo@2.7.0`, `apollo-vscode@1.6.0`

- `apollo@2.7.0`
  - Update operation normalization technique to deterministically order fragments within operations. This update affects those users of the [operation registry](https://www.apollographql.com/docs/platform/operation-registry.html) feature of the Apollo Platform. Anyone using the operation registry should re-register their operations with this new version of the `apollo` CLI via the `apollo client:push` command. Once all client operations are re-registered, the `apollo-server-plugin-operation-manifest` plugin within Apollo Server (which reads the manifest published with `apollo client:push`) should be updated to `0.1.0-alpha.1`. [#1158](https://github.com/apollographql/apollo-tooling/pull/1158)
- `apollo-language-server@1.6.0`
  - Stop loadConfig from looking up the tree when a --config location is defined [#1059](https://github.com/apollographql/apollo-tooling/pull/1059)
  - Refactored/documented/tested loadConfig [#1059](https://github.com/apollographql/apollo-tooling/pull/1059)
  - Add `.vue` file support for codegen:generate [#1160](https://github.com/apollographql/apollo-tooling/pull/1160)

## `apollo-codegen-flow@0.32.11`

- `apollo-codegen-flow@0.32.11`
  - remove leading empty lines from generated code [#1127](https://github.com/apollographql/apollo-tooling/pull/1127)

## `apollo@2.6.2`

- `apollo@2.6.2`
  - fix remoteUrl(remove slug) for service:check [#1121](https://github.com/apollographql/apollo-tooling/pull/1121)

## `apollo-graphql@0.2.0`

- `apollo-graphql@0.2.0`
  - Change the `sortAST` algorithm to sort fragments at the top-level of the `DocumentNode`, providing a more deterministic normalization of the operation for use by `apollo-engine-reporting` (which consumes this package's `defaultOperationRegistrySignature` function). This will more correctly combine operations for Engine reporting. This also adds a `defaultOperationRegistrySignature` function for use by the `apollo-server-plugin-operation-registry` plugin to eventually consume. [#1112](https://github.com/apollographql/apollo-tooling/pull/1112)

## `apollo@2.6.1`, `apollo-env@0.4.0`

- `apollo@2.6.1`
  - JSON flag for service:check output [#1079](https://github.com/apollographql/apollo-tooling/pull/1079)
- `apollo-env@0.4.0`
  - Add environment-aware createHash function to apollo-env [#1110](https://github.com/apollographql/apollo-tooling/pull/1110)

## `apollo@2.6.0`, `apollo-env@0.3.4`, `apollo-language-server@1.5.3`, `apollo-codegen-flow@0.32.9`, `apollo-codegen-scala@0.33.5`, `apollo-codegen-swift@0.32.9`, `apollo-codegen-typescript@0.32.10`, `apollo-graphql@0.1.2`

- `apollo@2.6.0`
  - Use generated Typescript types via client:codegen [#1016](https://github.com/apollographql/apollo-tooling/pull/1016)
  - Remove default `--tag=current` for some client commands that used it [#1062](https://github.com/apollographql/apollo-tooling/pull/1062)
  - Add missing dependency `@oclif/errors` [#1068](https://github.com/apollographql/apollo-tooling/pull/1068)
  - Include targetUrl in the output of the `service:check` command [#1072](https://github.com/apollographql/apollo-tooling/pull/1072)
  - Import apollo-env utility types directly instead of treating them as globals [#1074](https://github.com/apollographql/apollo-tooling/pull/1074)
- `apollo-env@0.3.4`
  - Import apollo-env utility types directly instead of treating them as globals [#1074](https://github.com/apollographql/apollo-tooling/pull/1074)
- `apollo-language-server@1.5.3`
  - Import apollo-env utility types directly instead of treating them as globals [#1074](https://github.com/apollographql/apollo-tooling/pull/1074)
- `apollo-codegen-flow@0.32.9`
  - Add missing dependencies `@babel/generator`, `common-tags` [#1071](https://github.com/apollographql/apollo-tooling/pull/1071)
- `apollo-codegen-scala@0.33.5`
  - The keyword "type" is escaped when generating scala.js via client:codegen [#1066](https://github.com/apollographql/apollo-tooling/pull/1066)
  - Add missing dependencies `@babel/generator`, `common-tags` [#1071](https://github.com/apollographql/apollo-tooling/pull/1071)
- `apollo-codegen-swift@0.32.9`
  - Add missing dependencies `@babel/generator`, `common-tags` [#1071](https://github.com/apollographql/apollo-tooling/pull/1071)
- `apollo-codegen-typescript@0.32.10`
  - Add missing dependencies `@babel/generator`, `common-tags` [#1071](https://github.com/apollographql/apollo-tooling/pull/1071)
- `apollo-graphql@0.1.2`
  - Expand the `graphql` peer dependency range of `apollo-graphql` to also include `0.13.x` and `0.12.x` in addition to `14.x`, since the `apollo-graphql` package is relied upon by `apollo-server-core` which specifies those requirements itself. [#1076](https://github.com/apollographql/apollo-tooling/pull/1076)

# `apollo-language-server@1.5.2`, `vscode-apollo@1.5.2`

- `apollo-language-server@1.5.2`
  - fix single apollo.config breaking others loaded at the same time [#1055](https://github.com/apollographql/apollo-tooling/pull/1055)
  - Fix broken fileSet.includesFile to use full filepath [#1055](https://github.com/apollographql/apollo-tooling/pull/1055)
- `vscode-apollo@1.5.2`

## `apollo@2.5.2`, `apollo-language-server@1.5.1`, `vscode-apollo@1.5.1`

- `apollo@2.5.2`
  - Fix a bug where tagging a build will cause the tool to not be able to figure out where the git repo is [#944](https://github.com/apollographql/apollo-tooling/pull/944)
  - Re-enable logging for codegen when in watch mode [#1039](https://github.com/apollographql/apollo-tooling/pull/1039)
- `apollo-language-server@1.5.1`
  - Added a warning when there are 0 files found in a project [#1007](https://github.com/apollographql/apollo-tooling/pull/1007)
  - Allow relative paths in includes/excludes globs [#1007](https://github.com/apollographql/apollo-tooling/pull/1007)
- `vscode-apollo@1.5.1`
  - Updated marketplace readme, color schemes, and icon to be prettier [#942](https://github.com/apollographql/apollo-tooling/pull/942)

## `apollo-codegen-typescript@0.32.7`, `apollo-codegen-scala@0.33.2`, `apollo-graphql@1.0.2`

- `apollo-codegen-typescript@0.32.7`
  - Add `/* eslint-disable */` in generated files header [#1017](https://github.com/apollographql/apollo-tooling/pull/1017)
- `apollo-codegen-scala@0.33.2`
  - Fix types sometimes being emitted with fields that don't match the underlying data [#1008](https://github.com/apollographql/apollo-tooling/pull/1008)
- `apollo-graphql@1.0.2`
  - Move apollo-graphql package from apollo-server to apollo-tooling

## `apollo@2.5.0`, `apollo-language-server@1.5.0`, `vscode-apollo@1.5.0`

- `apollo@2.5.0`
  - Support validation parameters for service:check [#953](https://github.com/apollographql/apollo-tooling/pull/953)
  - Leverage nullability of validation parameters [#1006](https://github.com/apollographql/apollo-tooling/pull/1006)
  - Unpin graphql version [#1010](https://github.com/apollographql/apollo-tooling/pull/1010)
- `apollo-language-server@1.5.0`
  - Better error handling in ApolloEngineClient [#953](https://github.com/apollographql/apollo-tooling/pull/953)
  - Fix language server mis-reporting client identity for schema loading operation [#940](https://github.com/apollographql/apollo-tooling/pull/940)
  - Unpin graphql version [#1010](https://github.com/apollographql/apollo-tooling/pull/1010)
- `vscode-apollo@1.5.0`
  - Fix inline graphql highlighting in Vue `<script>` tags [#981](https://github.com/apollographql/apollo-tooling/pull/981)
  - Fix graphql comments not being highlighted correctly [#907](https://github.com/apollographql/apollo-tooling/pull/907)

## `apollo@2.4.4`, `apollo-codegen-scala@0.33.0`

- `apollo@2.4.4`
  - remove schemaDiff and change types from code/exports [#967](https://github.com/apollographql/apollo-tooling/pull/967)
- `apollo-codegen-scala@0.33.0`
  - Generate additional case-class like APIs for data containers [#943](https://github.com/apollographql/apollo-tooling/pull/943)

## `apollo-env@0.3.1`

- `apollo-env@0.3.1`
  - Fix core-js dependency by pinning to `3.0.0-beta.3` [#961](https://github.com/apollographql/apollo-tooling/pull/961)

## `apollo-language-server@1.4.1`

- `apollo-language-server` 1.4.1
  - Fix edge case for empty operations [#959](https://github.com/apollographql/apollo-tooling/pull/959)

## `apollo@2.4.1`

- `apollo` 2.4.1
  - Bump the apollo-engine-reporting version [#950](https://github.com/apollographql/apollo-tooling/pull/950)

## `apollo@2.4.0`, `apollo-language-server@1.4.0`, `vscode-apollo@1.4.1`

- `apollo` 2.4.0
  - Fix configuration loading and schema tag support [#925](https://github.com/apollographql/apollo-tooling/pull/925)
  - Improve client:check output [#934](https://github.com/apollographql/apollo-tooling/pull/934)
- `apollo-language-server` 1.4.0
  - Replace checkOperations mutation with new validateOperations mutation [#934](https://github.com/apollographql/apollo-tooling/pull/934)
  - Include config files into a project's fileSet [#897](https://github.com/apollographql/apollo-tooling/pull/897)
  - Add hook into workspace for communicating out when configs are loaded or when errors are found [#897](https://github.com/apollographql/apollo-tooling/pull/897)
  - Add fn to workspace for reloading a project with a given config URI [#897](https://github.com/apollographql/apollo-tooling/pull/897)
  - Reload project when config file is changed [#897](https://github.com/apollographql/apollo-tooling/pull/897)
  - Update error handling from within the server (send as message). This message can be listened for and handled by the consumer [#897](https://github.com/apollographql/apollo-tooling/pull/897)
- `vscode-apollo` 1.4.1
  - Update statusBar to reflect new possible "warning" states [#897](https://github.com/apollographql/apollo-tooling/pull/897)

## `apollo@2.3.1`

- `apollo@2.3.1`
  - Fixed path building issues on Windows [#917](https://github.com/apollographql/apollo-tooling/pull/917)

## `apollo@2.3.0`

- `apollo@2.3.0`
  - Fixed filesystem issues on Windows [#810](https://github.com/apollographql/apollo-tooling/pull/810)
  - Fixed codegen for Scala users [#686](https://github.com/apollographql/apollo-tooling/pull/686)
- `vscode-apollo@1.4.0`
  - Added a status bar action to show service stats in client projects [#840](https://github.com/apollographql/apollo-tooling/pull/840)
  - Added monorepo support for multiple projects open at once [#840](https://github.com/apollographql/apollo-tooling/pull/840)
- `apollo-language-server@1.3.0`
  - Added listener for `getStats` to provide service stats for extensions [#840](https://github.com/apollographql/apollo-tooling/pull/840)

## `apollo@2.1.9`

- `apollo@2.1.9`
  - Add fallback for git branch calculation [#871](https://github.com/apollographql/apollo-tooling/pull/871)

## `apollo@2.1.8`

- `apollo@2.1.8`
  - Pass correct headers to Client Project [#790](https://github.com/apollographql/apollo-tooling/pull/790)
  - Fix header parsing [#790](https://github.com/apollographql/apollo-tooling/pull/790)
  - Added `--tagName` flag [#793](https://github.com/apollographql/apollo-tooling/pull/793)
- `apollo-language-server@1.1.8`
  - Load the env file earlier during configuration in order to infer the service name before it's required [#815](https://github.com/apollographql/apollo-tooling/pull/815)
- `vscode-apollo@1.2.8`
- `@apollographql/apollo-tools@0.2.9`
  Pass directives from schema modules through `buildServiceDefinition` [#715](https://github.com/apollographql/apollo-tooling/pull/715)

## `apollo@2.1.7`

- `apollo@2.1.7`
  - Allow `--no-addTypename` [#758](https://github.com/apollographql/apollo-tooling/pull/758)
- `apollo-language-server@1.1.7`
  - Use `tagName` from config to extract documents. [#769](https://github.com/apollographql/apollo-tooling/pull/769)
  - Fix `--key` flag/env variable precendece to prefer env variable when present [#770](https://github.com/apollographql/apollo-tooling/pull/770)
- `vscode-apollo@1.2.7`

## `apollo@2.1.6`

- `apollo@2.1.6`
- `apollo-language-server@1.1.6`
  - Associate `*.gql` files with graphql language in GraphQLProject [#740](https://github.com/apollographql/apollo-tooling/pull/740)
- `vscode-apollo@1.2.6`
  - Pin event-stream version to 3.3.4 within vscode-apollo [commit](https://github.com/apollographql/apollo-tooling/commit/b0e9373004c5657535f11ed7e1a51b999c16d762)

## `apollo@2.1.5`

- `apollo@2.1.5`
- `apollo-language-server@1.1.5`
  - Fix Empty 'errors' list in introspection [#741](https://github.com/apollographql/apollo-tooling/pull/741)
- `vscode-apollo@1.2.5`

## `apollo@2.1.4`

- `apollo@2.1.4`
  - Restore skipSSLValidation flag [#735](https://github.com/apollographql/apollo-tooling/pull/735)
  - Stop excluding object and list literals from operation manifests. [#738](https://github.com/apollographql/apollo-tooling/pull/738)
- `apollo-language-server@1.1.4`
  - Fix go to definition when a local schema file is provided [#727](https://github.com/apollographql/apollo-tooling/pull/727)
- `vscode-apollo@1.2.4`

## `apollo@2.1.3`

- `apollo@2.1.3`
  - Support localSchemaFile flag to push to a service from local schema [#710](https://github.com/apollographql/apollo-tooling/pull/710)
  - Fix to allow fragment-only documents in codegen [#707](https://github.com/apollographql/apollo-tooling/pull/707)
  - Add support for queries, includes, and excludes flags for codegen [#733](https://github.com/apollographql/apollo-tooling/pull/733)
- `vscode-apollo@1.2.3`
  - Create Apollo output channel [commit](https://github.com/apollographql/apollo-tooling/commit/cdb7041abe0ed284b06fd2a9cef63fe47d404976)
- `apollo-language-server@1.1.3`
  - Fix edge case when no config is provided [#734](https://github.com/apollographql/apollo-tooling/pull/734)

## `apollo@2.1.1`

- `apollo@2.1.1`
- `vscode-apollo@1.2.1`
- `apollo-language-server@1.1.1`
  - Allow custom config locations [#699](https://github.com/apollographql/apollo-tooling/pull/699)
  - Fix swallowing of errors from Engine [#705](https://github.com/apollographql/apollo-tooling/pull/705)
- `apollo-codegen-core@0.30.1`
  - Warn on GraphQL parser exceptions [#642](https://github.com/apollographql/apollo-tooling/pull/642)

## `apollo@2.1.0`

- `apollo@2.1.0`
  - Fix incorrect error code in cli [#691](https://github.com/apollographql/apollo-tooling/pull/691)
- `apollo-language-server@1.1.0`
  - Added Python operation extraction [#693](https://github.com/apollographql/apollo-tooling/pull/693)
  - Fix column offset for editor error annotations [#692](https://github.com/apollographql/apollo-tooling/pull/692)
- `vscode-apollo@1.2.0`
  - Added Python support for vscode [#694](https://github.com/apollographql/apollo-tooling/pull/694)

## `apollo@2.0.17`

- `apollo@2.0.17`
- `apollo-language-server@1.0.14`
  - Updated code comments [commit](https://github.com/apollographql/apollo-tooling/commit/fe3f3f4e53b142b94dbfbd180dd2269e2d43ef2d) -`vscode-apollo@1.1.12`

## `apollo@2.0.16`

- `apollo@2.0.16`
  - Fixed codegen message printing number of generated files [#682](https://github.com/apollographql/apollo-tooling/pull/682)
- `apollo-language-server@1.0.13`
- `vscode-apollo@1.1.11`
  - Updated readme with correct links [#689](https://github.com/apollographql/apollo-tooling/pull/689)
  - Updated `package.json` with correct name and description [commmit](https://github.com/apollographql/apollo-tooling/commit/d54defede78d59f02362e4ad2d01c0af723a8f1f)

## `apollo@2.0.15`

- `apollo@2.0.15`
- `apollo-language-server@2.0.15`
  - Fixed incorrect client identifier [commit](https://github.com/apollographql/apollo-tooling/commit/338c073d1d55b515c9cafdd694cdbdc421b6d109) -`vscode-apollo@1.1.9`

## `apollo@2.0.14`

- `apollo@2.0.14`
- `apollo-language-server@1.0.11`
  - Add apollo config for CI checks [commit](https://github.com/apollographql/apollo-tooling/commit/217498e23ce22ef78f6d0cc9ae9881b73cae7f84)
- `vscode-apollo@1.1.8`
  - Add watch command before launching extension in dev mode [commit](https://github.com/apollographql/apollo-tooling/commit/b9309d5f75527d492f02a2d316913948cff87004)

## `apollo@2.0.13`

- `apollo@2.0.13`
  - add alias to `service:download` from `schema:download` [commit](https://github.com/apollographql/apollo-tooling/commit/0a979b6996cea16197a54b5928d2f1d75799b19a)

## `apollo@2.0.12`

- `apollo@2.0.12`
  - added alias to `service:check` from `schema:check` [commit](https://github.com/apollographql/apollo-tooling/commit/2c692fbf4a4b5a0389f5d736eb771db1c8c7115e)
  - Add support for `localSchemaFile` in client config [#676](https://github.com/apollographql/apollo-tooling/pull/676)
- `apollo-language-server@1.0.10`
- `vscode-apollo@1.1.7`

## `apollo@2.0.11`

- `apollo@2.0.11`
  - Fixed header parsing [commit](https://github.com/apollographql/apollo-tooling/commit/08eaf8637d09dbe884887775033612fe9681c2ca)
- `apollo-language-server@1.0.9`
- `vscode-apollo@1.1.6`

## `apollo@2.0.10`

- `apollo@2.0.10`
- `vscode-apollo@1.1.5`
- `@apollographql/apollo-tools`
  - Add `apollo-env` dependency

## `apollo@2.0.9`

- `apollo@2.0.9`
  - Respect `--endpoint` and `--headers` flags for `client:*` commands [commit](https://github.com/apollographql/apollo-tooling/commit/5ed6153b9e9987d0563be51d7e38cfd54c7530bf)
- `apollo-language-server@1.0.7`
  - Fixed handling of missing `client` or `client.service` config key [commit](https://github.com/apollographql/apollo-tooling/commit/09c7b947f59b60ac60c629b050a9c161e2f79635)
  - Fixed issue of trying to load engine data when there's no API key [commit](https://github.com/apollographql/apollo-tooling/commit/744889f45e353e2db79ea7671a95a0608dd86f84)
- `vscode-apollo@1.1.4`

## `apollo@2.0.8`

- `apollo@2.0.8`
  - Fixed issue with package lockfile [commit](https://github.com/apollographql/apollo-tooling/commit/892172c473b533dcf52eecd55273d74ce725105c)

## `apollo@2.0.7`

- `apollo@2.0.7`
- `apollo-language-server@1.0.5`
  - Fix mutations to engine for schema uploads & operation registration [commit](https://github.com/apollographql/apollo-tooling/commit/0caf59250851cb1aaef1e4b24fac2474de13f449)
- `vscode-apollo@1.1.2`

## `apollo@2.0.6`

- `apollo@2.0.6`
- `apollo-language-server@1.0.4`
  - Changed engine queries to use `me` field instead of `service` to look up services [commit](https://github.com/apollographql/apollo-tooling/commit/50254d606296dbecfca981ea6785caaced300f89)
- `vscode-apollo@1.1.1`

## `apollo@2.0.5`

- `apollo@2.0.5`
  - Fix schema tag diagnostics
  - Provide ability to go from sdl to operations via references [commit](https://github.com/apollographql/apollo-tooling/commit/4f00eb9995fe5a25f52879e13bc9e3e80e72acad)
- `vscode-apollo@1.1.0`

## `apollo@2.0.4`

- `apollo@2.0.4`
  - Fixed config to only use service name from the correct key types [commit](https://github.com/apollographql/apollo-tooling/commit/6891f6a19c6d7de1c352944394ada9cba08ee87e)
  - Adjust priority of engine api key parsing to prefer flag over env key [commit](https://github.com/apollographql/apollo-tooling/commit/0694e84c4476848dd06252ac61f5a14353681ff2)

## `apollo@2.0.3`

- `apollo@2.0.3`
  - Fallback to using the engine service from the api key if not specified in configs [commit](https://github.com/apollographql/apollo-tooling/commit/59bc1ea84248cfbfcd74bddd40f610a4cce89c25)
- `vscode-apollo@1.0.3`

## `apollo@2.0.2`

- `apollo@2.0.2`
  - fixed missing dotenv dependency [#663](https://github.com/apollographql/apollo-tooling/commit/5557b7813ec15b9c2a57a34e83118ccbe0705ce1)
- `vscode-apollo@1.0.2`

## `apollo@2.0.1`

- `apollo@2.0.1`
  - Added better errors around missing services
  - Updated config documentation
  - Fixed failures with missing service name

## :tada: `apollo@2.0.0` :tada:

> NOTE: Many of the updates and changes in this release came from a complete rebuild of the Apollo CLI in preparation for GraphQL summit. Many of these changes can be traced to [this commit](https://github.com/apollographql/apollo-tooling/commit/d2d73f9c597845355b7ee267e411d80d1c493043) but aren't tied to a specific pull request, and won't be linked.

- `apollo@2.0.0`
  - :rocket: Features
    - `queries:register` to register operations with the apollo platform [#621](https://github.com/apollographql/apollo-tooling/pull/621)
    - Update `graphql` to version 14 [#624](https://github.com/apollographql/apollo-tooling/pull/624)
    - Supports a `.env` file for engine API keys [commit](https://github.com/apollographql/apollo-tooling/commit/4a2bccfd900fcd61b75caa5bf891ac7b049f3844)
  - :bug: Fixes & Changes
    - Fixed config file resolution [#591](https://github.com/apollographql/apollo-tooling/pull/591)
  - :boom: Breaking Changes
    - Introduced a new `apollo.config.js` format [commit](https://github.com/apollographql/apollo-tooling/commit/a8bb35627bb2a9cd397a98f485a271447b713a6f)
    - Changed format of `queries:extract` manifest to be more extensible [#611](https://github.com/apollographql/apollo-tooling/pull/611)
    - Changed manifest hash encoding to SHA-256 instead of SHA-512 [#611](https://github.com/apollographql/apollo-tooling/pull/611)
    - Deprecated apollo `schema:*`, and `codegen:*` commands and aliased usage to new commands
      - `apollo codegen:generate` aliases to `apollo client:codegen`
      - `apollo schema:check` aliases to `apollo service:check`
      - `apollo schema:download` aliases to `apollo service:download` (added 2.0.13)
      - `apollo schema:publish` aliases to `apollo service:push`
      - `apollo plugins:add` aliases to `apollo plugins:install`
      - `apollo plugins:unlink` and `apollo plugins:remove` aliases to `apollo plugins:uninstall`
    - Removed apollo `queries:*` commands
      - `apollo client:check` should be used in place of `apollo queries:check`
      - `apollo client:extract` should be used in place of `apollo queries:extract`
    - Deprecated `--queries` flag in client commands in place of the `--includes` flag
- `apollo-language-server@1.0.0`
  - Initial release of `apollo-language-server` to support `vscode-apollo`, and `apollo`
  - Supports editor features for...
    - Autocompletion of GraphQL documents
    - Hover information for fields anr arguments
    - Type definitions and references
    - Code lenses for open files
- `vscode-apollo@1.0.0`
  - Initial Release of `vscode-apollo`
  - Switching of schema tags [#632](https://github.com/apollographql/apollo-tooling/pull/632)
  - Supports all of the editor features exposed by `apollo-language-server`

## `apollo@1.9.2`

- `apollo@1.9.2`
  - Fixed codegen issues listed below
- `apollo-language-server@0.1.10`
  - Fixed version of `vscode-languageserver` to follow a stable version instead of `next`
- `apollo-codegen-swift@0.28.1`
  - Fixed swift enums to conform to Hashable [#578](https://github.com/apollographql/apollo-tooling/pull/578)
- `apollo-codegen-core@0.28.1`
  - Fixed `mergeInFieldsFromFragmentSpreads` when flag isn't specified [#537](https://github.com/apollographql/apollo-tooling/issues/537)

## `apollo@1.9.1`

- `apollo@1.9.1`
  - Fixes formatting of the `schema:download` response to match previous codegen schemas [#573](https://github.com/apollographql/apollo-tooling/pull/573)

## `apollo@1.9.0`

- `apollo@1.9.0`
  - Added `queries:extract` command to write a manifest of client queries [#553](https://github.com/apollographql/apollo-tooling/pull/553)

---

## v1.8.3

- `apollo`
  - [#546](https://github.com/apollographql/apollo-tooling/pull/546) Add `outputGlobalTypes` option to specify path for global types ([@danilobuerger](https://github.com/danilobuerger))
  - [#562](https://github.com/apollographql/apollo-tooling/pull/562) Preserve "\_\_schema" key when outputting JSON schema from `schema:download` [@jamesmbourne](https://github.com/jamesmbourne))
  - [#565](https://github.com/apollographql/apollo-tooling/pull/565) Support for self-signed certificates ([@robertomg](https://github.com/robertomg))
- `apollo-codegen-swift`
  - Treat `mergeInFieldsFromFragmentSpreads` as false in Swift codegen when flag isn't specified. Fixes [#537](https://github.com/apollographql/apollo-tooling/issues/537). [@martijnwalraven](https://github.com/martijnwalraven))

## v1.7.1

#### :rocket: Feature

- `apollo-codegen-typescript`
  - [#535](https://github.com/apollographql/apollo-tooling/pull/535) [TS] Sort global types so order is not determined by order of appearance ([@danilobuerger](https://github.com/danilobuerger))

#### :bug: Bug Fix

- `apollo-codegen-typescript`
  - [#544](https://github.com/apollographql/apollo-tooling/pull/544) Prepend ./ to TS relative paths to make them valid, Closes [#543](https://github.com/apollographql/apollo-tooling/issues/543) ([@shadaj](https://github.com/shadaj))
- `apollo-cli`
  - [#534](https://github.com/apollographql/apollo-tooling/pull/534) Allow to run `apollo codegen:generate --watch` on non tty devices ([@trojanowski](https://github.com/trojanowski))

#### Committers: 3

- Daniel Trojanowski ([@trojanowski](https://github.com/trojanowski))
- Danilo Bürger ([@danilobuerger](https://github.com/danilobuerger))
- Shadaj Laddad ([@shadaj](https://github.com/shadaj))

## v1.7.0

#### :rocket: Feature

- `apollo-language-server`, `apollo-vscode`
  - [#536](https://github.com/apollographql/apollo-tooling/pull/536) Display status of loading tasks for config and Engine stats ([@shadaj](https://github.com/shadaj))
- `apollo-cli`
  - [#533](https://github.com/apollographql/apollo-tooling/pull/533) Fall back to other methods of schema loading when one fails ([@shadaj](https://github.com/shadaj))
- `apollo-cli`, `apollo-codegen-typescript`
  - [#525](https://github.com/apollographql/apollo-tooling/pull/525) [TS] Elimate newlines at beginning of file and add newline at end of file ([@danilobuerger](https://github.com/danilobuerger))
- `apollo-cli`, `apollo-codegen-core`
  - [#526](https://github.com/apollographql/apollo-tooling/pull/526) Scan all files for queries and reduce use of default endpoints ([@shadaj](https://github.com/shadaj))
- `apollo-cli`, `apollo-codegen-typescript`, `common-test`
  - [#520](https://github.com/apollographql/apollo-tooling/pull/520) [TS] Dedup enums and inputs by using global types file ([@danilobuerger](https://github.com/danilobuerger))
- `apollo-codegen-typescript`
  - [#518](https://github.com/apollographql/apollo-tooling/pull/518) [typescript] Only output comment for input if there is one ([@danilobuerger](https://github.com/danilobuerger))

#### :bug: Bug Fix

- `apollo-cli`, `apollo-language-server`, `apollo-vscode`
  - [#519](https://github.com/apollographql/apollo-tooling/pull/519) [VSCode] Fix detection of projects inside folders ([@shadaj](https://github.com/shadaj))
- `apollo-cli`
  - [#511](https://github.com/apollographql/apollo-tooling/pull/511) Stop default flag values from overriding custom config ([@klujanrosas](https://github.com/klujanrosas))

#### :memo: Documentation

- `apollo-cli`, `apollo-vscode`
  - [#521](https://github.com/apollographql/apollo-tooling/pull/521) Add README for the VS Code extension ([@shadaj](https://github.com/shadaj))
- `apollo-cli`
  - [#524](https://github.com/apollographql/apollo-tooling/pull/524) Fixed broken command links ([@danilobuerger](https://github.com/danilobuerger))

#### Committers: 3

- Danilo Bürger ([@danilobuerger](https://github.com/danilobuerger))
- Kenneth Luján Rosas ([@klujanrosas](https://github.com/klujanrosas))
- Shadaj Laddad ([@shadaj](https://github.com/shadaj))

## v1.6.0

#### :rocket: Feature

- `apollo-language-server`
  - [#516](https://github.com/apollographql/apollo-tooling/pull/516) Code complete default query variables ([@shadaj](https://github.com/shadaj))
- `apollo-language-server`, `apollo-vscode`
  - [#515](https://github.com/apollographql/apollo-tooling/pull/515) Fix missing descriptions and add more hover information for arguments ([@shadaj](https://github.com/shadaj))
- `apollo-cli`, `apollo-codegen-core`, `apollo-language-server`, `apollo-vscode-webview`, `apollo-vscode`
  - [#512](https://github.com/apollographql/apollo-tooling/pull/512) React UI for webviews, fix file tracking and fragment spreads ([@shadaj](https://github.com/shadaj))
- `apollo-cli`, `apollo-language-server`, `apollo-vscode`
  - [#508](https://github.com/apollographql/apollo-tooling/pull/508) Support jumping to definitions in schema ([@shadaj](https://github.com/shadaj))

#### :memo: Documentation

- `apollo-cli`
  - [#505](https://github.com/apollographql/apollo-tooling/pull/505) Add docs for Apollo config ([@shadaj](https://github.com/shadaj))

#### :house: Internal

- `apollo-cli`, `apollo-language-server`
  - [#506](https://github.com/apollographql/apollo-tooling/pull/506) Share validation logic between CLI and language server ([@shadaj](https://github.com/shadaj))

#### Committers: 2

- Shadaj Laddad ([@shadaj](https://github.com/shadaj))
- Thomas Ladd ([@TLadd](https://github.com/TLadd))

## v1.5.0

#### :rocket: Feature

- `apollo-language-server`, `apollo-vscode`
  - [#504](https://github.com/apollographql/apollo-tooling/pull/504) Add Apollo VS Code extension ([@shadaj](https://github.com/shadaj))
- `apollo-cli`, `apollo-codegen-core`
  - [#497](https://github.com/apollographql/apollo-tooling/pull/497) Load config from apollo.config.js or package.json ([@shadaj](https://github.com/shadaj))

#### :house: Internal

- `apollo-cli`
  - [#492](https://github.com/apollographql/apollo-tooling/pull/492) Make TypeScript options more consistent across packages ([@shadaj](https://github.com/shadaj))

#### Committers: 1

- Shadaj Laddad ([@shadaj](https://github.com/shadaj))

## v1.4.0

#### :rocket: Feature

- `apollo-cli`
  - [#484](https://github.com/apollographql/apollo-tooling/pull/484) Support file watching for codegen:generate ([@shadaj](https://github.com/shadaj))
  - [#490](https://github.com/apollographql/apollo-tooling/pull/490) Assume the output is a directory when it has no extension ([@shadaj](https://github.com/shadaj))
  - [#485](https://github.com/apollographql/apollo-tooling/pull/485) Support loading server-side schema from JS/TS files ([@shadaj](https://github.com/shadaj))
  - [#483](https://github.com/apollographql/apollo-tooling/pull/483) Support generating based on .graphql schema files ([@shadaj](https://github.com/shadaj))

#### :bug: Bug Fix

- `apollo-cli`, `apollo-codegen-core`
  - [#488](https://github.com/apollographql/apollo-tooling/pull/488) Handle cases when storing server-defined models in local state ([@shadaj](https://github.com/shadaj))

#### :house: Internal

- `apollo-cli`
  - [#489](https://github.com/apollographql/apollo-tooling/pull/489) Remove unused locals in Apollo CLI ([@shadaj](https://github.com/shadaj))

#### Committers: 1

- Shadaj Laddad ([@shadaj](https://github.com/shadaj))

## v1.3.0

#### :rocket: Feature

- `apollo-cli`, `apollo-codegen-core`
  - [#480](https://github.com/apollographql/apollo-tooling/pull/480) Initial support for client-side schemas ([@shadaj](https://github.com/shadaj))

#### :house: Internal

- `apollo-cli`, `apollo-codegen-core`, `apollo-codegen-flow-legacy`, `apollo-codegen-flow`, `apollo-codegen-scala`, `apollo-codegen-swift`, `apollo-codegen-typescript-legacy`, `apollo-codegen-typescript`
  - [#479](https://github.com/apollographql/apollo-tooling/pull/479) Run `build` before publishing to prevent uploading stale code ([@shadaj](https://github.com/shadaj))

#### Committers: 1

- Shadaj Laddad ([@shadaj](https://github.com/shadaj))

## v1.2.0

#### :rocket: Feature

- `apollo-cli`
  - [#473](https://github.com/apollographql/apollo-tooling/pull/473) Queries command ([@jbaxleyiii](https://github.com/jbaxleyiii))
  - [#470](https://github.com/apollographql/apollo-tooling/pull/470) Restore ability to put generated files in a directory relative to source ([@mike-marcacci](https://github.com/mike-marcacci))
  - [#463](https://github.com/apollographql/apollo-tooling/pull/463) Add back JSON as target (for Apollo Android) ([@shadaj](https://github.com/shadaj))
  - [#456](https://github.com/apollographql/apollo-tooling/pull/456) Handle bash expansions for the queries argument ([@shadaj](https://github.com/shadaj))

#### :bug: Bug Fix

- `apollo-cli`, `apollo-codegen-core`
  - [#465](https://github.com/apollographql/apollo-tooling/pull/465) Improve typing of options and add more codegen tests ([@shadaj](https://github.com/shadaj))
  - [#464](https://github.com/apollographql/apollo-tooling/pull/464) Command-level unit tests for codegen ([@shadaj](https://github.com/shadaj))
- `apollo-cli`
  - [#470](https://github.com/apollographql/apollo-tooling/pull/470) Restore ability to put generated files in a directory relative to source ([@mike-marcacci](https://github.com/mike-marcacci))
  - [#457](https://github.com/apollographql/apollo-tooling/pull/457) Allow legacy targets to be used when manually specified ([@shadaj](https://github.com/shadaj))
- `apollo-codegen-flow`
  - [#461](https://github.com/apollographql/apollo-tooling/pull/461) Change generated flow files extension to .js instead of .ts ([@TLadd](https://github.com/TLadd))

#### :memo: Documentation

- `apollo-cli`
  - [#475](https://github.com/apollographql/apollo-tooling/pull/475) added clarity to schema:download ([@mwarger](https://github.com/mwarger))

#### :house: Internal

- Other
  - [#477](https://github.com/apollographql/apollo-tooling/pull/477) Add lerna-changelog to manage generating changelogs ([@shadaj](https://github.com/shadaj))
- `apollo-cli`, `apollo-codegen-core`
  - [#465](https://github.com/apollographql/apollo-tooling/pull/465) Improve typing of options and add more codegen tests ([@shadaj](https://github.com/shadaj))
  - [#464](https://github.com/apollographql/apollo-tooling/pull/464) Command-level unit tests for codegen ([@shadaj](https://github.com/shadaj))

#### Committers: 5

- James Baxley ([@jbaxleyiii](https://github.com/jbaxleyiii))
- Mat Warger ([@mwarger](https://github.com/mwarger))
- Mike Marcacci ([@mike-marcacci](https://github.com/mike-marcacci))
- Shadaj Laddad ([@shadaj](https://github.com/shadaj))
- Thomas Ladd ([@TLadd](https://github.com/TLadd))

# Legacy Apollo Codegen Changelog

## v0.20.2

- The TypeScript and Flow targets now use block comments to better handle multiline comments in schemas
- Fix crash when running on a version of Node that already supports Array.flatMap

## v0.20.1

- Fix issue with `flow-legacy` target being unusable

## v0.20.0

- **BREAKING**: The `typescript` and `flow` targets now refer to the modern implementations. The deprecated legacy targets are available under `typescript-legacy` and `flow-legacy`.
- **BREAKING**: The `--output` parameter to the CLI is now required for all targets.
- The TypeScript and Flow targets now support outputting types to either a single file or a directory, where types for each query will be separated
