import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../src/App'

describe('Main tests', () => {
  it('should render the main component', () => {
    render(<App />)
    expect(true).toBeTruthy()
  })
})
