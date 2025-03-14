[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / TableDecisionInterface

# Interface: TableDecisionInterface

Defined in: [src/interface/TableDecisionInterface.ts:13](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/TableDecisionInterface.ts#L13)

Defines the interface for a decision table.

A decision table is composed of test cases and various sections that
define its structure and behavior. This interface extends the basic
TableInterface with properties and methods specific to decision tables.

## Extends

- `TableInterface`

## Properties

### calculate()

> **calculate**: () => `void`

Defined in: [src/interface/TableDecisionInterface.ts:51](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/TableDecisionInterface.ts#L51)

Calculates the summary for each section.
This method processes the data rows of each section, updates the section values,
and populates the summary section with overall totals.

#### Returns

`void`

***

### fileName

> **fileName**: `string`

Defined in: node\_modules/@xhubiotable/model/dist/src/TableInterface.d.ts:12

The file name from which the table is loaded.

#### Inherited from

`TableInterface.fileName`

***

### getTestcaseForName()

> **getTestcaseForName**: (`testcaseName`) => `TestcaseDefinitionInterface`

Defined in: node\_modules/@xhubiotable/model/dist/src/TableInterface.d.ts:36

Retrieves the test case definition for a given test case name.

#### Parameters

##### testcaseName

`string`

The name of the test case to retrieve.

#### Returns

`TestcaseDefinitionInterface`

The test case definition corresponding to the provided name.

#### Throws

An error if the test case cannot be found.

#### Inherited from

`TableInterface.getTestcaseForName`

***

### logger

> **logger**: `LoggerInterface`

Defined in: node\_modules/@xhubiotable/model/dist/src/TableInterface.d.ts:20

Logger instance used for logging operations related to the table.

#### Inherited from

`TableInterface.logger`

***

### processRanges()

> **processRanges**: (`rangeName`) => `string`[]

Defined in: node\_modules/@xhubiotable/model/dist/src/TableInterface.d.ts:52

Parses a test case name or range and returns an array of individual test case names.

For example, a range name such as "tc12-14" is expanded to:
["tc12", "tc13", "tc14"].

#### Parameters

##### rangeName

`string`

The test case name or range to parse.

#### Returns

`string`[]

An array of test case names.

#### Inherited from

`TableInterface.processRanges`

***

### sectionNames

> **sectionNames**: `Set`\<`string`\>

Defined in: [src/interface/TableDecisionInterface.ts:44](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/TableDecisionInterface.ts#L44)

A set that stores a unique key for each section, combining the section type and section name.
This ensures that each section name is unique for its type within the table.

***

### sectionOrder

> **sectionOrder**: `string`[]

Defined in: [src/interface/TableDecisionInterface.ts:32](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/TableDecisionInterface.ts#L32)

An array of section IDs representing the order of sections in the table.

***

### sections

> **sections**: `Record`\<`string`, [`SectionInterface`](SectionInterface.md)\>

Defined in: [src/interface/TableDecisionInterface.ts:27](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/TableDecisionInterface.ts#L27)

A mapping of section IDs to their corresponding section definitions.

***

### singleCheck

> **singleCheck**: `Map`\<[`SectionType`](../enumerations/SectionType.md), [`SectionInterface`](SectionInterface.md)\>

Defined in: [src/interface/TableDecisionInterface.ts:38](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/TableDecisionInterface.ts#L38)

A map used to ensure that sections which should exist only once are not duplicated.
The key is the SectionType and the value is the corresponding section definition.

***

### tableMeta

> `readonly` **tableMeta**: `MetaTable`

Defined in: node\_modules/@xhubiotable/model/dist/src/TableInterface.d.ts:24

Read-only meta information about the table.

#### Inherited from

`TableInterface.tableMeta`

***

### tableName

> **tableName**: `string`

Defined in: node\_modules/@xhubiotable/model/dist/src/TableInterface.d.ts:16

The human-readable name of the table.

#### Inherited from

`TableInterface.tableName`

***

### tableType

> `readonly` **tableType**: `string`

Defined in: node\_modules/@xhubiotable/model/dist/src/TableInterface.d.ts:28

A string identifier representing the type of table (e.g., 'decision-table').

#### Inherited from

`TableInterface.tableType`

***

### testcaseOrder

> **testcaseOrder**: `string`[]

Defined in: [src/interface/TableDecisionInterface.ts:17](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/TableDecisionInterface.ts#L17)

An array of test case IDs representing the order in which test cases are processed.

***

### testcases

> **testcases**: `Record`\<`string`, [`TestcaseDefinitionDecision`](../classes/TestcaseDefinitionDecision.md)\>

Defined in: [src/interface/TableDecisionInterface.ts:22](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/TableDecisionInterface.ts#L22)

A mapping of test case IDs to their corresponding TestcaseDefinitionDecision objects.

***

### validate()

> **validate**: () => `void`

Defined in: [src/interface/TableDecisionInterface.ts:64](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/TableDecisionInterface.ts#L64)

Validates the decision table model.

Validation rules include:
- The table must have exactly one summary section.
- The table must have at least one field section.
- The names of the fields must be unique within the table.
- The table must have at least one test case.

All validation issues found are returned.

#### Returns

`void`

## Methods

### getTestcasesForExecution()

> **getTestcasesForExecution**(): `Generator`\<`TestcaseDefinitionInterface`, `void`, `unknown`\>

Defined in: node\_modules/@xhubiotable/model/dist/src/TableInterface.d.ts:42

A generator function that yields all test cases intended for execution.

#### Returns

`Generator`\<`TestcaseDefinitionInterface`, `void`, `unknown`\>

A generator yielding test case definitions.

#### Inherited from

`TableInterface.getTestcasesForExecution`
