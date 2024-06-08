import { Link } from "react-router-dom";

export default function CreateTicketLink() {
    return (
        <li className="nav-lien">
            <Link to='/ticket/create'>
                <span className="text nav-text"> Créer un Ticket </span>
            </Link>
        </li>
    );
}