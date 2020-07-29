import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Index } from '../../pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Index />, {})
    expect(asFragment()).toMatchSnapshot()
  })

})
