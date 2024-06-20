import { Link } from "react-router-dom";

export default function LogsBtn() {
    return (
        <li className="nav-lien">
            <Link to='/logs'>
                <span className="text nav-text"> Logs </span>
            </Link>
        </li>
    );
}