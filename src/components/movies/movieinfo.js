import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Movies from './movies';

const MovieInfo = () => {
  const { id } = useParams();
  console.log('Movie ID:' +id);
  const film = Movies.find((f) => f.id === parseInt(id, 10));

  if (!film) {
    return <div>Movie not found</div>;
  }

  return (
    <>
     <div className="movie-info-container">
      <h1>{film.titre}</h1>
      <p>{film.description}</p>
      <iframe
        width="560"
        height="315"
        src={film.trailerlink}
        title="Official Trailer"
        allowFullScreen
      ></iframe>
      <Link to="/" className="return-link">Return to homepage</Link>
    </div>
    </>
   
  );
};

export default MovieInfo;