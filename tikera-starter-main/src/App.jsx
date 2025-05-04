import React, { useState, useEffect } from "react";
import DaySelector from "./components/DaySelector";
import MovieList from "./components/MovieList";
import moviesData from "./assets/movies.json";
import SelectedMovie from "./components/SelectedMovie";

const App = () => {

    const daysShifted = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [selectedDay, setSelectedDay] = useState(daysShifted[new Date().getDay()]);
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        setMovies(moviesData);
    }, []);

    const newDaySelected = (day) => {
        if (day === selectedDay) return;
        setSelectedDay(day);
        setSelectedMovie(null);
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style = {{ textAlign: "center" }}>Cinema Booking</h1>
            < DaySelector selectedDay = {selectedDay} onDayChange = {newDaySelected} />
            
            <div style =
            {{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
            }}>
                <div style = {{ width: "60%" }}>
                    < MovieList movies = {movies} selectedDay = {selectedDay} setSelectedMovie = {setSelectedMovie}/>
                </div>
                <div style = {{ width: "40%" }}>
                    < SelectedMovie movie = {selectedMovie} />
                </div>
            </div>
        </div>
    );
};

export default App