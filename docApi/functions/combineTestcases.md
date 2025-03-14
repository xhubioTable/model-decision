[**@xhubiotable/model-decision**](../README.md)

***

[@xhubiotable/model-decision](../globals.md) / combineTestcases

# Function: combineTestcases()

> **combineTestcases**(`table`): [`ValidateTestcaseModel`](../interfaces/ValidateTestcaseModel.md)[]

Defined in: [src/validate/combineTestcases.ts:19](https://github.com/xhubioTable/model-decision/blob/bb86cb17a9e3e1e8be81aea7d412ff6f096a060e/src/validate/combineTestcases.ts#L19)

Combines the existing test cases to simplify identifying unresolved ones.

This function compares each field of every pair of test cases in the table.
If two test cases differ in exactly one field and the differing field's values
are bitwise disjunct (i.e. they share no common bits), they can be merged.
Merging is performed by applying a bitwise OR to the differing field in the master test case,
and marking the other test case as skipped. The process repeats in rounds until no further
combinations are possible.

## Parameters

### table

[`TableDecision`](../classes/TableDecision.md)

The decision table model containing the test cases.

## Returns

[`ValidateTestcaseModel`](../interfaces/ValidateTestcaseModel.md)[]

The combined test case model as an array of ValidateTestcaseModel objects.
