'use strict'

import assert from 'assert'

import { buildRowModel, buildTestcaseModel } from './ValidateHelper'

/**
 * Combines the existing testcases. So it could be easier to find the open ones
 * Compares each field of a testcase, if all the feields are the same except one,
 * then this field could be combined in one if the values of one field do not exists
 * in the other one. XOR logic.
 * The testcases could be combiened as long as in one loop no new combination was
 * possible
 * @param table {object} The table model
 * @return testCaseModel {object} The combined testcase model
 */
export function combineTestcases(table) {
  assert(table)
  const rowModel = buildRowModel(table)
  const testCaseModel = buildTestcaseModel(table, rowModel)

  // let round = 0;

  let shouldContinue = true
  while (shouldContinue && testCaseModel.length > 1) {
    shouldContinue = false

    // round++;

    for (let i = 0; i < testCaseModel.length - 1; i++) {
      const testcaseMaster = testCaseModel[i]
      testcaseMaster.name = i + 1
      if (testcaseMaster.skip === true) {
        // this testcase was already combined
        continue
      }
      for (let j = i + 1; j < testCaseModel.length; j++) {
        const testcaseCompare = testCaseModel[j]
        testcaseCompare.name = j + 1
        if (testcaseCompare.skip === true) {
          // this testcase was already combined
          continue
        }

        if (combineTestcasesSub(testcaseMaster, testcaseCompare)) {
          // console.log(`\n---- combine in round ${round} -----`);
          // this._printHelper(testcaseMaster);
          // this._printHelper(testcaseCompare);
          // this._printHelper(testcaseMaster);
          shouldContinue = true
        }
      }
    }
  }

  return testCaseModel
}

/**
 * Checks if the both given values are bitwise disjunct.
 * The parameters are integers. But it could also be an Array
 * of integers.
 * @param val1 {integer} The first value.
 * @param val2 {integer} The second value
 */
export function combineTestcasesIsDisjunct(val1, val2) {
  if (Array.isArray(val1)) {
    let sum = 0
    for (let i = 0; i < val1.length; i++) {
      sum += val1[i] & val2[i]
    }
    return sum === 0
  }
  return (val1 & val2) === 0
}

/**
 * Combines two testcases into one. This could be done if only one field is different between two testcases.
 * This one field must also be disjunct. Then it will be combined. The tescase2 will
 * be combined with testcase1 into testcase1. Testcase1.skip will be set to true;
 *
 * Format:
 * const testcase = {
 *   id: testcaseId
 *   data : {
 *     sectionId : {
 *       parentSectionId: parentSecId
 *       rows: [rowIds]
 *       val: 2324323
 *       if section has more than 31 rows the values are splitted
 *       val = [2323213,2323232]
 *     }
 *   }
 * }
 * @param tc1 {object} The first testcase
 * @param tc2 {object} The second testcase
 * @returns isCombined {boolean} True if the testcases where combined
 */
export function combineTestcasesSub(tc1, tc2) {
  const diffSections = []

  // if set to true, combination is not possible
  let isFalse = false

  // iterate all the fields of both testcases
  Object.keys(tc1.data).forEach(sectionRowId => {
    const val1 = tc1.data[sectionRowId].val
    const val2 = tc2.data[sectionRowId].val
    if (Array.isArray(val1)) {
      // this is a big section
      let isEqual = true
      for (let j = 0; j < val1.length; j++) {
        if (val1[j] !== val2[j]) {
          isEqual = false
        }
      }
      if (!isEqual) {
        if (
          combineTestcasesIsDisjunct(
            tc1.data[sectionRowId].val,
            tc2.data[sectionRowId].val
          )
        ) {
          diffSections.push(sectionRowId)
        } else {
          // if it is NOT disjunct we can not combine
          isFalse = true
          return
        }
      }
    } else if (val1 !== val2) {
      // console.log(`section '${sectionRowId}' -> val1 ${val1} != val2 ${val2}`);
      if (
        combineTestcasesIsDisjunct(
          tc1.data[sectionRowId].val,
          tc2.data[sectionRowId].val
        )
      ) {
        diffSections.push(sectionRowId)
      } else {
        // if it is NOT disjunct we can not combine
        isFalse = true
        return
      }
    }
  })

  if (!isFalse && diffSections.length === 1) {
    // we have exactly one difference. We can now combine the testcases;
    const indexKey = diffSections[0]
    const val1 = tc1.data[indexKey].val
    const val2 = tc2.data[indexKey].val

    if (Array.isArray(val1)) {
      for (let j = 0; j < val1.length; j++) {
        val1[j] |= val2[j]
      }
    } else {
      tc1.data[indexKey].val = val1 | val2
    }

    // remember which testcase was merged into this one.
    if (tc1.merge === undefined) {
      tc1.merge = []
    }
    tc1.merge.push(tc2.id)

    // this testcase is not needed any more
    tc2.skip = true

    return true
  }

  return false
}
