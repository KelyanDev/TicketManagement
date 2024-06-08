import { Link } from 'react-router-dom';

export default function TicketLink() {
    return(
        <li className="nav-lien">
            <Link to='/ticket'>
                <span className="text nav-text"> Tickets ouverts </span>
            </Link>
        </li>
    );
}