[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / SummarySectionDefinition

# Class: SummarySectionDefinition

Defined in: [src/sections/SummarySectionDefinition.ts:15](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L15)

Represents the summary section in a decision table.

The SummarySectionDefinition stores calculation results for the table, such as:
- The total number of test combinations.
- The number of completed test combinations.
- The percentage of test combinations that are done.

As a summary section, it must exist only once in a model and does not support adding
additional data rows (it always uses the header row as its sole row).

## Extends

- `BaseSectionDefinition`

## Constructors

### new SummarySectionDefinition()

> **new SummarySectionDefinition**(`opts`): [`SummarySectionDefinition`](SummarySectionDefinition.md)

Defined in: [src/sections/BaseSectionDefinition.ts:73](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L73)

Constructs a new BaseSectionDefinition.

#### Parameters

##### opts

[`BaseSectionDefinitionOptions`](../interfaces/BaseSectionDefinitionOptions.md)

Options for initializing the section, including an optional name and header row identifier.

#### Returns

[`SummarySectionDefinition`](SummarySectionDefinition.md)

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

### done?

> `optional` **done**: `number` = `undefined`

Defined in: [src/sections/SummarySectionDefinition.ts:29](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L29)

The number of test combinations that are completed.

***

### headerRow

> **headerRow**: `string`

Defined in: [src/sections/BaseSectionDefinition.ts:56](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L56)

The identifier for the header row of the section.
(FIXME: Consider renaming to headerRowId)

#### Inherited from

`BaseSectionDefinition.headerRow`

***

### mandatory

> **mandatory**: `boolean` = `false`

Defined in: [src/sections/SummarySectionDefinition.ts:39](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L39)

Summary sections are not mandatory.

#### Overrides

`BaseSectionDefinition.mandatory`

***

### multiInstancesAllowed

> **multiInstancesAllowed**: `boolean` = `false`

Defined in: [src/sections/SummarySectionDefinition.ts:44](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L44)

Only one instance of a summary section is allowed in a model.

#### Overrides

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

### percent?

> `optional` **percent**: `number` = `undefined`

Defined in: [src/sections/SummarySectionDefinition.ts:34](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L34)

The percentage of completed test combinations.

***

### sectionType

> **sectionType**: [`SectionType`](../enumerations/SectionType.md) = `SectionType.SUMMARY_SECTION`

Defined in: [src/sections/SummarySectionDefinition.ts:19](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L19)

The section type is set to SUMMARY_SECTION.

#### Overrides

`BaseSectionDefinition.sectionType`

***

### total?

> `optional` **total**: `number` = `undefined`

Defined in: [src/sections/SummarySectionDefinition.ts:24](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L24)

The total number of test combinations.

## Accessors

### dataRows

#### Get Signature

> **get** **dataRows**(): `string`[]

Defined in: [src/sections/SummarySectionDefinition.ts:52](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L52)

Getter for the data row IDs of this section.
For a summary section, this returns the underlying data rows stored in the base class.

##### Returns

`string`[]

An array of row IDs.

#### Set Signature

> **set** **dataRows**(`value`): `void`

Defined in: [src/sections/SummarySectionDefinition.ts:61](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L61)

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

### createDataRow()

> **createDataRow**(): `undefined`

Defined in: [src/sections/SummarySectionDefinition.ts:73](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L73)

Attempts to create a new data row for this section.

Since the summary section is a single row section and should not have additional rows,
this method always returns undefined.

#### Returns

`undefined`

Always returns undefined.

***

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

Defined in: [src/sections/SummarySectionDefinition.ts:84](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SummarySectionDefinition.ts#L84)

Retrieves all row IDs associated with this section.

For a summary section, only the header row ID is used.

#### Returns

`string`[]

An array containing just the header row ID.

#### Overrides

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

Defined in: [src/sections/BaseSectionDefinition.ts:150](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L150)

Validates the section definition.

Currently, validation checks that the section has a defined name.

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of validation issues, each conforming to SectionErrorInterface.

#### Inherited from

`BaseSectionDefinition.validate`
