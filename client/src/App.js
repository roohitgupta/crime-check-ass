import React from 'react'
import './App.css';
import LoginPage from './components/LoginPage';
import NoticePage from './components/NoticePage';
import { Routes, Route } from 'react-router-dom'




const App = () => {
  return (
    <div className='App'>
      <h1>Public Notice Board!!</h1>
      {/* <LoginPage /> */}
      {/* <NoticePage /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/noticepage" element={<NoticePage />} />
      </Routes>
    </div>
  )
}

export default App;