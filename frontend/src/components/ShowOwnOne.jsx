import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTicket, fetchTicketById } from "../api/api";
import { useTranslation } from "react-i18next";

export default function OwnedOneTicket() {
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

    async function handleDelete() {
        try {
            const res = await deleteTicket(id);
            naviguate('/mytickets')
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <div className="single-ticket-pane">
                <img className="single-ticket-image" alt={ticket.title} src={ticket.imageUrl} />
                <div className="single-ticket-info">
                    <h1 className="single-ticket-title">{ticket.title}</h1>
                    <h2 className="single-ticket-priority">{t('Create.Prio')}: {ticket.priority}</h2>
                    <p className="single-ticket-description"> {ticket.description}</p>
                    <div className="single-ticket-btns">
                        <button className="btn btn-link modify" onClick={() => naviguate(`/mytickets/edit/${id}`)}>{t('Modify.Button-Mod')}</button>
                        <button className="btn btn-link delete" onClick={handleDelete}>{t('Modify.Button-Del')}</button>
                    </div>
                    <button className="btn btn-link" onClick={() => naviguate(-1)}>{t('Modify.Button-Back')}</button>
                </div>
            </div>
        </div>
    );
}