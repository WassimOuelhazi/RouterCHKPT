import React from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const MovieDetails = ({ Movies }) => {
  const { id } = useParams();

  const movie = Movies.find((m) => m._id ===id ) ;



  return (
    <div Style="margin: 10% 35%;width:600px;height:600px">
      <div className="cardDetails">
        
        <div className="title">{movie.title}</div>

          <img className="img1" alt="movie" src={movie.imgUrl} />
          <div className="text">{movie.description}</div>
          <a href="/">
            <div className="catagory">
              {movie.category} <i className="fas fa-film"></i>
            </div>
          </a>
          <a href={movie.trailerUrl}>
            <div className="views">
              Trailer <i className="far fa-eye"></i>{" "}
            </div>
          </a>

          <Link className="link" to={movie.trailerUrl}>
        </Link>

         
          
        
      </div>
    </div>
  );
};

export default MovieDetails;
