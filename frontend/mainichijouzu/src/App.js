import * as React from 'react';
import TopBar from './TopBar';
import HomePage from './HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Diary from './Diary';


function App() {

  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [auth, setAuth] = React.useState(false);
  const [error, setError] = React.useState(null);


  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </Router>
      


    </div>
  );
}

export default App;
