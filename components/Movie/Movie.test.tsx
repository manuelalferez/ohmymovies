import React from 'react'
import Movie from './Movie'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { MovieType } from '../../types/movie'

test('renders content', () => {
  const movie: MovieType = {
    title: 'Testing title',
    year: 2000,
    description: 'Testing description',
  }
  const component = render(<Movie {...movie} />)
  // component.getByText(movie.title)
  // component.getByText(movie.description)
  expect(component.container).toHaveTextContent(movie.title)
  expect(component.container).toHaveTextContent(movie.description)
})
