[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / SectionInterface

# Interface: SectionInterface

Defined in: [src/interface/SectionInterface.ts:10](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L10)

Interface defining the structure and behavior of a section in a decision table.

A decision table is divided into various sections, each providing different functionalities.
This interface specifies common properties and methods that all section implementations must have.

## Properties

### createNewRow()

> **createNewRow**: () => `undefined` \| `string`

Defined in: [src/interface/SectionInterface.ts:60](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L60)

Creates a new row for this section.
Generates a new UUID and adds it to the row array.

#### Returns

`undefined` \| `string`

The new row ID, or undefined if no row is created.

***

### dataRows

> **dataRows**: `string`[]

Defined in: [src/interface/SectionInterface.ts:41](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L41)

An array storing the IDs of the data rows in this section.

***

### getRowIds()

> **getRowIds**: () => `string`[]

Defined in: [src/interface/SectionInterface.ts:66](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L66)

Retrieves all row IDs associated with this section.

#### Returns

`string`[]

An array of row IDs.

***

### headerRow

> **headerRow**: `string`

Defined in: [src/interface/SectionInterface.ts:36](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L36)

The identifier used to identify the header row of the section.
(FIXME: Consider renaming this to headerRowId)

***

### isHeader()

> **isHeader**: (`rowId`) => `boolean`

Defined in: [src/interface/SectionInterface.ts:53](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L53)

Determines if the provided row ID corresponds to the header row.

#### Parameters

##### rowId

`string`

The row ID to check.

#### Returns

`boolean`

True if the row ID is the header row, false otherwise.

***

### mandatory

> **mandatory**: `boolean`

Defined in: [src/interface/SectionInterface.ts:25](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L25)

Indicates whether the section must have at least one value.

***

### multiInstancesAllowed

> **multiInstancesAllowed**: `boolean`

Defined in: [src/interface/SectionInterface.ts:46](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L46)

If set to false, only one instance of this section type is allowed per model.

***

### multiple

> **multiple**: `boolean`

Defined in: [src/interface/SectionInterface.ts:30](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L30)

Indicates whether the section may have more than one row.

***

### name?

> `optional` **name**: `string`

Defined in: [src/interface/SectionInterface.ts:20](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L20)

The name of this section.

***

### sectionType

> **sectionType**: [`SectionType`](../enumerations/SectionType.md)

Defined in: [src/interface/SectionInterface.ts:15](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L15)

The type of the section.
This should be overwritten by subclasses to specify the actual section type.

***

### validate()

> **validate**: () => [`SectionErrorInterface`](SectionErrorInterface.md)[]

Defined in: [src/interface/SectionInterface.ts:73](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/interface/SectionInterface.ts#L73)

Validates the section definition.
Checks that required properties, such as the section name, are defined.

#### Returns

[`SectionErrorInterface`](SectionErrorInterface.md)[]

An array of issues found during validation.
