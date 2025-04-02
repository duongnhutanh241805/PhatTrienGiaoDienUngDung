import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/Header'
import Nav from './component/nav/nav'
function App() {


  return (
    <>
      <div className='main_app'>
        <div className='head_main'>
          <Header></Header>
        </div>
        <div className='content_main'>
          <div className='tren_main'>
            <Nav></Nav>
          </div>
          <div className='duoi_main'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
