import { Link } from "react-router-dom";

export default function MyTickets() {
    return (
        <li className="nav-lien">
            <Link to='/mytickets'>
                <span className="text nav-text"> Mes Tickets </span>
            </Link>
        </li>
    );
}