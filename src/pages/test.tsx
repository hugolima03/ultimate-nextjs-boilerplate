import { render, screen } from '@testing-library/react'

import Home from './index'

describe('Index', () => {
  it('initial', () => {
    render(<Home />)
    expect(screen.getByText(/Get started by editing/i))
  })
})
