import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Todo from './Todo'

describe('Todo Component', () => {
  it('renders todo text and status correctly', () => {
    const mockTodo = {
      id: 1,
      text: 'Test todo',
      done: false
    }
    
    render(<Todo todo={mockTodo} />)
    
    expect(screen.getByText('Test todo')).toBeInTheDocument()
    expect(screen.getByText('Not done')).toBeInTheDocument()
  })
})