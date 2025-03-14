[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / findDouble

# Function: findDouble()

> **findDouble**(`table`): `object`[]

Defined in: [src/validate/validateDouble.ts:19](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/validate/validateDouble.ts#L19)

Finds duplicate (double) test case definitions in the given decision table.

This function first constructs a row model and a test case model from the table,
and then identifies duplicates by comparing the binary field values of each test case.

## Parameters

### table

[`TableDecision`](../classes/TableDecision.md)

The decision table model.

## Returns

`object`[]

An array of duplicate test case entries, where each entry contains the IDs
         of the two duplicate test cases and the comparison result.
