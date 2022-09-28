import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ Movies }) => {
  const { id } = useParams();

  const movie = Movies.find((m) => m._id === id);

  return (
    <div Style="margin: 0% 35%;width:600px;height:600px">
      <div className="cardDetails">
        <div className="title">{movie.title}</div>

        <img className="img1" alt="movie" src={movie.imgUrl} />
        <div className="text">{movie.description}</div>
        <a href="/">
          <div className="catagory">
            {movie.category} <i className="fas fa-film"></i>
          </div>
        </a>
        <a href="/">
          <div className="views">
          {movie.date} <i className="far fa-eye"></i>{" "}
          </div>
        </a>
      </div>
      <div>
      <h2 Style="color:white">Trailer</h2> 
        <iframe
          width="560"
          height="315"
          src={movie.trailerUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;
