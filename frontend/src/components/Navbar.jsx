import HomeLink from "./NavLinks/Home";
import TicketLink from "./NavLinks/Tickets";
import ConnectLink from "./NavLinks/NavConnect";
import MyTickets from "./NavLinks/MyTickets";
import CreateTicketLink from "./NavLinks/CreateTicket";

export default function Naviguation({ logged, logout }) {
    return (
        <nav className="nav">
            <ul>
                <img src={`${process.env.PUBLIC_URL}/AutoTechLogo.png`} className="nav-logo" alt=""></img>
                <HomeLink />
                <TicketLink />
                {logged ? (
                    <>
                        <MyTickets />
                        <CreateTicketLink />
                    </>
                ) : ('')}
            </ul>
            <ConnectLink logged={logged} logout={logout}/>
        </nav>
    );
}