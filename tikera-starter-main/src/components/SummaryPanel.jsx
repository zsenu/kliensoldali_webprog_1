import React from "react";

const SummaryPanel = ({ movie, selectedDay, screening, seats, ticketTypes, adultTickets, studentTickets, seniorTickets }) => {

    const totalTickets = adultTickets + studentTickets + seniorTickets;
    const totalPrice = (adultTickets * ticketTypes[0].price) + (studentTickets * ticketTypes[1].price) + (seniorTickets * ticketTypes[2].price);

    return (
        <div style = {{
            background: "#222222",
            color: "white",
            paddingLeft: "20px",
            paddingRight: "20px",
            border: "2px solid white",
            borderRadius: "10px",
            marginTop: "20px",
            textAlign: "left"
        }}>
            <h3 style = {{textAlign: "center" }}>Booking summary:</h3>
            <p style = {{ margin: "3px 0px" }}>Movie Title: <strong>{movie.title}</strong></p>
            <p style = {{ margin: "3px 0px" }}>Screening time: <strong>{selectedDay}, {screening.start_time}</strong> ({movie.duration} minutes)</p>
            <p style = {{ margin: "0px" }}><strong>{totalTickets} seats</strong> selected:</p>
            <ul style = {{ marginTop: "0px" }}>
            {
                seats.map((row, rowIndex) => (
                    row.map((seat, seatIndex) => (
                        seat === 1 ? <li key = {`${rowIndex}-${seatIndex}`}>row {rowIndex + 1}, seat {seatIndex + 1}</li> : null
                    ))
                ))
            }
            </ul><h4 style={{ textAlign: "center" }}>Tickets selected for purchase:</h4>
            <div style = {{ textAlign: "center" }}>
                {
                    adultTickets > 0 ? (
                        <pre>Adult      {String(adultTickets).padStart(2, " ")} x {ticketTypes[0].price} HUF    {String(adultTickets * ticketTypes[0].price).padStart(6, " ")} HUF</pre>
                    ) : null
                }
                {
                    studentTickets > 0 ? (
                        <pre>Student    {String(studentTickets).padStart(2, " ")} x {ticketTypes[1].price} HUF    {String(studentTickets * ticketTypes[1].price).padStart(6, " ")} HUF</pre>
                    ) : null
                }
                {
                    seniorTickets > 0 ? (
                        <pre>Senior     {String(seniorTickets).padStart(2, " ")} x {ticketTypes[2].price} HUF    {String(seniorTickets * ticketTypes[2].price).padStart(6, " ")} HUF</pre>
                    ) : null
                }
                <pre><hr style = {{ width: "65%" }}/><br />
                    Total:                      {String(totalPrice).padStart(6, " ")} HUF
                </pre>
            </div>
        </div>
    );
}

export default SummaryPanel;