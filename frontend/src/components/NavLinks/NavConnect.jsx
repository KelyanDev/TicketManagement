import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ConnectLink({ logged, logout }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const Name = localStorage.getItem('name');
    const naviguate = useNavigate();

    function handleDeconnect() {
        logout();
        setShowDropdown(false)
        naviguate('/auth/login')
    }

    function toggleDropdown() {
        setShowDropdown(!showDropdown)
    }

    return (
        <div className="connect">
            {logged ? (
                <div className="logged-grid">
                    <div className="logged-container">
                        <i class='bx bx-user-circle icon'></i>
                        <p className="logged-name">{Name}</p>
                        <i class={`bx ${showDropdown ? 'bx-chevron-down' : 'bx-chevron-up'} logged-arrow`} onClick={toggleDropdown}></i>
                    </div>
                    {showDropdown && (
                        <div className="logged-list">
                            <button onClick={handleDeconnect}> <i class='bx bx-log-out icon'></i> Logout </button>
                        </div>
                    )}
                </div>
            ) : (
                <Link className="connect-grid" to='/auth/login'>
                    <span className="text nav-text"> Connection </span>
                </Link>
            )}
        </div>
    );
}