[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / TestcaseDefinitionDecisionOptions

# Interface: TestcaseDefinitionDecisionOptions

Defined in: src/TestcaseDefinitionDecision.ts:33

## Properties

### data

> **data**: `Record`\<`string`, `string`\>

Defined in: src/TestcaseDefinitionDecision.ts:54

The data for this testcase.
 In case of a decision table, a test case is a column. All the data in this
column is stored by an identifier. The identifier is a value in the row.

***

### execute?

> `optional` **execute**: `boolean`

Defined in: src/TestcaseDefinitionDecision.ts:44

Should this test case be executed or is it only for a reference

***

### logger

> **logger**: `LoggerInterface`

Defined in: src/TestcaseDefinitionDecision.ts:57

The logger for this model

***

### multiplicity?

> `optional` **multiplicity**: `number`

Defined in: src/TestcaseDefinitionDecision.ts:41

Defines how often this test case should be created. Any number greater than 0

***

### table

> **table**: [`TableDecisionInterface`](TableDecisionInterface.md)

Defined in: src/TestcaseDefinitionDecision.ts:47

A back reference to the table containing this test case

***

### tableMeta

> **tableMeta**: `MetaTable`

Defined in: src/TestcaseDefinitionDecision.ts:35

Some meta information for this test case

***

### testcaseName

> **testcaseName**: `string`

Defined in: src/TestcaseDefinitionDecision.ts:38

The name of the test case
