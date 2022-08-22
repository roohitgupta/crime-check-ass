import React from 'react'
import './App.css';
import LoginPage from './components/LoginPage';
import NoticePage from './components/NoticePage';



const App = () => {
  return (
    <div className='App'>
      <h1>Public Notice Board!!</h1>
      {/* <LoginPage /> */}
      <NoticePage />
    </div>
  )
}

export default App;