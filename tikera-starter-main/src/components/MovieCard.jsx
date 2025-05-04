import React from "react";

const MovieCard = ({ movie }) => {
    return(
        <div style={{
            width: "180px",
            margin: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            fontFamily: "Arial, sans-serif"
          }}>
            <img
                src = {`./src/assets/images/${movie.image}`}
                alt = {`image for ${movie.title}: ${movie.image}`}
                style = {{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
            <h3 style = {{ fontSize: "18px", margin: "10px 0", color: "white" }}> {movie.title} </h3>
            <p style = {{ fontSize: "14px", color: "#666" }}> {movie.genre} - {movie.duration} minutes </p>
          </div>
    );
}

export default MovieCard;