import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function CreateTicketLink() {
    const { t } = useTranslation();

    return (
        <li className="nav-lien">
            <Link to='/ticket/create'>
                <span className="text nav-text"> {t('Navbar.New')} </span>
            </Link>
        </li>
    );
}