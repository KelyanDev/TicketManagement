import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTicketById } from "../api/api";

export default function OneTicket() {
    const { id } = useParams();
    const naviguate = useNavigate();
    const [ticket, setTicket] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTicket = async () => {
            try {
                const ticket = await fetchTicketById(id);
                setTicket(ticket);
            } catch (error) {
                setError(error.message);
            }
        };

        getTicket();
    }, [id])

    if (!ticket) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <div className="single-ticket-pane">
                <img className="single-ticket-image" alt={ticket.title} src={ticket.imageUrl} />
                <div className="single-ticket-info">
                    <h1 className="single-ticket-title">{ticket.title}</h1>
                    <h2 className="single-ticket-priority">Priorité: {ticket.priority}</h2>
                    <p className="single-ticket-description"> {ticket.description}</p>
                    <button className="btn btn-link" onClick={() => naviguate(-1)}>Retour</button>
                </div>
            </div>
        </div>
    );
}