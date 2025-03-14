[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / FieldSubSectionDefinition

# Class: FieldSubSectionDefinition

Defined in: [src/sections/FieldSubSectionDefinition.ts:36](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L36)

Represents a sub-section within a FieldSectionDefinition.

A FieldSubSectionDefinition defines the details for a specific field,
including its equivalence class entries, comments, and data generator (tdg) values.

## Extends

- `BaseSectionDefinition`

## Constructors

### new FieldSubSectionDefinition()

> **new FieldSubSectionDefinition**(`opts`): [`FieldSubSectionDefinition`](FieldSubSectionDefinition.md)

Defined in: [src/sections/FieldSubSectionDefinition.ts:92](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L92)

Constructs a new FieldSubSectionDefinition.

Initializes the sub-section with the specified parent section ID, and configures
whether the sub-section is mandatory and if the tdg field is mandatory.

#### Parameters

##### opts

[`FieldSubSectionDefinitionOptions`](../interfaces/FieldSubSectionDefinitionOptions.md)

Options for initializing the FieldSubSectionDefinition.

#### Returns

[`FieldSubSectionDefinition`](FieldSubSectionDefinition.md)

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

### comments

> **comments**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/sections/FieldSubSectionDefinition.ts:50](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L50)

Stores the comments indexed by their row ID.

***

### equivalenceClasses

> **equivalenceClasses**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/sections/FieldSubSectionDefinition.ts:45](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L45)

Stores the equivalence class entries indexed by their row ID.

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

### parent

> **parent**: `string`

Defined in: [src/sections/FieldSubSectionDefinition.ts:66](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L66)

The ID of the parent section.

***

### sectionType

> **sectionType**: [`SectionType`](../enumerations/SectionType.md) = `SectionType.FIELD_SUB_SECTION`

Defined in: [src/sections/FieldSubSectionDefinition.ts:40](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L40)

The section type is set to FIELD_SUB_SECTION.

#### Overrides

`BaseSectionDefinition.sectionType`

***

### tdgMandatory

> **tdgMandatory**: `boolean` = `false`

Defined in: [src/sections/FieldSubSectionDefinition.ts:61](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L61)

Indicates if the data generator column is mandatory.
Default is false.

***

### tdgs

> **tdgs**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/sections/FieldSubSectionDefinition.ts:55](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L55)

Stores the data generator (tdg) entries indexed by their row ID.

## Accessors

### dataRows

#### Get Signature

> **get** **dataRows**(): `string`[]

Defined in: [src/sections/FieldSubSectionDefinition.ts:72](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L72)

Getter for the data row IDs of this sub-section.

##### Returns

`string`[]

An array of row IDs.

#### Set Signature

> **set** **dataRows**(`value`): `void`

Defined in: [src/sections/FieldSubSectionDefinition.ts:80](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L80)

Setter for the data row IDs of this sub-section.

##### Parameters

###### value

`string`[]

The new array of row IDs.

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

Defined in: [src/sections/FieldSubSectionDefinition.ts:117](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L117)

Validates this sub-section definition.

Validation rules:
- If tdgMandatory is true, each row must have a defined tdg value.
- Each row must have a defined equivalence class value.
- Equivalence class values must be unique within the sub-section.

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of validation issues found.

#### Overrides

`BaseSectionDefinition.validate`
