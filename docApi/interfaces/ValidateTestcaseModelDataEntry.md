[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / ValidateTestcaseModelDataEntry

# Interface: ValidateTestcaseModelDataEntry

Defined in: [src/validate/validateModelInterface.ts:72](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/validate/validateModelInterface.ts#L72)

Represents the data entry for a particular section within a test case.
It includes the row IDs for that section, the parent section ID,
and the computed binary values (both as numbers and strings).

## Properties

### parentSectionId

> **parentSectionId**: `string`

Defined in: [src/validate/validateModelInterface.ts:81](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/validate/validateModelInterface.ts#L81)

The ID of the parent section.

***

### rows

> **rows**: `string`[]

Defined in: [src/validate/validateModelInterface.ts:76](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/validate/validateModelInterface.ts#L76)

The list of row IDs for the section.

***

### val?

> `optional` **val**: `number` \| `number`[]

Defined in: [src/validate/validateModelInterface.ts:88](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/validate/validateModelInterface.ts#L88)

The computed value(s) for the section.
If the section has more than 31 rows, the value is split into an array of numbers.
The value is derived from a binary string (e.g., "011010").

***

### valStr?

> `optional` **valStr**: `string` \| `string`[]

Defined in: [src/validate/validateModelInterface.ts:93](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/validate/validateModelInterface.ts#L93)

The binary string representation of the computed value(s).
