import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieModal from './components/MovieModal';
import MovieCard from './components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '60e006db';
const DEFAULT_MOVIE = 'avengers';
const MAX_MOVIES = 10;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies(DEFAULT_MOVIE);
  }, []);

  const fetchMovies = async (query) => {
    try {
      const response = await fetch(`${API_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search.slice(0, MAX_MOVIES));
        setError(null);
      } else {
        handleApiError(data.Error);
      }
    } catch {
      handleApiError('Failed to fetch movies. Please try again later.');
    }
  };

  const handleApiError = (message) => {
    setMovies([]);
    setError(message === "Too many results." ? "Too many results. Try searching with the full name of movie." : message);
  };

  const fetchMovieDetails = async (imdbID) => {
    try {
      const response = await fetch(`${API_URL}?i=${encodeURIComponent(imdbID)}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setSelectedMovie(data);
      } else {
        setError(data.Error);
      }
    } catch {
      setError('Failed to fetch movie details. Please try again later.');
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      fetchMovies(searchTerm);
    }
  };

  const openModal = (movie) => {
    fetchMovieDetails(movie.imdbID);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <div className="row g-4">
        {error ? (
          <p className="text-center text-danger">{error}</p>
        ) : movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} onClick={openModal} />)
        ) : null }
      </div>
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
};

export default App;
