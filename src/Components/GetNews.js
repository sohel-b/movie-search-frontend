import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';
import searchIcon from '../Images/search.png';

function GetNews() {
    const [topic, setTopic] = useState('');
    const [news, setNews] = useState([]);
    const [error, setError] = useState('');

    const fetchNews = async () => {
        try {
            const response = await axios.get(`http://localhost:3333/api/news/${topic}`);
            setNews(response?.data || []);  // Ensure we access the articles array properly
            setError('');
        } catch (err) {
            setError('News not found on this topic');
            setNews([]);
        }
    };

    const handleInputChange = (event) => {
        setTopic(event.target.value);
    };

    const handleSearch = () => {
        if (topic) {
            fetchNews();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="news-search-container">
            <div className="input-container">
                <input
                    type="text"
                    value={topic}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter Topic"
                />
                <img src={searchIcon} alt="Search" className="search-icon" />
            </div>
            <button 
                className="search-button"
                onClick={handleSearch}>
                Search
            </button>

            {error && <p className="error-message">{error}</p>}

            <div className="news-cards-container">
                {news.length > 0 ? (
                    news.map((item, index) => (
                        <div className="news-card" key={index}>
                            {item.urlToImage && (
                                <img
                                    src={item.urlToImage}
                                    alt={item.title}
                                    className="news-card-img"
                                />
                            )}
                            <div className="news-card-info">
                                <h3>{item.title}</h3>
                                <p className="news-author">By {item.author}</p>
                                <p className="news-source">{item.source.name}</p>
                                <p className="news-description">{item.description}</p>
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
                                    Read more
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No news available. Try another topic.</p>
                )}
            </div>
        </div>
    );
}

export default GetNews;
