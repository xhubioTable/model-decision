[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / TestcaseDefinitionDecision

# Class: TestcaseDefinitionDecision

Defined in: src/TestcaseDefinitionDecision.ts:63

A test case is one column in the test case part. This is the implementation for the decision table.

## Implements

- `TestcaseDefinitionInterface`

## Constructors

### new TestcaseDefinitionDecision()

> **new TestcaseDefinitionDecision**(`opts`): [`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md)

Defined in: src/TestcaseDefinitionDecision.ts:98

#### Parameters

##### opts

[`TestcaseDefinitionDecisionOptions`](../interfaces/TestcaseDefinitionDecisionOptions.md)

#### Returns

[`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md)

## Properties

### data

> **data**: `Record`\<`string`, `string`\>

Defined in: src/TestcaseDefinitionDecision.ts:87

The data for this testcase.
 In case of a decision table, a test case is a column. All the data in this
column is stored by an identifier. The identifier is a value in the row.

#### Implementation of

`TestcaseDefinitionInterface.data`

***

### execute

> **execute**: `boolean` = `true`

Defined in: src/TestcaseDefinitionDecision.ts:77

Should this test case be executed or is it only for a reference

#### Implementation of

`TestcaseDefinitionInterface.execute`

***

### id

> **id**: `string`

Defined in: src/TestcaseDefinitionDecision.ts:65

The id of this test case. This could be any unique value

#### Implementation of

`TestcaseDefinitionInterface.id`

***

### isPartOfCompletion

> **isPartOfCompletion**: `boolean` = `true`

Defined in: src/TestcaseDefinitionDecision.ts:93

Defines if this testcase is included into the completness computation

***

### logger

> **logger**: `LoggerInterface`

Defined in: src/TestcaseDefinitionDecision.ts:96

The logger for this model

#### Implementation of

`TestcaseDefinitionInterface.logger`

***

### multiplicity

> **multiplicity**: `number` = `1`

Defined in: src/TestcaseDefinitionDecision.ts:74

Defines how often this test case should be created. Any number greater than 0

#### Implementation of

`TestcaseDefinitionInterface.multiplicity`

***

### neverExecute

> **neverExecute**: `boolean` = `false`

Defined in: src/TestcaseDefinitionDecision.ts:80

This means that a test case should not be executed if a referenced test case has this set to true

#### Implementation of

`TestcaseDefinitionInterface.neverExecute`

***

### table

> **table**: [`TableDecisionInterface`](../interfaces/TableDecisionInterface.md)

Defined in: src/TestcaseDefinitionDecision.ts:90

A back reference to the table containing this test case

#### Implementation of

`TestcaseDefinitionInterface.table`

***

### tableMeta

> **tableMeta**: `MetaTable`

Defined in: src/TestcaseDefinitionDecision.ts:68

Some meta information for this test case

***

### testcaseName

> **testcaseName**: `string`

Defined in: src/TestcaseDefinitionDecision.ts:71

The name of the test case

## Accessors

### testcaseMeta

#### Get Signature

> **get** **testcaseMeta**(): `MetaTestcase`

Defined in: src/TestcaseDefinitionDecision.ts:123

Read-only meta-information for this test case.
Contains details inherited from the table (e.g., test case name).

##### Returns

`MetaTestcase`

#### Implementation of

`TestcaseDefinitionInterface.testcaseMeta`

## Methods

### calculate()

> **calculate**(`sectionRowId`, `rowIds`): `number`

Defined in: src/TestcaseDefinitionDecision.ts:536

Claculates how many entries per section are defined

#### Parameters

##### sectionRowId

`string`

The id of the section containing these rows

##### rowIds

`string`[]

All the arrays of this section

#### Returns

`number`

The number of entries

***

### clone()

> **clone**(): [`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md)

Defined in: src/TestcaseDefinitionDecision.ts:134

Clone the current testcase definition.

#### Returns

[`TestcaseDefinitionDecision`](TestcaseDefinitionDecision.md)

A clone of this test case definition.

***

### createFilter()

> **createFilter**(): `FilterInterface`[]

Defined in: src/TestcaseDefinitionDecision.ts:181

Returns all the filter found in this test case

#### Returns

`FilterInterface`[]

An Array with all the found filter

#### Implementation of

`TestcaseDefinitionInterface.createFilter`

***

### createGeneratorSwitches()

> **createGeneratorSwitches**(): `string`[]

Defined in: src/TestcaseDefinitionDecision.ts:216

Returns a list of generator names which should not be executed

#### Returns

`string`[]

An Array with alle the generator names to be switched off for this test case

#### Implementation of

`TestcaseDefinitionInterface.createGeneratorSwitches`

***

### createTags()

> **createTags**(): `string`[]

Defined in: src/TestcaseDefinitionDecision.ts:155

Returns all the tag values found in this test case

#### Returns

`string`[]

An Array with all the found tag values

#### Implementation of

`TestcaseDefinitionInterface.createTags`

***

### createTodos()

> **createTodos**(): `TestcaseTodosInterface`

Defined in: src/TestcaseDefinitionDecision.ts:267

Create all the todos for this testcase definition

#### Returns

`TestcaseTodosInterface`

An object with all the todos by there type

#### Implementation of

`TestcaseDefinitionInterface.createTodos`

***

### getValue()

> **getValue**(`rowId`): `string`

Defined in: src/TestcaseDefinitionDecision.ts:569

Set a value for a row in this testcase

#### Parameters

##### rowId

`string`

The rowId for this value

#### Returns

`string`

The value of this row id

***

### setValue()

> **setValue**(`rowId`, `value`): `void`

Defined in: src/TestcaseDefinitionDecision.ts:553

Set a value for a row in this testcase

#### Parameters

##### rowId

`string`

The rowId for this value

##### value

The value to be set

`undefined` | `string`

#### Returns

`void`

***

### validate()

> **validate**(`section`): [`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

Defined in: src/TestcaseDefinitionDecision.ts:582

Validates this section definition.
- A testcase must have a name
- A fieldSection must have at least one subSection
- If mandatory = true for a section, it must have at least one entry
- if multiple = false it must have only one entry per section

#### Parameters

##### section

[`SectionInterface`](../interfaces/SectionInterface.md)

The section to be validated

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of issues found
