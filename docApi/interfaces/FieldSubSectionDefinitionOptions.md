[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / FieldSubSectionDefinitionOptions

# Interface: FieldSubSectionDefinitionOptions

Defined in: [src/sections/FieldSubSectionDefinition.ts:10](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L10)

Options for initializing a FieldSubSectionDefinition.

## Extends

- [`BaseSectionDefinitionOptions`](BaseSectionDefinitionOptions.md)

## Properties

### headerRow?

> `optional` **headerRow**: `string`

Defined in: [src/sections/BaseSectionDefinition.ts:21](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L21)

An identifier used to identify the header row of the section.
(FIXME: Consider renaming to headerRowId)

#### Inherited from

[`BaseSectionDefinitionOptions`](BaseSectionDefinitionOptions.md).[`headerRow`](BaseSectionDefinitionOptions.md#headerrow)

***

### mandatory?

> `optional` **mandatory**: `boolean`

Defined in: [src/sections/FieldSubSectionDefinition.ts:22](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L22)

Indicates if the sub-section must have at least one value.
Default is true.

***

### name?

> `optional` **name**: `string`

Defined in: [src/sections/BaseSectionDefinition.ts:15](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/BaseSectionDefinition.ts#L15)

The name of this section.

#### Inherited from

[`BaseSectionDefinitionOptions`](BaseSectionDefinitionOptions.md).[`name`](BaseSectionDefinitionOptions.md#name)

***

### parent

> **parent**: `string`

Defined in: [src/sections/FieldSubSectionDefinition.ts:27](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L27)

The ID of the parent section.

***

### tdgMandatory?

> `optional` **tdgMandatory**: `boolean`

Defined in: [src/sections/FieldSubSectionDefinition.ts:16](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/FieldSubSectionDefinition.ts#L16)

Indicates if the data generator (tdg) column is mandatory.
Default is false.
