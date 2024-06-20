import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import { useState } from 'react';

import Naviguation from './components/Navbar';
import Home from './components/Home';
import OpenedTickets from './components/Show';
import OneTicket from './components/ShowOne';
import Login from './components/Login';
import Register from './components/Register';
import CreateTicket from './components/CreateTicket';
import OwnedTickets from './components/OwnedTickets';
import OwnedOneTicket from './components/ShowOwnOne';
import ModifyTicket from './components/ModifyTicket';
import Logs from './components/Logs';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    function handleLogin( token, userId, name) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('name', name);
        setIsLoggedIn(true)
    }

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('name');
        setIsLoggedIn(false);
    }


  return (
    <Router>
      <div className="App">
      <Naviguation logged={isLoggedIn} logout={handleLogout} />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path='/auth/login' Component={(props) => <Login {...props} login={handleLogin} />} />
        <Route path='/auth/register' Component={Register} />
        <Route path='/ticket/create' Component={CreateTicket} />
        <Route path="/ticket" Component={OpenedTickets} />
        <Route path='/ticket/:id' Component={OneTicket} />
        <Route path='/mytickets' Component={OwnedTickets} />
        <Route path='/mytickets/:id' Component={OwnedOneTicket} />
        <Route path='/mytickets/edit/:id' Component={ModifyTicket} />
        <Route path='/logs' Component={Logs} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;