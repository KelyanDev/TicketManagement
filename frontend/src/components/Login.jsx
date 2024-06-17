import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as loginApi } from "../api/api";
import { useTranslation } from "react-i18next";

export default function Login({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const naviguate = useNavigate();
    const { t } = useTranslation();

    async function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        };

        try {
            const response = await loginApi(userData);
            login(response.token, response.userId, response.name);
            setEmail('');
            setPassword('');
            naviguate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="auth-grid">
            <div className="auth-login-container">
                <h2 className="auth-title">{t('Login.Login')}</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="Mail"> {t('Login.Mail')}: </label>
                        <input id="Mail" type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label for="Pass"> {t('Login.Pass')}: </label>
                        <input id="Pass" type="password" onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>
                    <p>{t('Login.Sub')} <Link to='/auth/register'>{t('Login.Link')}</Link></p>
                    <button className="btn form-login-btn" type="submit"> {t('Login.Button')}</button>
                    <p className="error">{error}</p>
                </form>
            </div>
        </div>
    );
}