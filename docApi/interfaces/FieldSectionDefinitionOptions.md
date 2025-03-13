[**@tlink/model-decision**](../README.md)

***

[@tlink/model-decision](../globals.md) / FieldSectionDefinitionOptions

# Interface: FieldSectionDefinitionOptions

Defined in: src/sections/FieldSectionDefinition.ts:11

Options for initializing a FieldSectionDefinition.

## Extends

- [`BaseSectionDefinitionOptions`](BaseSectionDefinitionOptions.md)

## Properties

### headerRow?

> `optional` **headerRow**: `string`

Defined in: src/sections/BaseSectionDefinition.ts:21

An identifier used to identify the header row of the section.
(FIXME: Consider renaming to headerRowId)

#### Inherited from

[`BaseSectionDefinitionOptions`](BaseSectionDefinitionOptions.md).[`headerRow`](BaseSectionDefinitionOptions.md#headerrow)

***

### mandatory?

> `optional` **mandatory**: `boolean`

Defined in: src/sections/FieldSectionDefinition.ts:23

Indicates if the section must have at least one value.
Default is true.

***

### name?

> `optional` **name**: `string`

Defined in: src/sections/BaseSectionDefinition.ts:15

The name of this section.

#### Inherited from

[`BaseSectionDefinitionOptions`](BaseSectionDefinitionOptions.md).[`name`](BaseSectionDefinitionOptions.md#name)

***

### tdgMandatory?

> `optional` **tdgMandatory**: `boolean`

Defined in: src/sections/FieldSectionDefinition.ts:17

Indicates if the data generator (tdg) column is mandatory.
Default is false.
