'use strict'

import { TableDecision } from '../lib/index'
import {
  combineTestcasesIsDisjunct,
  combineTestcasesSub,
  combineTestcases,
} from '../lib/ValidateMissing'

import tableCreatePerson from './fixtures/table_createPerson.json'

describe('Validate missing', () => {
  describe('Combine testcases', () => {
    describe('disjunct', () => {
      it('isDisjunct integer yes', () => {
        expect(
          combineTestcasesIsDisjunct(
            parseInt('01010101', 2),
            parseInt('10101010', 2)
          )
        ).toEqual(true)
      })

      it('isDisjunct integer no', () => {
        expect(
          combineTestcasesIsDisjunct(
            parseInt('01010101', 2),
            parseInt('01011010', 2)
          )
        ).toEqual(false)
      })

      it('isDisjunct array yes', () => {
        expect(
          combineTestcasesIsDisjunct(
            [parseInt('01010101', 2), parseInt('0101', 2)],
            [parseInt('10101010', 2), parseInt('1010', 2)]
          )
        ).toEqual(true)
      })

      it('isDisjunct array no', () => {
        expect(
          combineTestcasesIsDisjunct(
            [parseInt('01010101', 2), parseInt('0101', 2)],
            [parseInt('10101010', 2), parseInt('1110', 2)]
          )
        ).toEqual(false)
      })
    })

    describe('Combine it', () => {
      it('_combineTestcases yes', () => {
        const tc1 = createTestcase('tc1', ['01010101', '1010'])
        const tc2 = createTestcase('tc2', ['10101010', '1010'])

        const isCombined = combineTestcasesSub(tc1, tc2)

        expect(isCombined).toEqual(true)
        expect(tc2.skip).toEqual(true)
        expect(tc1.merge).toEqual([tc2.id])
        expect(tc1.data.sec1.val).toEqual(parseInt('11111111', 2))
      })

      it('_combineTestcases no', () => {
        const tc1 = createTestcase('tc1', ['01010101', '1010'])
        const tc2 = createTestcase('tc2', ['11101010', '1010'])

        const isCombined = combineTestcasesSub(tc1, tc2)
        expect(isCombined).toEqual(false)
        expect(tc1.data.sec1.val).toEqual(parseInt('01010101', 2))
      })

      it('_combineTestcases no 2', () => {
        // two different sections, must not be combined
        // const tc1 = createTestcase('tc1', ['11', '1111110', '1111111', '1111', '111', '11111', '11111', '11111', '11']);
        // const tc2 = createTestcase('tc1', ['11', '0000001', '0000010', '1111', '111', '11111', '11111', '11111', '11']);
        const tc1 = createTestcase('tc1', ['11', '1111110', '1111111'])
        const tc2 = createTestcase('tc1', ['11', '0000001', '0000010'])

        const isCombined = combineTestcasesSub(tc1, tc2)
        expect(isCombined).toEqual(false)
      })

      it('combineTestcases real table', () => {
        const table = new TableDecision()
        Object.assign(table, tableCreatePerson)

        const combinedModel = combineTestcases(table)

        // der combiniert die Nicht!
        //   hier gehts weiter

        // Das Format der testcases war falsch. Muss noch in table UND in der tests geändert werden.

        const remmoveMe = []
        // remove the skiped ones and add the position as name
        for (let i = 0; i < combinedModel.length; i++) {
          combinedModel[i].name = i
          if (combinedModel[i].skip) {
            remmoveMe.push(i)
          }
        }

        while (remmoveMe.length > 0) {
          const index = remmoveMe.pop()
          combinedModel.splice(index, 1)
        }
      })
    })
  })
})

/**
 * creates a testcase object out of the given data
 *
 * example:
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
 *
 * @param name {string} The name for this testcase
 * @param data {array} An array of data fields. ['0110', '01', '111']
 * @return tescase {object} An testcase object in the defined format.
 */
function createTestcase(name, data) {
  const tc = {
    id: name,
    data: {},
  }

  let i = 0
  data.forEach(field => {
    i++
    const val = {
      rows: new Array(data.length),
      val: parseInt(field, 2),
    }
    tc.data['sec' + i] = val
  })

  return tc
}
