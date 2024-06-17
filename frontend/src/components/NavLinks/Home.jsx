import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function HomeLink() {
    const { t } = useTranslation();

    return (
        <li className="nav-lien">
            <Link to="/">
                <span className="text nav-text"> {t('Navbar.Home')} </span>
            </Link>
        </li>
    );
}