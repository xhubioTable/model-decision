[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / MultiRowSectionDefinition

# Class: MultiRowSectionDefinition

Defined in: [src/sections/MultiRowSectionDefinition.ts:11](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/MultiRowSectionDefinition.ts#L11)

Represents a multi-row section in a decision table.

This section does not enforce any specific functionality on its own;
its primary role is to transfer data into the test case data model.
It is commonly used to add extra attributes or metadata to test cases.

## Extends

- `BaseSectionDefinition`

## Constructors

### new MultiRowSectionDefinition()

> **new MultiRowSectionDefinition**(`opts`): [`MultiRowSectionDefinition`](MultiRowSectionDefinition.md)

Defined in: [src/sections/BaseSectionDefinition.ts:73](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L73)

Constructs a new BaseSectionDefinition.

#### Parameters

##### opts

[`BaseSectionDefinitionOptions`](../interfaces/BaseSectionDefinitionOptions.md)

Options for initializing the section, including an optional name and header row identifier.

#### Returns

[`MultiRowSectionDefinition`](MultiRowSectionDefinition.md)

#### Inherited from

`BaseSectionDefinition.constructor`

## Properties

### \_dataRows

> `protected` **\_dataRows**: `string`[] = `[]`

Defined in: [src/sections/BaseSectionDefinition.ts:61](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L61)

Stores the IDs of the data rows for this section.

#### Inherited from

`BaseSectionDefinition._dataRows`

***

### comments

> **comments**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/sections/MultiRowSectionDefinition.ts:25](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/MultiRowSectionDefinition.ts#L25)

Maps row IDs to 'comment' entries.

***

### headerRow

> **headerRow**: `string`

Defined in: [src/sections/BaseSectionDefinition.ts:56](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L56)

The identifier for the header row of the section.
(FIXME: Consider renaming to headerRowId)

#### Inherited from

`BaseSectionDefinition.headerRow`

***

### keys

> **keys**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/sections/MultiRowSectionDefinition.ts:20](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/MultiRowSectionDefinition.ts#L20)

Maps row IDs to 'key' entries.

***

### mandatory

> **mandatory**: `boolean` = `false`

Defined in: [src/sections/BaseSectionDefinition.ts:45](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L45)

Indicates whether the section is mandatory (i.e., must have at least one value).

#### Inherited from

`BaseSectionDefinition.mandatory`

***

### multiInstancesAllowed

> **multiInstancesAllowed**: `boolean` = `true`

Defined in: [src/sections/BaseSectionDefinition.ts:66](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L66)

If set to false, only one instance of this section type is allowed per model.

#### Inherited from

`BaseSectionDefinition.multiInstancesAllowed`

***

### multiple

> **multiple**: `boolean` = `true`

Defined in: [src/sections/BaseSectionDefinition.ts:50](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L50)

Indicates whether the section supports multiple data rows.

#### Inherited from

`BaseSectionDefinition.multiple`

***

### name?

> `optional` **name**: `string`

Defined in: [src/sections/BaseSectionDefinition.ts:40](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L40)

The name of this section.

#### Inherited from

`BaseSectionDefinition.name`

***

### others

> **others**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/sections/MultiRowSectionDefinition.ts:30](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/MultiRowSectionDefinition.ts#L30)

Maps row IDs to 'other' entries.

***

### sectionType

> **sectionType**: [`SectionType`](../enumerations/SectionType.md) = `SectionType.MULTI_ROW_SECTION`

Defined in: [src/sections/MultiRowSectionDefinition.ts:15](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/MultiRowSectionDefinition.ts#L15)

The section type is set to MULTI_ROW_SECTION.

#### Overrides

`BaseSectionDefinition.sectionType`

## Accessors

### dataRows

#### Get Signature

> **get** **dataRows**(): `string`[]

Defined in: [src/sections/MultiRowSectionDefinition.ts:36](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/MultiRowSectionDefinition.ts#L36)

Getter for the data row IDs of this section.

##### Returns

`string`[]

An array of row IDs stored in the section.

#### Set Signature

> **set** **dataRows**(`value`): `void`

Defined in: [src/sections/MultiRowSectionDefinition.ts:44](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/MultiRowSectionDefinition.ts#L44)

Setter for the data row IDs of this section.

##### Parameters

###### value

`string`[]

An array of row IDs to set.

##### Returns

`void`

#### Overrides

`BaseSectionDefinition.dataRows`

## Methods

### createNewRow()

> **createNewRow**(): `string`

Defined in: [src/sections/BaseSectionDefinition.ts:119](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L119)

Creates a new data row for this section.

If the section supports multiple rows, a new UUID is generated, added to the
data rows array, and returned.

#### Returns

`string`

The newly created row ID.

#### Throws

Error if the section does not support multiple rows.

#### Inherited from

`BaseSectionDefinition.createNewRow`

***

### getRowIds()

> **getRowIds**(): `string`[]

Defined in: [src/sections/BaseSectionDefinition.ts:136](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L136)

Retrieves all row IDs associated with this section.

If the section supports multiple rows, returns an array containing the header row and all data rows.
Otherwise, returns an array containing only the header row.

#### Returns

`string`[]

An array of row IDs.

#### Inherited from

`BaseSectionDefinition.getRowIds`

***

### isHeader()

> **isHeader**(`rowid`): `boolean`

Defined in: [src/sections/BaseSectionDefinition.ts:106](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L106)

Determines if a given row ID corresponds to the header row.

#### Parameters

##### rowid

`string`

The row ID to check.

#### Returns

`boolean`

True if the provided row ID is the header row; otherwise, false.

#### Inherited from

`BaseSectionDefinition.isHeader`

***

### validate()

> **validate**(): [`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

Defined in: [src/sections/MultiRowSectionDefinition.ts:57](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/MultiRowSectionDefinition.ts#L57)

Validates the multi-row section definition.

The validation checks that:
- Each row has an associated 'key' value.
- The 'key' values are unique within the section.

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of validation issues found, each conforming to SectionErrorInterface.

#### Overrides

`BaseSectionDefinition.validate`
