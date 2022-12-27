import React, { useState } from 'react'
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

function App() {
  // url and data is been set by Landing.js

  // user input data
  const [data, setData] = useState({
    country: '',
    city: ''
  })
  const [url, setUrl] = useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing data={data} setData={setData} setUrl={setUrl} />} />
        <Route path="/dashboard" element={<Dashboard url={url} setUrl={setUrl} country={data.country} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
