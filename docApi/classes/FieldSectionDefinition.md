[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / FieldSectionDefinition

# Class: FieldSectionDefinition

Defined in: [src/sections/FieldSectionDefinition.ts:34](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L34)

Represents the main data section of a decision table.

A FieldSectionDefinition is the most important section in a decision table,
as it contains the relevant data divided into one or more sub-sections.
Each sub-section is represented by a FieldSubSectionDefinition and is stored
in the 'subSections' mapping using its header row as the key.

## Extends

- `BaseSectionDefinition`

## Constructors

### new FieldSectionDefinition()

> **new FieldSectionDefinition**(`opts`): [`FieldSectionDefinition`](FieldSectionDefinition.md)

Defined in: [src/sections/FieldSectionDefinition.ts:81](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L81)

Constructs a new FieldSectionDefinition.

Initializes the field section with options provided, including whether the section is mandatory
and whether the data generator column is mandatory.

#### Parameters

##### opts

[`FieldSectionDefinitionOptions`](../interfaces/FieldSectionDefinitionOptions.md)

Options for initializing the field section.

#### Returns

[`FieldSectionDefinition`](FieldSectionDefinition.md)

#### Overrides

`BaseSectionDefinition.constructor`

## Properties

### \_dataRows

> `protected` **\_dataRows**: `string`[] = `[]`

Defined in: [src/sections/BaseSectionDefinition.ts:61](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L61)

Stores the IDs of the data rows for this section.

#### Inherited from

`BaseSectionDefinition._dataRows`

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

> **mandatory**: `boolean` = `true`

Defined in: [src/sections/FieldSectionDefinition.ts:55](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L55)

Indicates whether the section must have at least one value.
Default is true.

#### Overrides

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

### sectionType

> **sectionType**: [`SectionType`](../enumerations/SectionType.md) = `SectionType.FIELD_SECTION`

Defined in: [src/sections/FieldSectionDefinition.ts:38](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L38)

The section type is set to FIELD_SECTION.

#### Overrides

`BaseSectionDefinition.sectionType`

***

### subSections

> **subSections**: `Record`\<`string`, [`FieldSubSectionDefinition`](FieldSubSectionDefinition.md)\> = `{}`

Defined in: [src/sections/FieldSectionDefinition.ts:43](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L43)

A mapping of sub-section IDs to their corresponding FieldSubSectionDefinition.

***

### tdgMandatory

> **tdgMandatory**: `boolean` = `false`

Defined in: [src/sections/FieldSectionDefinition.ts:49](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L49)

Indicates whether the data generator (tdg) column is mandatory.
Default is false.

## Accessors

### dataRows

#### Get Signature

> **get** **dataRows**(): `string`[]

Defined in: [src/sections/FieldSectionDefinition.ts:61](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L61)

Getter for the data row IDs of this section.
Returns the underlying _dataRows array.

##### Returns

`string`[]

#### Set Signature

> **set** **dataRows**(`value`): `void`

Defined in: [src/sections/FieldSectionDefinition.ts:69](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L69)

Setter for the data row IDs of this section.
Updates the underlying _dataRows array.

##### Parameters

###### value

`string`[]

##### Returns

`void`

#### Overrides

`BaseSectionDefinition.dataRows`

## Methods

### createNewField()

> **createNewField**(`fieldName`?): [`FieldSubSectionDefinition`](FieldSubSectionDefinition.md)

Defined in: [src/sections/FieldSectionDefinition.ts:144](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L144)

Adds a new empty field to the section.

This method creates a new FieldSubSectionDefinition with an optional field name,
assigns the header row of the new field as its identifier, adds it to the subSections mapping,
and appends its header row to the dataRows array. It also sets the parent of the sub-section to the
header row of the field section.

#### Parameters

##### fieldName?

`string`

(Optional) The name for the new field.

#### Returns

[`FieldSubSectionDefinition`](FieldSubSectionDefinition.md)

The newly created FieldSubSectionDefinition.

***

### createNewRow()

> **createNewRow**(): `string`

Defined in: [src/sections/FieldSectionDefinition.ts:129](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L129)

Creates a new data row for this field section.

Since a field section contains sub-sections, this method creates a new field by calling createNewField
and returns the header row ID of the newly created sub-section.

#### Returns

`string`

The header row ID of the newly created field.

#### Overrides

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

Defined in: [src/sections/FieldSectionDefinition.ts:101](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSectionDefinition.ts#L101)

Validates the field section definition.

This method checks that the section has at least one sub-section.
If no sub-sections exist, an error issue is added to the returned array.
Otherwise, it iterates over each sub-section and invokes its validate method.

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of validation issues found.

#### Overrides

`BaseSectionDefinition.validate`
