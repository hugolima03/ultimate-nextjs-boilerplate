import { render, screen } from '@testing-library/react'

import Teste from '.'

describe('<Teste />', () => {
  it('should render the text correctly', () => {
    render(<Teste />)

    expect(screen.getByText(/Teste/i)).toBeTruthy()
  })
})
