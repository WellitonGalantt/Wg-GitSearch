import './App.css'
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Provider from './context/Provider';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/home')
  },[])

  return (
    <>
      <Provider>
        
        <Header />
        <Outlet/>

      </Provider>
    </>
  )
}

export default App
