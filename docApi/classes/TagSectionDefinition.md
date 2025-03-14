[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / TagSectionDefinition

# Class: TagSectionDefinition

Defined in: [src/sections/TagSectionDefinition.ts:10](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/TagSectionDefinition.ts#L10)

Represents a tag section in a decision table.

This section allows users to assign labels (tags) to test cases. These tags can later be used
to filter test cases in conjunction with a FilterSection.

## Extends

- `BaseSectionDefinition`

## Constructors

### new TagSectionDefinition()

> **new TagSectionDefinition**(`opts`): [`TagSectionDefinition`](TagSectionDefinition.md)

Defined in: [src/sections/BaseSectionDefinition.ts:73](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L73)

Constructs a new BaseSectionDefinition.

#### Parameters

##### opts

[`BaseSectionDefinitionOptions`](../interfaces/BaseSectionDefinitionOptions.md)

Options for initializing the section, including an optional name and header row identifier.

#### Returns

[`TagSectionDefinition`](TagSectionDefinition.md)

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

Defined in: [src/sections/TagSectionDefinition.ts:24](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/TagSectionDefinition.ts#L24)

Maps row IDs to comment entries associated with the tags.

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

### others

> **others**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/sections/TagSectionDefinition.ts:29](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/TagSectionDefinition.ts#L29)

Maps row IDs to additional information entries.

***

### sectionType

> **sectionType**: [`SectionType`](../enumerations/SectionType.md) = `SectionType.TAG_SECTION`

Defined in: [src/sections/TagSectionDefinition.ts:14](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/TagSectionDefinition.ts#L14)

The section type is set to TAG_SECTION.

#### Overrides

`BaseSectionDefinition.sectionType`

***

### tags

> **tags**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/sections/TagSectionDefinition.ts:19](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/TagSectionDefinition.ts#L19)

Maps row IDs to their corresponding tag entries.

## Accessors

### dataRows

#### Get Signature

> **get** **dataRows**(): `string`[]

Defined in: [src/sections/TagSectionDefinition.ts:35](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/TagSectionDefinition.ts#L35)

Getter for the data row IDs for this section.

##### Returns

`string`[]

An array of row IDs.

#### Set Signature

> **set** **dataRows**(`value`): `void`

Defined in: [src/sections/TagSectionDefinition.ts:43](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/TagSectionDefinition.ts#L43)

Setter for the data row IDs for this section.

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

Defined in: [src/sections/TagSectionDefinition.ts:56](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/TagSectionDefinition.ts#L56)

Validates the tag section definition.

This method checks that every row in the section has an associated tag.
It also ensures that the tag values are unique. If a row is missing a tag,
an error issue is reported. Duplicate tag values are reported as warnings.

#### Returns

[`SectionErrorInterface`](../interfaces/SectionErrorInterface.md)[]

An array of validation issues found.

#### Overrides

`BaseSectionDefinition.validate`
