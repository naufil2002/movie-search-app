import React from 'react';
import '../App.css';

function MovieModal({ movie, onClose }) {
  return (
    <div
      className={`modal ${movie ? 'show' : ''}`}
      tabIndex="-1"
      style={movie ? { display: 'block' } : { display: 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button
            className="btn-close"
            onClick={onClose}
            aria-label="Close"
          ></button>
          <div className="modal-body">
            <h5 className="modal-title">{movie.Title}</h5>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Rating:</strong> {movie.imdbRating}</p>
            <div>
              <img
                className="img-fluid modalimg"
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
