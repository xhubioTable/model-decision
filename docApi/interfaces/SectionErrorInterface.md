[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / SectionErrorInterface

# Interface: SectionErrorInterface

Defined in: src/interface/SectionInterface.ts:81

Interface representing a validation error for a section.

This error interface captures details about issues found during the validation of a section definition.

## Properties

### column?

> `optional` **column**: `string`

Defined in: src/interface/SectionInterface.ts:121

The column ID that caused the error, if applicable.

***

### level

> **level**: `string`

Defined in: src/interface/SectionInterface.ts:111

The log level for the error.
(FIXME: Consider replacing this string with an enum for log levels.)

***

### message

> **message**: `string`

Defined in: src/interface/SectionInterface.ts:105

A descriptive error message.

***

### rowId?

> `optional` **rowId**: `string`

Defined in: src/interface/SectionInterface.ts:116

The row ID that caused the error, if applicable.

***

### section?

> `optional` **section**: [`SectionInterface`](SectionInterface.md)

Defined in: src/interface/SectionInterface.ts:85

The section where the error occurred.

***

### tableName?

> `optional` **tableName**: `string`

Defined in: src/interface/SectionInterface.ts:95

The name of the table associated with the error.

***

### testCase?

> `optional` **testCase**: `TestcaseDefinitionInterface`

Defined in: src/interface/SectionInterface.ts:90

The test case related to the error, if applicable.

***

### type

> **type**: `string`

Defined in: src/interface/SectionInterface.ts:100

The type of the error.
