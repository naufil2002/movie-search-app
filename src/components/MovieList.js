import React from 'react';

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div 
          key={movie.imdbID} 
          className="movie-item" 
          onClick={() => onSelectMovie(movie)}
        >
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
