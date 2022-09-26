import React from "react";
import "./MovieCard.css";
import {Link} from 'react-router-dom';
const MovieCard = ({title, description, imageUrl, date,id}) => {
  return (
    <div>
    <Link to={`/movieDetails/${id}`}>
      <div className="card">
      <a href="/">
      <img className="img1" alt="movie" src={imageUrl}/>
      <img className="img2" alt="movie" src={imageUrl}/>
      <div className="title">{title}</div>
      <div className="text">{description}</div>
      <a href="/">
        <div className="catagory">
          Series <i className="fas fa-film"></i>
        </div>
      </a>
      <a href="/">
        <div className="views">
          {date} <i className="far fa-eye"></i>{" "}
        </div>
      </a>
    </a>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
