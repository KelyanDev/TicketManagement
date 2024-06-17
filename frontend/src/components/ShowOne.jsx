import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTicketById } from "../api/api";
import { useTranslation } from "react-i18next";

export default function OneTicket() {
    const { id } = useParams();
    const naviguate = useNavigate();
    const [ticket, setTicket] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        const getTicket = async () => {
            try {
                const ticket = await fetchTicketById(id);
                setTicket(ticket);
            } catch (error) {
                console.log(error);
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
                    <h2 className="single-ticket-priority">{t('Create.Prio')}: {ticket.priority}</h2>
                    <p className="single-ticket-description"> {ticket.description}</p>
                    <button className="btn btn-link" onClick={() => naviguate(-1)}> {t('Modify.Button-Back')} </button>
                </div>
            </div>
        </div>
    );
}