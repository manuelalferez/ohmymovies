import type { NextPage } from 'next'
import Head from 'next/head'
import Movie from '../components/Movie/Movie'

const Home: NextPage = () => {
  const movie: Movie = {
    title: 'Batman Begins',
    year: 2005,
    description:
      'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Movie {...movie} />
    </div>
  )
}

export default Home
