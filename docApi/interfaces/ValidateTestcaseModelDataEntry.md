[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / ValidateTestcaseModelDataEntry

# Interface: ValidateTestcaseModelDataEntry

Defined in: src/validate/validateModelInterface.ts:72

Represents the data entry for a particular section within a test case.
It includes the row IDs for that section, the parent section ID,
and the computed binary values (both as numbers and strings).

## Properties

### parentSectionId

> **parentSectionId**: `string`

Defined in: src/validate/validateModelInterface.ts:81

The ID of the parent section.

***

### rows

> **rows**: `string`[]

Defined in: src/validate/validateModelInterface.ts:76

The list of row IDs for the section.

***

### val?

> `optional` **val**: `number` \| `number`[]

Defined in: src/validate/validateModelInterface.ts:88

The computed value(s) for the section.
If the section has more than 31 rows, the value is split into an array of numbers.
The value is derived from a binary string (e.g., "011010").

***

### valStr?

> `optional` **valStr**: `string` \| `string`[]

Defined in: src/validate/validateModelInterface.ts:93

The binary string representation of the computed value(s).
