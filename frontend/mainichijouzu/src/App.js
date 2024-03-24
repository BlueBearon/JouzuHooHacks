import * as React from 'react';
import TopBar from './TopBar';
import HomePage from './HomePage';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Diary from './Diary';



export const darkContext = React.createContext();
export const userContext = React.createContext();


const propelAuthURL = 'https://31455942.propelauthtest.com';


function App() {

  const [user, setUser] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false);
  const [auth, setAuth] = React.useState(false);


  return (
      <div className="App">
        <darkContext.Provider value={{darkMode, setDarkMode}}>
          <userContext.Provider value={{user, setUser, auth, setAuth}}>
            <Router>
              <TopBar setDark = {setDarkMode}/>
              <Routes>
                <Route path="/" element={<HomePage  />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Router>
          </userContext.Provider>
        </darkContext.Provider>
      </div>

  );
}

export default App;
