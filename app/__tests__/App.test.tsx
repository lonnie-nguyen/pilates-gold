import React from 'react'
import renderer from 'react-test-renderer'
import { it, expect } from '@jest/globals'
import App from '../App'

it('has 1 child', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree.children.length).toBe(1)
})
