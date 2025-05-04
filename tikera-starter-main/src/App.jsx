import React, { useState, useEffect } from "react";
import DaySelector from "./components/DaySelector";
import MovieList from "./components/MovieList";
import moviesData from "./assets/movies.json";

const App = () => {

    const daysShifted = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [selectedDay, setSelectedDay] = useState(daysShifted[new Date().getDay()]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(moviesData);
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Cinema Booking</h1>
            < DaySelector selectedDay = {selectedDay} onDayChange = {setSelectedDay} />
            <div style = {{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px"
            }}>
            <div style = {{ flex: "3", marginRight: "20px" }}>
                <MovieList movies = {movies} selectedDay = {selectedDay} />
            </div>
    
            <div style = {{
                flex: "2",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                backgroundColor: "#f9f9f9",
                color: "black",
                height: "fit-content"
            }}>
                <p>movie details placeholder</p>
            </div>
          </div>
        </div>
    );
};

export default App