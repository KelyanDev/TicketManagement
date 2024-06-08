import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTicketById, updateTicket } from "../api/api";

export default function ModifyTicket() {
    const { id } = useParams();
    const naviguate = useNavigate();
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [res, setRes] = useState('');
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
                <h2 className="creation-title"> Modifier un ticket </h2>
                <form className="creation-form" onSubmit={handleSubmit}> 
                    <div className="creation-form-group">
                        <label for="Title"> Titre: </label>
                        <input className="input" id="Title" type="text" defaultValue={ticket.title} onChange={(e) => setTitle(e.target.value)} required></input>
                    </div>
                    <div className="creation-form-group">
                        <label for="Image"></label>
                        <input className="uploader" id="Image" type="file" defaultValue={ticket.imageUrl} onChange={(event) => setImage(event.target.files[0])}></input>
                        <p className="uploaded"><b>Image actuelle:</b> {ticket.imageUrl}</p>
                    </div>
                    <div className="creation-form-group">
                        <label for="Priority"> Priorité: </label>
                        <input className="input" id="Priority" type="number" defaultValue={ticket.priority} onChange={(e) => setPriority(e.target.value)} required></input>
                    </div>
                    <div className="creation-form-group">
                        <label for="Desc"> Description: </label>
                        <textarea className="input" id="Desc" type="text" rows='7' defaultValue={ticket.description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div className="aligned-btns">
                        <button className="btn form-register-btn" onClick={() => naviguate('/mytickets')}> Retour</button>
                        <button className="btn form-register-btn" type="submit"> Valider</button>
                    </div>
                    <p className="form-res">{res.message}</p>
                </form>
            </div>
        </div>
    );
}