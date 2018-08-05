'use strict'

import { TableDecision } from '../lib/index'
import { findDouble, findDoubleCompareTestcase } from '../lib/ValidateDouble'

import fileTableMoreThan30 from './fixtures/tableMoreThan30.json'
import compareTc1 from './fixtures/compareTestcase_1.json'
import compareTc2 from './fixtures/compareTestcase_2.json'

describe('VerifyDouble', () => {
  describe('Find double', () => {
    it('find double testcases', () => {
      const res = findDoubleCompareTestcase(compareTc1.data, compareTc2.data)
      const expected = {
        person: 3,
        'first-name': 1,
        'last-name': [0, 0, 2],
        email: 15,
      }

      expect(res).toEqual(expected)
    })

    it('find double testcases complete', () => {
      const table = new TableDecision()
      Object.assign(table, fileTableMoreThan30)
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
            '08167b41-e15e-43a2-bfbd-527eb23ec47b': 3,
          },
        },
      ]

      expect(res).toEqual(expected)
    })

    expect(true === true).toBeTruthy()
  })
})
