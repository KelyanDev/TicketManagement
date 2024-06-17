import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export default function ConnectLink({ logged, logout }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const Name = localStorage.getItem('name');
    const naviguate = useNavigate();
    const { t } = useTranslation();

    function handleDeconnect() {
        logout();
        setShowDropdown(false)
        naviguate('/auth/login')
    }

    function toggleDropdown() {
        setShowDropdown(!showDropdown)
    }

    return (
        <>
            {logged ? (
                <>
                <div className="logged-width"></div>
                <div className="logged-grid">
                    <div className="logged-container">
                        <i className='bx bx-user-circle icon'></i>
                        <p className="logged-name">{Name}</p>
                        <i className={`bx ${showDropdown ? 'bx-chevron-down' : 'bx-chevron-up'} logged-arrow`} onClick={toggleDropdown}></i>
                    </div>
                    {showDropdown && (
                        <div className="logged-list">
                            <button onClick={handleDeconnect}> <i class='bx bx-log-out icon'></i> {t('Connect.Button-Sub')} </button>
                        </div>
                    )}
                </div>
                </>
            ) : (
                <Link className="connect-grid" to='/auth/login'>
                    <span className="text nav-text"> {t('Connect.Button')} </span>
                </Link>
            )}
        </>
    );
}