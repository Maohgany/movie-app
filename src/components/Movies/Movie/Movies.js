import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './style'
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const Movies = ({ movie, popular }) => {

  return (
    <Styled.Wrapper>

      <h3>{popular}</h3>
      <Swiper
        spaceBetween={10}
        slidesPerView={8}
        loop={true}

        autoplay={{
          delay: movie ? 3000 : 2000,
          disableOnInteraction: false
        }}
        
        breakpoints={{
          640: {
            width:640,
            slidesPerView:2
          },
          768: {
            width:768,
            slidesPerView:3
          },
          992: {
            width:992,
            slidesPerView:3
          }
        }}
      >
        {movie?.map((movie) => <SwiperSlide> <MoviesCard key={movie.id} movie={movie} /></SwiperSlide>)}
      </Swiper>

    </Styled.Wrapper>


  )
}

export default Movies;
