import React from 'react'
import Movie from 'Movie'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

test('renders content', () => {
  const movie: Movie = {
    title: 'Testing title',
    year: 2000,
    description: 'Testing description',
  }
  const component = render(<Movie {...movie} />)
  console.log(component)
})
