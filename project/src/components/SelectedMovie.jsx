import React from "react";
import ScreeningSelector from "./ScreeningSelector.jsx";

const SelectedMovie = ({ movie, selectedDay }) => {
    if (movie == null) return null;
    return (
        <div style =
        {{
            background: "maroon",
            padding: "10px",
            marginTop: "20px",
            border: "2px solid white",
            borderRadius: "10px",
        }}>
            <img
                src = {`assets/images/${movie.image}`}
                alt = {`image for ${movie.title}: ${movie.image}`}
                style =
                {{
                    width: "50%",
                    height: "auto",
                    display: "block",
                    margin: "auto",
                    border: "2px solid white",
                    borderRadius: "5px"
                }}
            />
            <h2 style = {{ textAlign: "center" }}>{movie.title}</h2>
            <p><strong>Year of release: </strong> {movie.release_year} </p>
            <p><strong>Genre: </strong> {movie.genre} </p>
            <p><strong>Duration: </strong> {movie.duration} minutes </p>
            <p> {movie.description} </p>

            < ScreeningSelector movie = {movie} selectedDay = {selectedDay} />
        </div>
    )
};

export default SelectedMovie;