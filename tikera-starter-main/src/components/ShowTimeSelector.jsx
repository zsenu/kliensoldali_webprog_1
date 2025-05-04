import React from "react";

const ShowTimeSelector = ({ movie, selectedDay }) => {

    const screenings = movie.screenings
        .filter((screening) => screening.weekday === selectedDay)
        .sort((a, b) => a.start_time.localeCompare(b.start_time));

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
                    style =
                    {{
                        background: "#222222",
                        width: "80px",
                        height: "50px",
                        border: "2px solid white",
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