import fs from 'node:fs/promises'
import path from 'node:path'
import { LoggerMemory } from '@tlink/logger'

import { TableDecision } from '../src/index'
import {
  findDouble,
  findDoubleCompareTestcase
} from '../src/validate/validateDouble'
import { ValidateTestcaseModel } from '../src/validate/validateModelInterface'

const FIXTURES = path.join(__dirname, 'fixtures', 'validateDouble')

const FILE_TC1 = path.join(FIXTURES, 'compareTestcase_1.json')
const FILE_TC2 = path.join(FIXTURES, 'compareTestcase_2.json')
const FILE_TABLE_MORE_THAN_30 = path.join(FIXTURES, 'tableMoreThan30.json')

it('find double testcases', async () => {
  const tc1: ValidateTestcaseModel = JSON.parse(
    await fs.readFile(FILE_TC1, 'utf8')
  )
  const tc2: ValidateTestcaseModel = JSON.parse(
    await fs.readFile(FILE_TC2, 'utf8')
  )

  const res = findDoubleCompareTestcase(tc1.data, tc2.data)
  const expected = {
    person: 3,
    'first-name': 1,
    'last-name': [0, 0, 2],
    email: 15
  }

  expect(res).toEqual(expected)
})

it('find double testcases complete', async () => {
  const tcTableDataMoreThan30 = JSON.parse(
    await fs.readFile(FILE_TABLE_MORE_THAN_30, 'utf8')
  )

  const table = new TableDecision({
    logger: new LoggerMemory(),
    fileName: 'myFile',
    tableName: 'dummy'
  })
  Object.assign(table, tcTableDataMoreThan30)
  const res = findDouble(table)

  const expected = [
    {
      tcId1: 'cce3df61-e3d3-47b9-b120-f2995a3c8c50',
      tcId2: '86ac748c-adc2-4aea-9c4d-6eeac1c0061a',
      result: {
        '33386baf-7b13-4a24-b7c9-9da9c04b1b01': 3,
        'f30f00e2-a7a6-4fa0-8548-4498fb50aabe': 1,
        'e742a4a8-fb89-48e0-92e1-2c69f02df02d': [0, 0, 2],
        '55a47962-b4af-4899-a1ee-246f4ef11c7a': 15,
        '205666cb-7de4-4fc3-960a-fe48289147f3': 7,
        '47a1017a-159d-497d-ab04-c746ddce79c3': 31,
        'a2922586-8cb7-4038-ac8d-e79050430bb2': 31,
        '1d600b58-0eb7-4006-9cba-d00d1f29040a': 31,
        '08167b41-e15e-43a2-bfbd-527eb23ec47b': 3
      }
    }
  ]

  expect(res).toEqual(expected)
})
