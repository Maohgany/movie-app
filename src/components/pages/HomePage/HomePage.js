import React from 'react'
import { useMovieData } from '../../../hooks/useMovieData';

const HomePage = () => {

const {movie, loading,error} = useMovieData("/popular");

console.log(movie, loading,error)

  return (
    <div>
      {movie.map(movie => <p key={movie.id}>{movie.title}</p>)}
    </div>
  )
}

export default HomePage;
