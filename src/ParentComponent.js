import React, { useState } from 'react';
import MovieSearch from './Components/MovieSearch';
import GetNews from './Components/GetNews'
import './styles.css';

function ParentComponent() {

    const [activButton, setActiveButton] = useState(null);
    
    const handleMoviesButton = () => {
        setActiveButton('movies');
      };

      const handleNewsButton = () => {
        setActiveButton('news');
      };

    return (
        <div className="parent-container">
          {activButton === null && (
            <div className="button-group">
              <button onClick={handleMoviesButton} className="show-button">
                About Movies
              </button>
              <button onClick={handleNewsButton} className='show-button'>
                Get Latest News
              </button>
            </div>
          )}
    
          {activButton === 'movies' && <MovieSearch />}
          {activButton === 'news' && <GetNews />}
        </div>
      );
}

export default ParentComponent;
