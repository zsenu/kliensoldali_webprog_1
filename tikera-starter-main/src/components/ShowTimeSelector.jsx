import React, { useState, useEffect } from "react";

const ShowTimeSelector = ({ movie, selectedDay }) => {

    const screenings = movie.screenings
        .filter((screening) => screening.weekday === selectedDay)
        .sort((a, b) => a.start_time.localeCompare(b.start_time));

    const [selectedScreening, setSelectedScreening] = useState(null);
    const [availableSeats, setAvailableSeats] = useState(0);

    const screeningSelectionHandler = (screening) => {
        setSelectedScreening(screening);
        setAvailableSeats((screening.room.rows * screening.room.seatsPerRow) - screening.bookings.length);
    }
    useEffect(() => {
        setSelectedScreening(null);
    }, [movie]);

    const ticketTypes = [
        { type: "Adult",   price: 2500 },
        { type: "Student", price: 2000 },
        { type: "Senior",  price: 1800 }
    ];

    const [selectedAdultTickets, setSelectedAdultTickets] = useState(0);
    const [selectedStudentTickets, setSelectedStudentTickets] = useState(0);
    const [selectedSeniorTickets, setSelectedSeniorTickets] = useState(0);
    const selectedTickets = selectedAdultTickets + selectedStudentTickets + selectedSeniorTickets;

    const priceToPay = (selectedAdultTickets * ticketTypes[0].price) +
                       (selectedStudentTickets * ticketTypes[1].price) +
                       (selectedSeniorTickets * ticketTypes[2].price);

    const handleTicketChange = (type, change) => {
        if (type === "Adult")
        {
            let newAdultTickets = selectedAdultTickets + change;
            if (newAdultTickets >= 0 && selectedTickets + change <= availableSeats)
            { setSelectedAdultTickets(newAdultTickets); }
        }
        else if (type === "Student")
        {
            let newStudentTickets = selectedStudentTickets + change;
            if (newStudentTickets >= 0 && selectedTickets + change <= availableSeats)
            { setSelectedStudentTickets(newStudentTickets); }
        }
        else if (type === "Senior")
        {
            let newSeniorTickets = selectedSeniorTickets + change;
            if (newSeniorTickets >= 0 && selectedTickets + change <= availableSeats)
            { setSelectedSeniorTickets(newSeniorTickets); }
        }
        else { console.error("error: invalid ticket type"); }
    }

    useEffect(() => {
        setSelectedAdultTickets(0);
        setSelectedStudentTickets(0);
        setSelectedSeniorTickets(0);
    }, [selectedScreening])

    return (
        <div>
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
                        onClick = {() => screeningSelectionHandler(screening)}
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
            { selectedScreening ?
            <div style = {{textAlign: "center"}}>
                <p>Available seats: {availableSeats}</p>
                {
                    ticketTypes.map((ticket) => (
                        <div key = {ticket.type}>
                            <span
                                style = {{
                                    display: "inline-block",
                                    width: "35%"
                            }}>
                                {ticket.type} ({ticket.price} HUF)
                            </span>

                            <button
                                onClick = {() => handleTicketChange(ticket.type, -1)}
                            >
                                -
                            </button>

                            <span
                                style = {{
                                    display: "inline-block",
                                    width: "10%"
                            }}>
                                {ticket.type === "Adult" ? selectedAdultTickets : ticket.type === "Student" ? selectedStudentTickets : selectedSeniorTickets}
                            </span>

                            <button
                                onClick = {() => handleTicketChange(ticket.type, 1)}
                            >
                                +
                            </button>
                        </div>
                    ))
                }

                { selectedTickets > 0? <p>Selected tickets: 0 / {selectedTickets}<br/>Price to pay: {priceToPay} HUF</p> : null }
            </div>
            : null }
        </div>
    );
}

export default ShowTimeSelector;