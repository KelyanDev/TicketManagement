import { useState, useEffect } from "react";
import { fetchOwnedTicket } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function OwnedTickets() {
    const [ownedTickets, setOwnedTickets] = useState([]);
    const [error, setError] = useState(null);
    const naviguate = useNavigate();
    const { t } = useTranslation();

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
                                <p className='ticket-priority'>{t('Create.Prio')}: {ticket.priority}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>{t('Owned.None')}</p>
                )}
            </div>
        </div>
    );
}