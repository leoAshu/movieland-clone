import React, { useEffect, useState } from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');

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
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchText)}
                />
            </div>

            <div className='container'>
                {
                    movies?.length > 0 ?
                    (
                        movies?.map((movie) => <MovieCard movie={movie} />) 
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
