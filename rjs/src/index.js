import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom" // Routing

/**Elements **/
import Home from './resources/Home'
import Error from './resources/Error'
import AboutUs from './resources/AboutUs'

// Component
export default function App() {

  return (
      <BrowserRouter basename="/"> 
        <Routes>     
          <Route path="*" element={<Error />} />       
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
  );

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
