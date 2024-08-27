import React, { useState } from 'react';
import MovieSearch from './Components/MovieSearch';
import './styles.css';

function ParentComponent() {

    const [showMovieSearch, setShowMovieSearch] = useState(false);

    const handleButtonClick = () => {
        setShowMovieSearch(true);
    };

    return (
        <div className="parent-container">
            {!showMovieSearch ? (
                <button onClick={handleButtonClick} className="show-movie-button">
                    About Movies
                </button>
            ) : (
                <MovieSearch />
            )}
        </div>
    );
}

export default ParentComponent;
