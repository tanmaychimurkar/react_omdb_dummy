import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className={'movie'}>
            <div>
                <p>{movie.Year}</p>
                {/*<img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholer.com/400'}/>*/}
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholer.com/400'}/>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;