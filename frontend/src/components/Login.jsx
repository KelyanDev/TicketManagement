import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as loginApi } from "../api/api";

export default function Login({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const naviguate = useNavigate();

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
            console.log(error)
        }
    }

    return (
        <div className="auth-grid">
            <div className="auth-login-container">
                <h2 className="auth-title">Login</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="Mail"> Adresse Mail: </label>
                        <input id="Mail" type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label for="Pass"> Mot de passe: </label>
                        <input id="Pass" type="password" onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>
                    <p>Pas encore inscrit ? <Link to='/auth/register'>Inscription</Link></p>
                    <button className="btn form-login-btn" type="submit"> Login</button>
                </form>
            </div>
        </div>
    );
}