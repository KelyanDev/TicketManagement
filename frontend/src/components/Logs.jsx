import { useState } from "react";
import { fetchServiceLog } from "../api/api";


export default function Logs() {
    const [log, setLog] = useState('');

    const fetchLogs = async (service) => {
        try {
            const fetchedLogs = await fetchServiceLog(service);
            setLog(fetchedLogs);
        } catch (error) {
            console.log(error);
        }
    };

    const handleButtonClick = (serviceName) => {
        fetchLogs(serviceName);
    } 
    
    return (
        <div className="logs">
            <div className="btn-container">
                <button className="btn logs-btn" onClick={() => handleButtonClick('squid')}> Proxy</button>
                <button className="btn logs-btn" onClick={() => handleButtonClick('dhcp')}> DHCP</button>
                <button className="btn logs-btn" onClick={() => handleButtonClick('apache')}> Apache</button>
            </div>
            <div className="logs-container">
                {log.split('\n').map((line, index) => (
                    <p key={index} className="log-line">{line}</p>
                ))}
            </div>
        </div>
    );
}