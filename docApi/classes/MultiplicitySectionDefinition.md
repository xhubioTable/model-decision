[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / MultiplicitySectionDefinition

# Class: MultiplicitySectionDefinition

Defined in: src/sections/MultiplicitySectionDefinition.ts:16

Defines the multiplicity of test cases in the decision table.

This section specifies how many instances of a test case should be created from a single
test case definition in the table. For example:
- A value of '1' (default) indicates that the test case is created once.
- A value of '0' indicates that no test case will be created.
- A value of '5' indicates that five instances of the test case definition should be generated.

This class extends BaseSingleRowSectionDefinition, meaning that it utilizes a single row (the header row)
as its data row, and its section type is set to MULTIPLICITY_SECTION.

## Extends

- `BaseSingleRowSectionDefinition`

## Constructors

### new MultiplicitySectionDefinition()

> **new MultiplicitySectionDefinition**(`opts`): [`MultiplicitySectionDefinition`](MultiplicitySectionDefinition.md)

Defined in: src/sections/BaseSectionDefinition.ts:73

Constructs a new BaseSectionDefinition.

#### Parameters

##### opts

[`BaseSectionDefinitionOptions`](../interfaces/BaseSectionDefinitionOptions.md)

Options for initializing the section, including an optional name and header row identifier.

#### Returns

[`MultiplicitySectionDefinition`](MultiplicitySectionDefinition.md)

#### Inherited from

`BaseSingleRowSectionDefinition.constructor`

## Properties

### \_dataRows

> `protected` **\_dataRows**: `string`[] = `[]`

Defined in: src/sections/BaseSectionDefinition.ts:61

Stores the IDs of the data rows for this section.

#### Inherited from

`BaseSingleRowSectionDefinition._dataRows`

***

### headerRow

> **headerRow**: `string`

Defined in: src/sections/BaseSectionDefinition.ts:56

The identifier for the header row of the section.
(FIXME: Consider renaming to headerRowId)

#### Inherited from

`BaseSingleRowSectionDefinition.headerRow`

***

### mandatory

> **mandatory**: `boolean` = `false`

Defined in: src/sections/BaseSingleRowSectionDefinition.ts:14

Indicates whether the section is mandatory.
For single row sections, this is set to false, meaning that a value is not required.

#### Inherited from

`BaseSingleRowSectionDefinition.mandatory`

***

### multiInstancesAllowed

> **multiInstancesAllowed**: `boolean` = `false`

Defined in: src/sections/BaseSingleRowSectionDefinition.ts:26

Determines if multiple instances of this section type are allowed in the model.
For single row sections, this is set to false, enforcing that only one instance exists.

#### Inherited from

`BaseSingleRowSectionDefinition.multiInstancesAllowed`

***

### multiple

> **multiple**: `boolean` = `false`

Defined in: src/sections/BaseSingleRowSectionDefinition.ts:20

Specifies whether the section can have multiple rows.
For single row sections, this is set to false, indicating that only one row (the header row) is allowed.

#### Inherited from

`BaseSingleRowSectionDefinition.multiple`

***

### name?

> `optional` **name**: `string`

Defined in: src/sections/BaseSectionDefinition.ts:40

The name of this section.

#### Inherited from

`BaseSingleRowSectionDefinition.name`

***

### sectionType

> **sectionType**: [`SectionType`](../enumerations/SectionType.md) = `SectionType.MULTIPLICITY_SECTION`

Defined in: src/sections/MultiplicitySectionDefinition.ts:17

The type of the section.
Subclasses should override this property.

#### Overrides

`BaseSingleRowSectionDefinition.sectionType`

## Accessors

### dataRows

#### Get Signature

> **get** **dataRows**(): `string`[]

Defined in: src/sections/BaseSingleRowSectionDefinition.ts:36

Gets the data rows of this section.

Since a single row section always uses its header row as its sole data row,
this getter returns an array containing only the header row ID.

##### Returns

`string`[]

An array with the header row ID.

#### Set Signature

> **set** **dataRows**(`rowId`): `void`

Defined in: src/sections/BaseSingleRowSectionDefinition.ts:48

Sets the data rows for this section.

For a single row section, data rows cannot be modified,
so this setter does nothing.

##### Parameters

###### rowId

`string`[]

The new value for data rows (ignored).

##### Returns

`void`

#### Inherited from

`BaseSingleRowSectionDefinition.dataRows`

## Methods

### createNewRow()

> **createNewRow**(): `string`

Defined in: src/sections/BaseSectionDefinition.ts:119

Creates a new data row for this section.

If the section supports multiple rows, a new UUID is generated, added to the
data rows array, and returned.

#### Returns

`string`

The newly created row ID.

#### Throws

Error if the section does not support multiple rows.

#### Inherited from

`BaseSingleRowSectionDefinition.createNewRow`

***

### getRowIds()

> **getRowIds**(): `string`[]

Defined in: src/sections/BaseSectionDefinition.ts:136

Retrieves all row IDs associated with this section.

If the section supports multiple rows, returns an array containing the header row and all data rows.
Otherwise, returns an array containing only the header row.

#### Returns

`string`[]

An array of row IDs.

#### Inherited from

`BaseSingleRowSectionDefinition.getRowIds`

***

### isHeader()

> **isHeader**(`rowid`): `boolean`

Defined in: src/sections/BaseSectionDefinition.ts:106

Determines if a given row ID corresponds to the header row.

#### Parameters

##### rowid

`string`

The row ID to check.

#### Returns

`boolean`

True if the provided row ID is the header row; otherwise, false.

#### Inherited from

`BaseSingleRowSectionDefinition.isHeader`

***

### validate()

> **validate**(): [`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

Defined in: src/sections/BaseSectionDefinition.ts:150

Validates the section definition.

Currently, validation checks that the section has a defined name.

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of validation issues, each conforming to SectionErrorInterface.

#### Inherited from

`BaseSingleRowSectionDefinition.validate`
