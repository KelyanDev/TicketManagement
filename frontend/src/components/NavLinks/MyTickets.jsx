import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function MyTickets() {
    const { t } = useTranslation();

    return (
        <li className="nav-lien">
            <Link to='/mytickets'>
                <span className="text nav-text"> {t('Navbar.Mine')} </span>
            </Link>
        </li>
    );
}