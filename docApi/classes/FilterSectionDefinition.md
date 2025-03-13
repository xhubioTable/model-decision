[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / FilterSectionDefinition

# Class: FilterSectionDefinition

Defined in: src/sections/FilterSectionDefinition.ts:11

Represents a filter section definition in a decision table.

This section is used to specify filtering criteria that determine which test cases
are created from the table data. It holds the names of filter processors, the corresponding
filter expressions, and optional comments for each row in the section.

## Extends

- `BaseSectionDefinition`

## Constructors

### new FilterSectionDefinition()

> **new FilterSectionDefinition**(`opts`): [`FilterSectionDefinition`](FilterSectionDefinition.md)

Defined in: src/sections/BaseSectionDefinition.ts:73

Constructs a new BaseSectionDefinition.

#### Parameters

##### opts

[`BaseSectionDefinitionOptions`](../interfaces/BaseSectionDefinitionOptions.md)

Options for initializing the section, including an optional name and header row identifier.

#### Returns

[`FilterSectionDefinition`](FilterSectionDefinition.md)

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

Defined in: src/sections/FilterSectionDefinition.ts:30

Maps row IDs to comment entries.

***

### expressions

> **expressions**: `Record`\<`string`, `string`\> = `{}`

Defined in: src/sections/FilterSectionDefinition.ts:25

Maps row IDs to the filter expressions.

***

### filterProcessorNames

> **filterProcessorNames**: `Record`\<`string`, `string`\> = `{}`

Defined in: src/sections/FilterSectionDefinition.ts:20

Maps row IDs to the names of the filter processors.

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

> **sectionType**: [`SectionType`](../enumerations/SectionType.md) = `SectionType.FILTER_SECTION`

Defined in: src/sections/FilterSectionDefinition.ts:15

The section type, set to FILTER_SECTION.

#### Overrides

`BaseSectionDefinition.sectionType`

## Accessors

### dataRows

#### Get Signature

> **get** **dataRows**(): `string`[]

Defined in: src/sections/FilterSectionDefinition.ts:36

Getter for the data row IDs of this filter section.

##### Returns

`string`[]

An array containing the row IDs.

#### Set Signature

> **set** **dataRows**(`value`): `void`

Defined in: src/sections/FilterSectionDefinition.ts:44

Setter for the data row IDs of this filter section.

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

Defined in: src/sections/FilterSectionDefinition.ts:58

Validates this filter section definition.

The validation checks that:
- Every row in the section has a defined filter processor name.
- Every row in the section has a defined filter expression.
Additionally, it tracks filter processor names to ensure uniqueness.

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of validation issues found (if any).

#### Overrides

`BaseSectionDefinition.validate`
