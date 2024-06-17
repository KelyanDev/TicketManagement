import { useState } from "react";
import { createTicket } from "../api/api";
import { useTranslation } from "react-i18next";

export default function CreateTicket() {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [res, setRes] = useState('');
    const { t } = useTranslation();

    const handleSubmit = async (event) => {
        event.preventDefault();

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
            const res = await createTicket(formData);
            setTitle('');
            setPriority(0);
            setDescription('');
            setRes(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="creation-grid">
            <div className="creation-container">
                <h2 className="creation-title"> {t('Create.Title')} </h2>
                <form className="creation-form" onSubmit={handleSubmit}> 
                    <div className="creation-form-group">
                        <label for="Title"> {t('Create.Subtitle')}: </label>
                        <input className="input" id="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
                    </div>
                    <div className="creation-form-group">
                        <label for="Image"></label>
                        <input className="uploader" id="Image" type="file" onChange={(event) => setImage(event.target.files[0])} required></input>
                    </div>
                    <div className="creation-form-group">
                        <label for="Priority"> {t('Create.Prio')}: </label>
                        <input className="input" id="Priority" type="number" value={priority} onChange={(e) => setPriority(e.target.value)} required></input>
                    </div>
                    <div className="creation-form-group">
                        <label for="Desc"> Description: </label>
                        <textarea className="input" id="Desc" type="text" rows='7' value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <button className="btn form-register-btn" type="submit"> {t('Create.Valid')}</button>
                    <p className="form-res">{res.message}</p>
                </form>
            </div>
        </div>
    );
}