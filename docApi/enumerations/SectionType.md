[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / SectionType

# Enumeration: SectionType

Defined in: [src/sections/SectionTypeEnum.ts:7](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L7)

Enum representing the different section types used in decision tables.

Each value corresponds to a specific role or functionality in a decision table,
such as defining fields, filtering data, summarizing results, or controlling test case creation.

## Enumeration Members

### BASE\_SECTION

> **BASE\_SECTION**: `"BaseSection"`

Defined in: [src/sections/SectionTypeEnum.ts:11](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L11)

Base section type.

***

### DATA\_ROW

> **DATA\_ROW**: `"DataRow"`

Defined in: [src/sections/SectionTypeEnum.ts:66](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L66)

Data row: Represents an individual row of data.

***

### EXECUTE\_SECTION

> **EXECUTE\_SECTION**: `"ExecuteSection"`

Defined in: [src/sections/SectionTypeEnum.ts:56](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L56)

Execute section: Indicates that a test case should be created for execution.

***

### FIELD\_SECTION

> **FIELD\_SECTION**: `"FieldSection"`

Defined in: [src/sections/SectionTypeEnum.ts:16](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L16)

Field section: Contains the main data fields of the test cases.

***

### FIELD\_SUB\_SECTION

> **FIELD\_SUB\_SECTION**: `"FieldSubSection"`

Defined in: [src/sections/SectionTypeEnum.ts:21](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L21)

Field sub-section: A subdivision of a field section.

***

### FILTER\_SECTION

> **FILTER\_SECTION**: `"FilterSection"`

Defined in: [src/sections/SectionTypeEnum.ts:36](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L36)

Filter section: Contains filter criteria for selecting test cases.

***

### GENERATOR\_SWITCH\_SECTION

> **GENERATOR\_SWITCH\_SECTION**: `"GeneratorSwitchSection"`

Defined in: [src/sections/SectionTypeEnum.ts:41](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L41)

Generator switch section: Controls the execution of generators via switches.

***

### MULTI\_ROW\_SECTION

> **MULTI\_ROW\_SECTION**: `"MultiRowSection"`

Defined in: [src/sections/SectionTypeEnum.ts:26](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L26)

Multi-row section: Used for sections that contain multiple rows of additional attributes or metadata.

***

### MULTIPLICITY\_SECTION

> **MULTIPLICITY\_SECTION**: `"MultiplicitySection"`

Defined in: [src/sections/SectionTypeEnum.ts:51](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L51)

Multiplicity section: Determines the number of test case instances to create.

***

### NEVER\_EXECUTE\_SECTION

> **NEVER\_EXECUTE\_SECTION**: `"NeverExecuteSection"`

Defined in: [src/sections/SectionTypeEnum.ts:61](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L61)

Never execute section: Indicates that a test case should not be executed.

***

### SUMMARY\_SECTION

> **SUMMARY\_SECTION**: `"SummarySection"`

Defined in: [src/sections/SectionTypeEnum.ts:46](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L46)

Summary section: Displays summary information about the test cases.

***

### TAG\_SECTION

> **TAG\_SECTION**: `"TagSection"`

Defined in: [src/sections/SectionTypeEnum.ts:31](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/sections/SectionTypeEnum.ts#L31)

Tag section: Used to store tag values for test cases.
