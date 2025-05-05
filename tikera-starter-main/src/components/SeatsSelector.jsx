import React, { useState , useEffect} from "react";

const SeatsSelector = ({ screening }) => {

    const rows = screening.room.rows;
    const cols = screening.room.seatsPerRow;
    const totalSeats = rows * cols;
    const availableSeats = totalSeats - screening.bookings.length;
    
    const ticketTypes = [
        { type: "Adult",   price: 2500 },
        { type: "Student", price: 2000 },
        { type: "Senior",  price: 1800 }
    ];

    const [selectedAdultTickets, setSelectedAdultTickets] = useState(0);
    const [selectedStudentTickets, setSelectedStudentTickets] = useState(0);
    const [selectedSeniorTickets, setSelectedSeniorTickets] = useState(0);
    const selectedTickets = selectedAdultTickets + selectedStudentTickets + selectedSeniorTickets;

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
    }, [screening])

    const priceToPay = (selectedAdultTickets * ticketTypes[0].price) +
                       (selectedStudentTickets * ticketTypes[1].price) +
                       (selectedSeniorTickets * ticketTypes[2].price);

    return (
        <div style = {{textAlign: "center"}}>
            <p>Available seats: {availableSeats} / {totalSeats}</p>
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

                        <button onClick = {() => handleTicketChange(ticket.type, -1)}> - </button>

                        <span
                            style = {{
                                display: "inline-block",
                                width: "10%"
                        }}>
                            {ticket.type === "Adult" ? selectedAdultTickets : ticket.type === "Student" ? selectedStudentTickets : selectedSeniorTickets}
                        </span>

                        <button onClick = {() => handleTicketChange(ticket.type, 1)}> + </button>
                    </div>
                ))
            }
            { selectedTickets > 0? <p>Selected tickets: 0 / {selectedTickets}<br/>Price to pay: {priceToPay} HUF</p> : null }
        </div>
    );
}

export default SeatsSelector;