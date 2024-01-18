import React from 'react';
import { Link } from 'react-router-dom';
import Movies from '../movies/movies'; 

const Homepage = () => {
  
  return (
    <div className='homepage-container'>
      <h1 className='centered-header'>Welcome to Classic Movie Haven</h1>
      {Movies.map((film) => (
        <Link key={film.id} to={`/films/${film.id}`}>
          <div className='card' >
            <h2>{film.titre}</h2>
            <img src={film.posterURL} alt={`${film.titre} Poster`} />
            {}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Homepage;