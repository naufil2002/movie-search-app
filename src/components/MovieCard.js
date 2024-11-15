import React from 'react';
import '../App.css'

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mt-5">
      <div 
        className="card cursor" 
        onClick={() => onClick(movie)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '450px', 
        }}
      >
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          className="card-img-top" 
          style={{
            objectFit: 'cover',  
            height: '325px',     
            width: '100%'        
          }} 
        />
        <div className="card-body" style={{ flexGrow: 1 }}>
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
