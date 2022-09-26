import React from "react";
import MovieCard from "./MovieCard";
import "./ListMovies.css";

const ListMovies = ({ Movies, searchName, searchRate }) => {
  return (
    <div className="row_posters" style={{ display:"flex",marginTop :"5%"}}>
      {Movies.filter(
        (e) =>
          e.title
            .toLowerCase()
            .trim()
            .includes(searchName.toLowerCase().trim()) && (e.rate <= searchRate)
      ).map((movie) => (
        <MovieCard 
          title={movie.title}
          description={movie.description}
          imageUrl={movie.imgUrl}
          date={movie.date}
          rate={movie.rate}
          id={movie._id}
        />
        

      ))}


     
    </div>
  );
};

export default ListMovies;
