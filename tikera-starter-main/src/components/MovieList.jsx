import React from "react";

const MovieList = ({ movies, selectedDay }) => {
    const filteredMovies = movies.filter((movie) =>
    movie.screenings.some((screening) => screening.weekday === selectedDay)
    );

    return(
        <div>
            {
                filteredMovies.map((movie) => (
                    <div key = {movie.id} style = {{ margin: "10px 0"}}>
                        <h3>{movie.title}</h3>
                        <p>image name: {movie.image} - {movie.genre}, {movie.duration}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default MovieList;