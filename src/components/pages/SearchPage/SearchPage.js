import React, { useEffect, useState } from 'react'
import MainTemplates from '../../templates/Main.Templates';
import * as Styled from './styles'
const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        let debounce = null;
        debounce = setTimeout(() => getData(), 2000);
        return () => clearInterval(debounce);
    }, [query])

    const getData = async () => {

        const key = process.env.REACT_APP_API_KEY;
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`);
        const data = await res.json();
        setMovie(data.results);

    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <MainTemplates>
            <Styled.div>
            <input value={query} onChange={handleChange} placeholder='search movie' />
            <div>
                {!movie.length ? <p>Movie Not Found</p> : movie.map((movie) => <p key={movie.id}> {movie.title} </p>)}
            </div>
            </Styled.div>
        </MainTemplates>
    )
}

export default SearchPage;
