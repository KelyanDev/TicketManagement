import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function TicketLink() {
    const { t } = useTranslation();

    return(
        <li className="nav-lien">
            <Link to='/ticket'>
                <span className="text nav-text"> {t('Navbar.Opened')} </span>
            </Link>
        </li>
    );
}