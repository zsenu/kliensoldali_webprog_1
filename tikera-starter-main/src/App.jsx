import React, { useState, useEffect } from "react";
import DaySelector from "./components/DaySelector";
import MovieList from "./components/MovieList";
import moviesData from "./assets/movies.json";

function App()
{
    const [selectedDay, setSelectedDay] = useState("Monday");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(moviesData);
    }, []);

    return(
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Movie Booking</h1>
            <DaySelector selectedDay = {selectedDay} onDayChange = {setSelectedDay} />
            <MovieList movies = {movies} selectedDay = {selectedDay} />
        </div>
    );
};

export default App