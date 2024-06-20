import HomeLink from "./NavLinks/Home";
import TicketLink from "./NavLinks/Tickets";
import ConnectLink from "./NavLinks/NavConnect";
import MyTickets from "./NavLinks/MyTickets";
import Switch from "./NavLinks/LangSwitch";
import CreateTicketLink from "./NavLinks/CreateTicket";
import LogsBtn from "./NavLinks/LogsButton";
import { useTranslation } from "react-i18next";

export default function Naviguation({ logged, logout }) {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    };

    return (
        <nav className="nav">
            <ul>
                <img src={`${process.env.PUBLIC_URL}/AutoTechLogo.png`} className="nav-logo" alt=""></img>
                <HomeLink />
                <TicketLink />
                <LogsBtn />
                {logged ? (
                    <>
                        <MyTickets />
                        <CreateTicketLink />
                        
                    </>
                ) : ('')}
            </ul>
            <div className="top-right">
                <div className="connect">
                    <Switch changeLang={changeLanguage}/>
                    <ConnectLink logged={logged} logout={logout}/>
                </div>
            </div>
        </nav>
    );
}