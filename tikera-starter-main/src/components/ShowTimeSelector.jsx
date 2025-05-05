import React, { useState, useEffect } from "react";

const ShowTimeSelector = ({ movie, selectedDay }) => {

    const screenings = movie.screenings
        .filter((screening) => screening.weekday === selectedDay)
        .sort((a, b) => a.start_time.localeCompare(b.start_time));

    const [selectedScreening, setSelectedScreening] = useState(null);

    useEffect(() => {
        setSelectedScreening(null);
    }, [movie]);

    return (
        <div style = 
        {{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "5px",
            marginTop: "5px"
        }}>
            <h3 style = {{ width: "100%", textAlign: "center" }}>Showtimes:</h3>
            {
                screenings.map((screening) => (
                    <button
                    key = {screening.id}
                    onClick = {() => setSelectedScreening(screening)}
                    style =
                    {{
                        background: (screening === selectedScreening) ? "white" : "#222222",
                        color: (screening === selectedScreening) ? "black" : "white",
                        width: "80px",
                        height: "50px",
                        borderRadius: "5px",
                        textAlign: "center"
                    }}>
                        {screening.start_time}
                    </button>
                )
            )}
        </div>
    );
}

export default ShowTimeSelector;