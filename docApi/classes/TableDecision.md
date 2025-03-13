[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / TableDecision

# Class: TableDecision

Defined in: src/TableDecision.ts:38

Implementation of a decision table model.

This class manages test cases and their associated sections for a decision table.
It maintains the order of test cases, stores their definitions, and holds the definitions of various sections,
such as field, summary, multiplicity, etc. It provides methods to retrieve test cases by name, iterate over
test cases for execution, calculate summary information, validate the model, and add new sections or test cases.

## Implements

- [`TableDecisionInterface`](../interfaces/TableDecisionInterface.md)

## Constructors

### new TableDecision()

> **new TableDecision**(`opts`): [`TableDecision`](TableDecision.md)

Defined in: src/TableDecision.ts:82

Constructs a new instance of TableDecision.

#### Parameters

##### opts

[`TableDecisionOptions`](../interfaces/TableDecisionOptions.md)

Options for initializing the table, including fileName, tableName, and logger.

#### Returns

[`TableDecision`](TableDecision.md)

## Properties

### fileName

> **fileName**: `string`

Defined in: src/TableDecision.ts:46

The file name from which the table is loaded

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`fileName`](../interfaces/TableDecisionInterface.md#filename)

***

### logger

> **logger**: `LoggerInterface`

Defined in: src/TableDecision.ts:43

Logger instance used for logging operations

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`logger`](../interfaces/TableDecisionInterface.md#logger)

***

### sectionNames

> **sectionNames**: `Set`\<`string`\>

Defined in: src/TableDecision.ts:76

Set to store unique keys for sections (combination of section type and section name)
to ensure that section names are unique within the same type.

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`sectionNames`](../interfaces/TableDecisionInterface.md#sectionnames)

***

### sectionOrder

> **sectionOrder**: `string`[] = `[]`

Defined in: src/TableDecision.ts:61

Array of section IDs representing the order of sections in the table

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`sectionOrder`](../interfaces/TableDecisionInterface.md#sectionorder)

***

### sections

> **sections**: `Record`\<`string`, [`SectionInterface`](../interfaces/SectionInterface.md)\> = `{}`

Defined in: src/TableDecision.ts:58

Mapping of section IDs to section definitions

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`sections`](../interfaces/TableDecisionInterface.md#sections)

***

### singleCheck

> **singleCheck**: `Map`\<[`SectionType`](../enumerations/SectionType.md), [`SectionInterface`](../interfaces/SectionInterface.md)\>

Defined in: src/TableDecision.ts:67

Map to enforce that sections which should exist only once are not duplicated.
The key is the section type and the value is the corresponding section definition.

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`singleCheck`](../interfaces/TableDecisionInterface.md#singlecheck)

***

### tableName

> **tableName**: `string`

Defined in: src/TableDecision.ts:49

The human-readable name of the table

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`tableName`](../interfaces/TableDecisionInterface.md#tablename)

***

### tableType

> `readonly` **tableType**: `string` = `TABLE_TYPE_DECISION_TABLE`

Defined in: src/TableDecision.ts:40

The table type, set to the constant TABLE_TYPE_DECISION_TABLE

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`tableType`](../interfaces/TableDecisionInterface.md#tabletype)

***

### testcaseOrder

> **testcaseOrder**: `string`[] = `[]`

Defined in: src/TableDecision.ts:52

Array of test case IDs defining the order in which test cases are processed

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`testcaseOrder`](../interfaces/TableDecisionInterface.md#testcaseorder)

***

### testcases

> **testcases**: `Record`\<`string`, [`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md)\> = `{}`

Defined in: src/TableDecision.ts:55

Mapping of test case IDs to their TestcaseDefinitionDecision objects

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`testcases`](../interfaces/TableDecisionInterface.md#testcases)

## Accessors

### tableMeta

#### Get Signature

> **get** **tableMeta**(): `MetaTable`

Defined in: src/TableDecision.ts:92

Returns the meta-information of the table.

##### Returns

`MetaTable`

An object containing fileName, tableName, and tableType.

Read-only meta information about the table.

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`tableMeta`](../interfaces/TableDecisionInterface.md#tablemeta)

## Methods

### addNewExecuteSection()

> **addNewExecuteSection**(`name`, `position`?): [`ExecuteSectionDefinition`](ExecuteSectionDefinition.md)

Defined in: src/TableDecision.ts:536

Adds a new ExecuteSection to the table.
Instantiates a new ExecuteSectionDefinition and adds it via the addNewSection helper.
Note: Test cases are not updated when adding an execute section.

#### Parameters

##### name

`string`

The unique name for the new execute section.

##### position?

`number`

(Optional) The position at which to insert the new section.

#### Returns

[`ExecuteSectionDefinition`](ExecuteSectionDefinition.md)

The newly created ExecuteSectionDefinition.

***

### addNewFieldSection()

> **addNewFieldSection**(`name`, `position`?): [`FieldSectionDefinition`](FieldSectionDefinition.md)

Defined in: src/TableDecision.ts:438

Adds a new FieldSection to the table.
Instantiates a new FieldSectionDefinition and adds it via the addNewSection helper.

#### Parameters

##### name

`string`

The unique name for the new field section.

##### position?

`number`

(Optional) The position at which to insert the new section.

#### Returns

[`FieldSectionDefinition`](FieldSectionDefinition.md)

The newly created FieldSectionDefinition.

***

### addNewFilterSection()

> **addNewFilterSection**(`name`, `position`?): [`FilterSectionDefinition`](FilterSectionDefinition.md)

Defined in: src/TableDecision.ts:483

Adds a new FilterSection to the table.
Instantiates a new FilterSectionDefinition and adds it via the addNewSection helper.

#### Parameters

##### name

`string`

The unique name for the new filter section.

##### position?

`number`

(Optional) The position at which to insert the new section.

#### Returns

[`FilterSectionDefinition`](FilterSectionDefinition.md)

The newly created FilterSectionDefinition.

***

### addNewGeneratorSwitchSection()

> **addNewGeneratorSwitchSection**(`name`, `position`?): [`GeneratorSwitchSectionDefinition`](GeneratorSwitchSectionDefinition.md)

Defined in: src/TableDecision.ts:500

Adds a new GeneratorSwitchSection to the table.
Instantiates a new GeneratorSwitchSectionDefinition and adds it via the addNewSection helper.

#### Parameters

##### name

`string`

The unique name for the new generator switch section.

##### position?

`number`

(Optional) The position at which to insert the new section.

#### Returns

[`GeneratorSwitchSectionDefinition`](GeneratorSwitchSectionDefinition.md)

The newly created GeneratorSwitchSectionDefinition.

***

### addNewMultiplicitySection()

> **addNewMultiplicitySection**(`name`, `position`?): [`MultiplicitySectionDefinition`](MultiplicitySectionDefinition.md)

Defined in: src/TableDecision.ts:572

Adds a new MultiplicitySection to the table.
Instantiates a new MultiplicitySectionDefinition and adds it via the addNewSection helper.
Note: Test cases are not updated when adding a multiplicity section.

#### Parameters

##### name

`string`

The unique name for the new multiplicity section.

##### position?

`number`

(Optional) The position at which to insert the new section.

#### Returns

[`MultiplicitySectionDefinition`](MultiplicitySectionDefinition.md)

The newly created MultiplicitySectionDefinition.

***

### addNewMultiRowSection()

> **addNewMultiRowSection**(`name`, `position`?): [`MultiRowSectionDefinition`](MultiRowSectionDefinition.md)

Defined in: src/TableDecision.ts:452

Adds a new MultiRowSection to the table.
Instantiates a new MultiRowSectionDefinition and adds it via the addNewSection helper.

#### Parameters

##### name

`string`

The unique name for the new multi-row section.

##### position?

`number`

(Optional) The position at which to insert the new section.

#### Returns

[`MultiRowSectionDefinition`](MultiRowSectionDefinition.md)

The newly created MultiRowSectionDefinition.

***

### addNewNeverExecuteSection()

> **addNewNeverExecuteSection**(`name`, `position`?): [`NeverExecuteSectionDefinition`](NeverExecuteSectionDefinition.md)

Defined in: src/TableDecision.ts:554

Adds a new NeverExecuteSection to the table.
Instantiates a new NeverExecuteSectionDefinition and adds it via the addNewSection helper.
Note: Test cases are not updated when adding a never-execute section.

#### Parameters

##### name

`string`

The unique name for the new never-execute section.

##### position?

`number`

(Optional) The position at which to insert the new section.

#### Returns

[`NeverExecuteSectionDefinition`](NeverExecuteSectionDefinition.md)

The newly created NeverExecuteSectionDefinition.

***

### addNewSummarySection()

> **addNewSummarySection**(`name`, `position`?): [`SummarySectionDefinition`](SummarySectionDefinition.md)

Defined in: src/TableDecision.ts:518

Adds a new SummarySection to the table.
Instantiates a new SummarySectionDefinition and adds it via the addNewSection helper.
Note: Test cases are not updated when adding a summary section.

#### Parameters

##### name

`string`

The unique name for the new summary section.

##### position?

`number`

(Optional) The position at which to insert the new section.

#### Returns

[`SummarySectionDefinition`](SummarySectionDefinition.md)

The newly created SummarySectionDefinition.

***

### addNewTagSection()

> **addNewTagSection**(`name`, `position`?): [`TagSectionDefinition`](TagSectionDefinition.md)

Defined in: src/TableDecision.ts:469

Adds a new TagSection to the table.
Instantiates a new TagSectionDefinition and adds it via the addNewSection helper.

#### Parameters

##### name

`string`

The unique name for the new tag section.

##### position?

`number`

(Optional) The position at which to insert the new section.

#### Returns

[`TagSectionDefinition`](TagSectionDefinition.md)

The newly created TagSectionDefinition.

***

### addNewTestcase()

> **addNewTestcase**(`name`, `position`?): [`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md)

Defined in: src/TableDecision.ts:406

Adds a new test case to the table.
Creates a new TestcaseDefinitionDecision instance with the current table meta-information,
inserts it into the testcases record, and updates the testcaseOrder array.

#### Parameters

##### name

`string`

The name for the new test case.

##### position?

`number`

(Optional) The position at which to insert the new test case.

#### Returns

[`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md)

The newly created TestcaseDefinitionDecision instance.

***

### calculate()

> **calculate**(): `void`

Defined in: src/TableDecision.ts:192

Calculates the summary for each section.
This method processes the data rows of each section, updates the section values,
and populates the summary section with overall totals.

#### Returns

`void`

#### Throws

Error if the summary section is missing.

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`calculate`](../interfaces/TableDecisionInterface.md#calculate)

***

### getTestcaseForName()

> **getTestcaseForName**(`testcaseName`): [`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md)

Defined in: src/TableDecision.ts:107

Retrieves the test case definition for a given test case name.

#### Parameters

##### testcaseName

`string`

The name of the test case to retrieve.

#### Returns

[`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md)

The matching TestcaseDefinitionDecision.

#### Throws

An error if the test case cannot be found.

#### Throws

Error if no matching test case is found.

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`getTestcaseForName`](../interfaces/TableDecisionInterface.md#gettestcaseforname)

***

### getTestcasesForExecution()

> **getTestcasesForExecution**(): `Generator`\<[`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md), `void`, `void`\>

Defined in: src/TableDecision.ts:125

Generator function that yields all test cases intended for execution.
For each test case marked for execution, the method clones the test case definition.
If a test case has a multiplicity greater than one, its name is updated to include the instance number.

#### Returns

`Generator`\<[`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md), `void`, `void`\>

A generator yielding cloned TestcaseDefinitionDecision objects.

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`getTestcasesForExecution`](../interfaces/TableDecisionInterface.md#gettestcasesforexecution)

***

### processRanges()

> **processRanges**(`testcaseName`): `string`[]

Defined in: src/TableDecision.ts:152

Parses a test case name or range and returns an array of individual test case names.

For example, a range name such as "tc12-14" is expanded to:
["tc12", "tc13", "tc14"].

#### Parameters

##### testcaseName

`string`

The test case name or range string.

#### Returns

`string`[]

An array of test case names.

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`processRanges`](../interfaces/TableDecisionInterface.md#processranges)

***

### validate()

> **validate**(): [`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

Defined in: src/TableDecision.ts:269

Validates the decision table model.

Validation rules include:
- The table must have exactly one summary section.
- The table must have at least one field section.
- The names of the fields must be unique within the table.
- The table must have at least one test case.

All validation issues found are returned.

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of validation issues, each conforming to SectionErrorInterface.

#### Implementation of

[`TableDecisionInterface`](../interfaces/TableDecisionInterface.md).[`validate`](../interfaces/TableDecisionInterface.md#validate)
