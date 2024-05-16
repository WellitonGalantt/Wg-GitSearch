import './Home.css';
import SearchBox from "../components/SearchBox/SearchBox";
import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import UserBox from '../components/UserBox/UserBox';

function Home(){

  const { user, openUser, setOpenUser}:any = useContext(AppContext);


  useEffect(()=>{
    if(user){
      setOpenUser(true);
    }
  },[])

  return(
    <div className='home-box-todo container'>

      {!openUser &&
        <SearchBox />
      }
      

      {openUser &&
        <UserBox />
      }
      
    </div>
  )
}

export default Home;