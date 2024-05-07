// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';

// import LoginPage from './pages/LoginPage';
// import CardPage from './pages/CardPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/cards" element={<CardPage />} />
//       </Routes>
//     </BrowserRouter>
//       );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import NewLoginPage from './pages/NewLoginPage';
import MapPage from './pages/MapPage';
import Register from './components/Register'; // Import the Register component
import VerificationPage from './pages/VerificationPage';
import ForumPage from './pages/ForumPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLoginPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/register" element={<Register />} /> {/* Add this line for Register page */}
        <Route path="/verify" element={<VerificationPage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
