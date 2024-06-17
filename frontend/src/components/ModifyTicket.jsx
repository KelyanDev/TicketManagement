import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTicketById, updateTicket } from "../api/api";
import { useTranslation } from "react-i18next";

export default function ModifyTicket() {
    const { id } = useParams();
    const naviguate = useNavigate();
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [res, setRes] = useState('');
    const { t } = useTranslation();
    const [ticket, setTicket] = useState({
        title: '',
        description: '',
        priority: '',
        imageUrl: ''
    });

    useEffect(() => {
        const getTicket = async () => {
            try {
                const fetchedTicket = await fetchTicketById(id);
                setTicket(fetchedTicket);
                setTitle(fetchedTicket.title);
                setDescription(fetchedTicket.description);
                setPriority(parseInt(fetchedTicket.priority));
                setImage(fetchedTicket.imageUrl);
            } catch (error) {
                console.log(error);
            }
        };

        getTicket();
    }, [id])

    async function handleSubmit(e) {
        e.preventDefault();

        const ticketData = {
            title,
            priority,
            description,
            userId: localStorage.getItem('userId')
        };
        
        const formData = new FormData();
        formData.append('ticket', JSON.stringify(ticketData));
        formData.append('image', image)
        try {
            const res = await updateTicket(id, formData);
            naviguate('/mytickets');
            setRes(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="creation-grid">
            <div className="creation-container">
                <h2 className="creation-title"> {t('Modify.Title')} </h2>
                <form className="creation-form" onSubmit={handleSubmit}> 
                    <div className="creation-form-group">
                        <label for="Title"> {t('Create.Subtitle')}: </label>
                        <input className="input" id="Title" type="text" defaultValue={ticket.title} onChange={(e) => setTitle(e.target.value)} required></input>
                    </div>
                    <div className="creation-form-group">
                        <label for="Image"></label>
                        <input className="uploader" id="Image" type="file" defaultValue={ticket.imageUrl} onChange={(event) => setImage(event.target.files[0])}></input>
                        <p className="uploaded"><b>{t('Modify.File')}:</b> {ticket.imageUrl}</p>
                    </div>
                    <div className="creation-form-group">
                        <label for="Priority"> {t('Create.Prio')}: </label>
                        <input className="input" id="Priority" type="number" defaultValue={ticket.priority} onChange={(e) => setPriority(e.target.value)} required></input>
                    </div>
                    <div className="creation-form-group">
                        <label for="Desc"> Description: </label>
                        <textarea className="input" id="Desc" type="text" rows='7' defaultValue={ticket.description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div className="aligned-btns">
                        <button className="btn form-register-btn" onClick={() => naviguate('/mytickets')}> {t('Modify.Button-Back')}</button>
                        <button className="btn form-register-btn" type="submit"> {t('Create.Valid')}</button>
                    </div>
                    <p className="form-res">{res.message}</p>
                </form>
            </div>
        </div>
    );
}