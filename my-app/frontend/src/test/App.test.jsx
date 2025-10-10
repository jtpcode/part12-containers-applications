import { vi } from 'vitest'

vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: [] })),
    post: vi.fn(() => Promise.resolve({ data: {} })),
    put: vi.fn(() => Promise.resolve({ data: {} })),
    delete: vi.fn(() => Promise.resolve({})),
  },
}))

import { render, screen, act } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders Phonebook text', async () => {
    await act(async () => {
      render(<App />)
    })
    expect(screen.getByText('Phonebook')).toBeInTheDocument()
  })

  it('renders Add button', async () => {
    await act(async () => {
      render(<App />)
    })
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()
  })
})