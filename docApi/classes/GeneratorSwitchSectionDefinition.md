[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / GeneratorSwitchSectionDefinition

# Class: GeneratorSwitchSectionDefinition

Defined in: src/sections/GeneratorSwitchSectionDefinition.ts:10

Represents a generator switch section in a decision table.

This section is used to control the execution of generators via switches.
It stores the generator names, corresponding switch values, and optional comments.

## Extends

- `BaseSectionDefinition`

## Constructors

### new GeneratorSwitchSectionDefinition()

> **new GeneratorSwitchSectionDefinition**(`opts`): [`GeneratorSwitchSectionDefinition`](GeneratorSwitchSectionDefinition.md)

Defined in: src/sections/BaseSectionDefinition.ts:73

Constructs a new BaseSectionDefinition.

#### Parameters

##### opts

[`BaseSectionDefinitionOptions`](../interfaces/BaseSectionDefinitionOptions.md)

Options for initializing the section, including an optional name and header row identifier.

#### Returns

[`GeneratorSwitchSectionDefinition`](GeneratorSwitchSectionDefinition.md)

#### Inherited from

`BaseSectionDefinition.constructor`

## Properties

### \_dataRows

> `protected` **\_dataRows**: `string`[] = `[]`

Defined in: src/sections/BaseSectionDefinition.ts:61

Stores the IDs of the data rows for this section.

#### Inherited from

`BaseSectionDefinition._dataRows`

***

### comments

> **comments**: `Record`\<`string`, `string`\> = `{}`

Defined in: src/sections/GeneratorSwitchSectionDefinition.ts:29

Maps row IDs to comment entries.

***

### generatorNames

> **generatorNames**: `Record`\<`string`, `string`\> = `{}`

Defined in: src/sections/GeneratorSwitchSectionDefinition.ts:19

Maps row IDs to generator names.

***

### headerRow

> **headerRow**: `string`

Defined in: src/sections/BaseSectionDefinition.ts:56

The identifier for the header row of the section.
(FIXME: Consider renaming to headerRowId)

#### Inherited from

`BaseSectionDefinition.headerRow`

***

### mandatory

> **mandatory**: `boolean` = `false`

Defined in: src/sections/BaseSectionDefinition.ts:45

Indicates whether the section is mandatory (i.e., must have at least one value).

#### Inherited from

`BaseSectionDefinition.mandatory`

***

### multiInstancesAllowed

> **multiInstancesAllowed**: `boolean` = `true`

Defined in: src/sections/BaseSectionDefinition.ts:66

If set to false, only one instance of this section type is allowed per model.

#### Inherited from

`BaseSectionDefinition.multiInstancesAllowed`

***

### multiple

> **multiple**: `boolean` = `true`

Defined in: src/sections/BaseSectionDefinition.ts:50

Indicates whether the section supports multiple data rows.

#### Inherited from

`BaseSectionDefinition.multiple`

***

### name?

> `optional` **name**: `string`

Defined in: src/sections/BaseSectionDefinition.ts:40

The name of this section.

#### Inherited from

`BaseSectionDefinition.name`

***

### sectionType

> **sectionType**: [`SectionType`](../enumerations/SectionType.md) = `SectionType.GENERATOR_SWITCH_SECTION`

Defined in: src/sections/GeneratorSwitchSectionDefinition.ts:14

The section type, set to GENERATOR_SWITCH_SECTION.

#### Overrides

`BaseSectionDefinition.sectionType`

***

### values

> **values**: `Record`\<`string`, `string`\> = `{}`

Defined in: src/sections/GeneratorSwitchSectionDefinition.ts:24

Maps row IDs to switch values (expressions).

## Accessors

### dataRows

#### Get Signature

> **get** **dataRows**(): `string`[]

Defined in: src/sections/GeneratorSwitchSectionDefinition.ts:35

Getter for the data row IDs of this section.

##### Returns

`string`[]

An array containing the row IDs.

#### Set Signature

> **set** **dataRows**(`value`): `void`

Defined in: src/sections/GeneratorSwitchSectionDefinition.ts:43

Setter for the data row IDs of this section.

##### Parameters

###### value

`string`[]

An array of row IDs.

##### Returns

`void`

#### Overrides

`BaseSectionDefinition.dataRows`

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

`BaseSectionDefinition.createNewRow`

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

`BaseSectionDefinition.getRowIds`

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

`BaseSectionDefinition.isHeader`

***

### validate()

> **validate**(): [`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

Defined in: src/sections/GeneratorSwitchSectionDefinition.ts:55

Validates this generator switch section definition.

Checks that each row in the section has an associated generator name.
If a row lacks a generator name, an error issue is added.

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of validation issues found.

#### Overrides

`BaseSectionDefinition.validate`
