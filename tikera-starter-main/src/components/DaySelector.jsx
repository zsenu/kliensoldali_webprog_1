import React from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const DaySelector = ({ selectedDay, onDayChange }) => {
    return (
        <div>
            {days.map((day) => (
                <button
                    key = {day}
                    onClick = {() => onDayChange(day)}
                    style =
                    {
                        {
                            margin: "5px",
                            padding: "10px",
                            backgroundColor: selectedDay === day ? "#007BFF" : "#f0f0f0",
                            color: selectedDay === day ? "#ffffff" : "#000000",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }
                    }
                >
                    {day}
                </button>
            ))}
        </div>
    )
}

export default DaySelector;