import React from 'react'
import { it, expect } from '@jest/globals'
import { render } from '@testing-library/react-native'
import Movements from '../src/screens/Movements'

it('movements page snapshot', () => {
  const { toJSON } = render(<Movements />)
  expect(toJSON()).toMatchSnapshot()
})
