import { useState } from "react";
import { fetchServiceLog } from "../api/api";


export default function Logs() {
    const [log, setLog] = useState('');
    const [warnings, setWarnings] = useState([]);

    const fetchLogs = async (service) => {
        try {
            const fetchedLogs = await fetchServiceLog(service);
            setLog(fetchedLogs);
            checkDhcpIssue(fetchedLogs);
        } catch (error) {
            console.log(error);
        }
    };

    const handleButtonClick = (serviceName) => {
        fetchLogs(serviceName);
    };

    const checkDhcpIssue = (logs) => {
        const lines = logs.split('\n');
        let count = 0;
        let maxCount = 5;
        const newWarnings = [];

        lines.forEach((line, index) => {
            if (line.includes('DHCPDISCOVER')) {
                count++;
                if (count > maxCount) {
                    newWarnings.push(`Il y a un problème à la ligne ${index + 1}: Trop de requêtes DHCPDISCOVER`);
                }
            } else {
                count = 0;
            }
        });

        setWarnings(newWarnings);
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
            <div className="log-error-container">
                {warnings.map((warning, index) => (
                    <p key={index} className="log-error-line">{warning}</p>
                ))}
            </div>
        </div>
    );
}