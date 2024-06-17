import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../api/api";
import { useTranslation } from "react-i18next";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [res, setRes] = useState('');
    const { t } = useTranslation();

    async function handleSubmit(e) {
        e.preventDefault();
        
        const userData = {
            name: name,
            email: email,
            password: password
        };
        try {
            const response = await signup(userData);
            setName('');
            setEmail('')
            setPassword('')
            setRes(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="auth-grid">
            <div className="auth-register-container">
                <h2 className="auth-title">{t('Register.Title')}</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="Name"> {t('Register.Name')}: </label>
                        <input id="Name" type="text" placeholder="exemple" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label for="Mail"> {t('Register.Mail')}: </label>
                        <input id="Mail" type="email" placeholder="exemple@untruc.autre" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label for="Pass"> {t('Register.Pass')}: </label>
                        <input id="Pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>
                    <p> {t('Register.Sub')} <Link to='/auth/login'>{t('Register.Link')}</Link></p>
                    <button className="btn form-register-btn" type="submit"> {t('Register.Button')}</button>
                    <p className="auth-res">{res.message}</p>
                </form>
            </div>
        </div>
    );
}