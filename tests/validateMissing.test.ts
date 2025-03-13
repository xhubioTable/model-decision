import fs from 'node:fs/promises'
import path from 'node:path'

import { TableDecision } from '../src/index'
import {
  combineTestcases,
  combineTestcasesIsDisjunct,
  combineTestcasesSub
} from '../src/validate/combineTestcases'
import { LoggerMemory } from '@tlink/logger'
import { ValidateTestcaseModel } from '../src/validate/validateModelInterface'

const FIXTURES = path.join(__dirname, 'fixtures', 'validateMissing')

const FILE_TABLE_CREATE_PERSON = path.join(FIXTURES, 'tableCreatePerson.json')

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

      it('combineTestcases real table', async () => {
        const tableCreatePerson = JSON.parse(
          await fs.readFile(FILE_TABLE_CREATE_PERSON, 'utf8')
        )

        const table = new TableDecision({
          logger: new LoggerMemory(),
          fileName: 'myFile',
          tableName: 'myTable'
        })
        Object.assign(table, tableCreatePerson)

        const combinedModel = combineTestcases(table)

        // der combiniert die Nicht!
        //   hier gehts weiter

        // Das Format der testcases war falsch. Muss noch in table UND in der tests geändert werden.

        const remmoveMe = []
        // remove the skiped ones and add the position as name
        for (let i = 0; i < combinedModel.length; i++) {
          combinedModel[i].name = `${i}`
          if (combinedModel[i].skip) {
            remmoveMe.push(i)
          }
        }

        while (remmoveMe.length > 0) {
          const index = remmoveMe.pop()
          if (index !== undefined) {
            combinedModel.splice(index, 1)
          }
        }
      })
    })
  })
})

/**
 * creates a testcase object out of the given data
 *
 * @param name - The name for this testcase
 * @param data - An array of data fields. ['0110', '01', '111']
 * @returns An testcase object in the defined format.
 */
function createTestcase(name: string, data: string[]): ValidateTestcaseModel {
  const tc: ValidateTestcaseModel = {
    id: name,
    data: {},
    name: '',
    skip: false
  }

  let i = 0
  data.forEach((field) => {
    i++
    const val = {
      rows: new Array(data.length),
      val: parseInt(field, 2),
      parentSectionId: ''
    }
    tc.data[`sec${i}`] = val
  })

  return tc
}
