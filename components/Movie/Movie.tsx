const Movie = (movie: Movie) => {
  return (
    <div className="body-font text-2xl text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap justify-center">
          <div className="p-4 md:w-1/2">
            <div className="h-full overflow-hidden rounded-lg border-2 border-gray-300 border-opacity-60">
              <div className="p-6">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                  MOVIE
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                  {movie.title}
                </h1>
                <p className="mb-3 leading-relaxed">{movie.description}</p>
                <div className="flex flex-wrap items-center ">
                  <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-gray-400">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
