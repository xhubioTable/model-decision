import { sprintf } from 'sprintf-js'
import assert from 'assert'

import { FIELD_SECTION } from './constants/sectionTypes'

export function printHelper(tc) {
  assert(tc)

  let str = `${tc.name}\t`
  Object.keys(tc.data).forEach((sectionRowId) => {
    const val = tc.data[sectionRowId].val
    // let valStr = val.toString(2).split('').reverse().join('');
    let valStr = val.toString(2)
    const length = tc.data[sectionRowId].rows.length
    valStr = sprintf(`%0${length}s`, valStr)
    str += `${valStr}\t`
  })
  // eslint-disable-next-line no-console
  console.log(str)
}

/**
 * Create a model containing the rowIds for all the fields.
 * This is a model of the definition columns and rows.
 * @param table {object} The table model
 * @returns model {object} The Row model mode[subSectionRowId] = {rows: rowIds, parentSectionId = sectionRowId};
 */
export function buildRowModel(table) {
  assert(table)
  const model = {}

  table.sectionOrder.forEach((sectionRowId) => {
    const section = table.sections[sectionRowId]
    if (section.sectionType === FIELD_SECTION) {
      section.dataRows.forEach((subSectionRowId) => {
        const subSection = section.subSections[subSectionRowId]

        const rowIds = subSection.dataRows

        model[subSectionRowId] = { rows: rowIds, parentSectionId: sectionRowId }
      })
    }
  })
  return model
}

/**
 * Build the tescase model. This model is an array of testcase objects
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
 * @param table {object} The table model
 * @param rowModel {object} The row model
 * @return model {object} The testcase model
 */
export function buildTestcaseModel(table, rowModel) {
  assert(table)
  assert(rowModel)

  // and array of tescases
  const model = []
  table.testcaseOrder.forEach((tcId) => {
    const testcase = table.testcases[tcId]
    const testCaseObject = {
      id: tcId,
      data: {},
    }
    model.push(testCaseObject)

    // get all the subSections
    Object.entries(rowModel).forEach(([sectionKey, subSection]) => {
      const testcaseEntry = {
        rows: subSection.rows,
        parentSectionId: subSection.parentSectionId,
      }
      testCaseObject.data[sectionKey] = testcaseEntry

      let values = []

      // iterate the rows of a sectionKey
      subSection.rows.forEach((rowId) => {
        if (testcase.data[rowId] === undefined) {
          values.push(0)
        } else {
          values.push(1)
        }
      })

      // if there are more than 32 fields we need to split into many numbers
      if (values.length < 32) {
        const binValue = values.reverse().join('')
        testcaseEntry.val = parseInt(binValue, 2)
        testcaseEntry.val_ = binValue
      } else {
        testcaseEntry.val = []
        testcaseEntry.val_ = []
        while (values.length > 0) {
          const count = 30
          let binValue
          if (count > values.length) {
            binValue = values.join('')
            values = []
          } else {
            binValue = values.slice(0, count).join('')
            values.splice(0, count)
          }
          testcaseEntry.val.push(parseInt(binValue, 2))
          testcaseEntry.val_.push(binValue)
        }
      }
    })
  })
  return model
}
