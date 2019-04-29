import { buildRowModel, buildTestcaseModel } from './ValidateHelper'

/**
 * Find double testcase definitions.
 * @param table {object} The table model
 * @returns errors {object} The found double testcases
 */
export function findDouble(table) {
  const rowModel = buildRowModel(table)
  const testCaseModel = buildTestcaseModel(table, rowModel)
  return findDoubleSub(testCaseModel)
}

/**
 * Compares each testcase against each other. The double ones are reported.
 * The values for the fields are converted to binary values. For each field the values
 * will be combined with binary AND. If there is an integer > 0 for each field, then the testcase
 * is a double
 * @param testCaseModel {object} The testcaseModel
 * @returns errors {object} The found double testcases
 */
function findDoubleSub(testCaseModel) {
  const doubles = []
  for (let i = 0; i < testCaseModel.length - 1; i++) {
    const testcaseMaster = testCaseModel[i]
    for (let j = i + 1; j < testCaseModel.length; j++) {
      const testcaseCompare = testCaseModel[j]

      const result = findDoubleCompareTestcase(
        testcaseMaster.data,
        testcaseCompare.data
      )
      if (result !== undefined) {
        // this is double
        const entry = {
          tcId1: testcaseMaster.id,
          tcId2: testcaseCompare.id,
          result,
        }
        doubles.push(entry)
      }
    }
  }
  return doubles
}

/**
 * Compares one testcase with an other and checks if it is a double one.
 * @param tc1 {object} The first testcase
 * @param tc2 {object} The second testcase
 * @returns results {object} Object returned only if there are double
 */
export function findDoubleCompareTestcase(tc1, tc2) {
  const results = {}
  let isDouble = true
  Object.keys(tc1).forEach(sectionRowId => {
    // get the integer vlues for one field
    const tc1Val = tc1[sectionRowId].val
    const tc2Val = tc2[sectionRowId].val

    // The values could be stored in an array if the field has more than 30 rows
    // Then each entry of the array must be compared
    if (Array.isArray(tc1Val)) {
      const subRes = []
      let isDoubleSubentry = false
      for (let i = 0; i < tc1Val.length; i++) {
        const res = tc1Val[i] & tc2Val[i]
        if (res !== 0) {
          // as the array elements are part of one field, it is enaught to have a
          // value greater one in one of the parts to know that this field is not disjunct
          isDoubleSubentry = true
        }
        subRes.push(res)
      }
      if (!isDoubleSubentry) {
        // all are 0
        isDouble = false
        return // go out of the forEach loop
      }
      results[sectionRowId] = subRes
    } else {
      // not an array, just compare the values
      const res = tc1Val & tc2Val
      if (res === 0) {
        isDouble = false
        return undefined
      }
      results[sectionRowId] = res
    }
  })

  if (isDouble) {
    return results
  }

  return
}
