import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();
    return (
        <div className="home">
            <img className="home-logo" src={`${process.env.PUBLIC_URL}/Logo.png`} alt=""></img>
            <h3 className="home-titre"> <b>A</b>uto<b>T</b>ech <b>S</b>upport</h3>
            <h4 className="home-text"> {t('Home.Subtitle')}</h4>
        </div>
    );
}