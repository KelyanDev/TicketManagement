import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTickets } from '../api/api';
import { useTranslation } from 'react-i18next';

export default function OpenedTickets() {
    const [tickets, setTickets] = useState([]);
    const [error, setError] = useState(null);
    const naviguate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        const getTickets = async () => {
            try {
                const tickets = await fetchTickets();
                setTickets(tickets)
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
                {tickets.length > 0 ? (
                    tickets.map(ticket => (
                        <div key={ticket._id} className='ticket-card' onClick={() => naviguate(`/ticket/${ticket._id}`)}>
                            <img src={ticket.imageUrl} alt={ticket.title} className='ticket-image' />
                            <div className='ticket-content'>
                                <h2 className='ticket-title'>{ticket.title}</h2>
                                <p className='ticket-priority'>{t('Create.Prio')} {ticket.priority}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>{t('Opened.None')}</p>
                )}
            </div>
        </div>
    );
}