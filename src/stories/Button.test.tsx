import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button label="Label" />)
    expect(screen.getByText(/Label/i)).toBeInTheDocument()
  })
})
