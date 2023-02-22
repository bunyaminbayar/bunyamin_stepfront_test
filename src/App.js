import React, { useState } from 'react';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserMessage from './components/userMessage/UserMessage';
import UsersList from './pages/usersList/UsersList';
import UserDetay from './pages/userDetay/UserDetay';

export const UserLoginGlobal = React.createContext();
export const UserMessageText = React.createContext();

export default function App() {
  const [gUserStatus, setGgUserStatu] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [GToken, setGToken] = useState('');

  return (
    <Router>
      <div>
        <UserLoginGlobal.Provider value={{ gUserStatus, setGgUserStatu }}>
          <TopBar />
        </UserLoginGlobal.Provider>
        <Switch>
          <Route exact path='/' children={
              <>
                <UserLoginGlobal.Provider
                  value={{ gUserStatus, userMessage, GToken }}
                >
                  <Home />
                </UserLoginGlobal.Provider>
                <UserMessageText.Provider value={{ setUserMessage, GToken }}>
                  <UserMessage />
                </UserMessageText.Provider>
              </>
            }
          />
          <Route exact path='/usersList' children={
              <>
                <UserMessageText.Provider value={{ setUserMessage, GToken }}>
                  <UsersList />
                </UserMessageText.Provider>
              </>
            }
          />
          <Route exact path='/userDetay/:id' children={
              <>
                <UserMessageText.Provider value={{ setUserMessage, GToken }}>
                  <UserDetay />
                </UserMessageText.Provider>
              </>
            }
          />
          <Route path='/login' children={
              <UserLoginGlobal.Provider value={{ setGgUserStatu, setGToken }}>
                <Login />
              </UserLoginGlobal.Provider>
            }
          />
        </Switch>
      </div>
    </Router>
  );
}
