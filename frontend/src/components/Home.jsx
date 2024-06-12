export default function Home() {
    return (
        <div className="home">
            <img className="home-logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt=""></img>
            <h3 className="home-titre"> <b>A</b>uto<b>T</b>ech <b>S</b>upport</h3>
            <h4 className="home-text"> Notre application de gestion de tickets de support</h4>
        </div>
    );
}