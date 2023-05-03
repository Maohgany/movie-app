import React from 'react'
import { useParams } from 'react-router-dom';
import { useMovieData } from '../../../hooks/useMovieData';
import MainTemplates from '../../templates/Main.Templates';
import * as Styled from './styles'
const MoviePage = () => {
  const params = useParams();
  const { movie, loading, error } = useMovieData(`/movie/${params.id}`)


  console.log(movie);
  if (!movie) return;



  return (
<MainTemplates>
    <Styled.Wrapper>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <Styled.Title>
        <h3>{movie.original_title}</h3>
      </Styled.Title>
      <Styled.Overview>
        <p>{movie.overview}</p>
      </Styled.Overview>
      <Styled.Name>
      <p>Link do strony głównej:</p>
      </Styled.Name>
      <Styled.Homepage href={movie.homepage} target="_blank" >{movie.homepage}</Styled.Homepage>
       
    </Styled.Wrapper>
    </MainTemplates>
  )
}

export default MoviePage;
