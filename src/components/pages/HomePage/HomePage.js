import React, { useEffect, useState } from 'react'
import 'swiper/css';
import { useMovieData } from '../../../hooks/useMovieData';
import Movies from "../../Movies/Movie/Movies"
import MainTemplates from '../../templates/Main.Templates';


const HomePage = () => {

  const { movie: popular, loading, error } = useMovieData("/movie/popular");
  const { movie: tvPopular } = useMovieData("/tv/popular")
  const { movie: upComing } = useMovieData("/movie/upcoming")
  const { movie: TopRated } = useMovieData("/movie/top_rated")

  // console.log(upComing)
  const [movies, setMovies] = useState();

  useEffect(() => {
    if (movies) return;
    MoviesCard();
  }, [popular])
  const MoviesCard = () => {
    if (!popular?.results) return;
    const result = Math.floor(Math.random() * popular.results.length);
    setMovies(popular[result]);
  }
  return (

    <MainTemplates>
      
      <Movies movie={upComing?.results} popular='Nadchodzące' />
      <Movies movie={popular?.results} popular='Popularne' />
      <Movies movie={tvPopular?.results} popular='Popularne Seriale' />
      <Movies movie={TopRated?.results} popular='Najwyżej Oceniane' />
      
    </MainTemplates>

  )
}

export default HomePage;
