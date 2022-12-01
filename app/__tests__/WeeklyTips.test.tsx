import React from 'react'
import { it, expect } from '@jest/globals'
import { render } from '@testing-library/react-native'
import WeeklyTips from '../src/screens/WeeklyTips'

it('matches snapshot', () => {
  const { toJSON } = render(<WeeklyTips />)
  expect(toJSON()).toMatchSnapshot()
})
