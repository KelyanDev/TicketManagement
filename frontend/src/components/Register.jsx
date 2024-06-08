import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../api/api";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [res, setRes] = useState('');

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
                <h2 className="auth-title">Inscription</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="Name"> Nom: </label>
                        <input id="Name" type="text" placeholder="exemple" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label for="Mail"> Adresse Mail: </label>
                        <input id="Mail" type="email" placeholder="exemple@untruc.autre" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label for="Pass"> Mot de passe: </label>
                        <input id="Pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>
                    <p>Déjà inscrit ? <Link to='/auth/login'>Login</Link></p>
                    <button className="btn form-register-btn" type="submit"> S'inscrire</button>
                    <p className="auth-res">{res.message}</p>
                </form>
            </div>
        </div>
    );
}