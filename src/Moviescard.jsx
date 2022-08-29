import React from "react";

const Moviescard = ({movie}) => {

   
    return ( 
    <div className='movie' key={movie.imdbID}>
    <div><p>{movie.Year}</p></div>
    <div><img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400' } alt="" /></div>
    <div>
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
    </div>

  </div> 
  );
}
 
export default Moviescard;