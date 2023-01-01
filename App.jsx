
import './App.css';
import React from 'react';
import Sidebar from './Component/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './container/Home/Home';
import LoginUser from './container/Home/LoginUser';


function App() {
  return (
    <>
      <div style={{ background: 'gray' }}>
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<LoginUser/>} />
              <Route path="/home-page" element={<Home />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;


// function App() {
//   return (<>
//     <div className='App'>
//       <Home />
//     </div>
//   </>);
// }
// export default App;
