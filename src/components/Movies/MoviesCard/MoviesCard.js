import React from 'react'
import * as Styled from './styles'
import { AiTwotoneLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MoviesCard = ({ movie }) => {
  return (
 <Link to={`/movie/${movie.id}`}> 
    <Styled.Wrapper>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <Styled.Box>
        <span>{movie.release_date}</span>
       
        </Styled.Box>   
        <Styled.Rated> 
        <span>{movie.vote_average} <AiTwotoneLike/> </span>   
        
        </Styled.Rated> 


    </Styled.Wrapper>
    </Link>
   


  )
}

export default MoviesCard;
