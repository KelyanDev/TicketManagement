import { useState, useEffect } from "react";
import { fetchOwnedTicket } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function OwnedTickets() {
    const [ownedTickets, setOwnedTickets] = useState([]);
    const [error, setError] = useState(null);
    const naviguate = useNavigate();

    useEffect(() => {
        const getTickets = async () => {
            const userId = localStorage.getItem('userId');
            try {
                const tickets = await fetchOwnedTicket(userId);
                setOwnedTickets(tickets)
            } catch (error) {
                setError(error.message);
            }
        };

        getTickets();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            <div className='ticket-grid'>
                {ownedTickets.length > 0 ? (
                    ownedTickets.map(ticket => (
                        <div key={ticket._id} className='ticket-card' onClick={() => naviguate(`/mytickets/${ticket._id}`)}>
                            <img src={ticket.imageUrl} alt={ticket.title} className='ticket-image' />
                            <div className='ticket-content'>
                                <h2 className='ticket-title'>{ticket.title}</h2>
                                <p className='ticket-priority'>Priorité: {ticket.priority}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Vous n'avez aucun tickets !</p>
                )}
            </div>
        </div>
    );
}