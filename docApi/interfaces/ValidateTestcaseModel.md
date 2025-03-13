[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / ValidateTestcaseModel

# Interface: ValidateTestcaseModel

Defined in: src/validate/validateModelInterface.ts:29

Represents the validation model for a single test case.
This model contains the test case's unique identifier, the data mapped by section,
a name used for combining test cases, a flag indicating whether the test case has been merged,
and an optional list of merged test case IDs.

## Properties

### data

> **data**: [`ValidateTestcaseModelData`](../type-aliases/ValidateTestcaseModelData.md)

Defined in: src/validate/validateModelInterface.ts:39

The data for the test case.
It maps section IDs to their respective data entries.

***

### id

> **id**: `string`

Defined in: src/validate/validateModelInterface.ts:33

The unique identifier of the test case.

***

### merge?

> `optional` **merge**: `string`[]

Defined in: src/validate/validateModelInterface.ts:55

Optional list of test case IDs that were merged into this test case.

***

### name

> **name**: `string`

Defined in: src/validate/validateModelInterface.ts:44

A name used for validation and combining test cases.

***

### skip

> **skip**: `boolean`

Defined in: src/validate/validateModelInterface.ts:50

Flag indicating whether this test case has already been combined.
Set to true if the test case is merged with another.
