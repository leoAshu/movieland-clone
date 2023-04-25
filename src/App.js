import React, { useEffect, useState } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
};

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                    placeholder='Search for movies'
                    value='Superman'
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={() => {}}
                />
            </div>

            <div className='container'>
                {
                    movies?.length > 0 ?
                    (
                        movies?.map((movie) => <MovieCard movie={movie}/>) 
                    ) :
                    (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default App;
