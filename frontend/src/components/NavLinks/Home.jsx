import { Link } from 'react-router-dom';

export default function HomeLink() {
    return (
        <li className="nav-lien">
            <Link to="/">
                <span className="text nav-text"> Accueil </span>
            </Link>
        </li>
    );
}