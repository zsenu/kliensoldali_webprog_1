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

    return(
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Cinema booking</h1>
            <DaySelector selectedDay = {selectedDay} onDayChange = {setSelectedDay} />
            <MovieList movies = {movies} selectedDay = {selectedDay} />
        </div>
    );
};

export default App