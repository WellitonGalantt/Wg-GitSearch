import AppContext from '../../context/AppContext';
import { useContext } from 'react';
import './UserBox.css';

import { useNavigate } from 'react-router-dom';

import { FaMapMarkerAlt , FaUser, FaLongArrowAltLeft } from "react-icons/fa";

function UserBox(){

  const navigate = useNavigate()

  const { user, setOpenUser }:any = useContext(AppContext);
  const { avatar_url, login, location, followers, following } = user;

  return(
    <>
    <div className='user-box-todo'>

      <button 
      className='return-search-user-btn'
      onClick={()=>{setOpenUser(false)}}>
        <FaLongArrowAltLeft />
      </button>

      <img src={avatar_url} alt="" />
      <h1><FaUser className='icon' />{login}</h1>
      {location === null && 
      <p className='location-text'><FaMapMarkerAlt /> Sem Localização</p>
      ||
        <p className='location-text'><FaMapMarkerAlt /> {location}</p>
      }

      <div className='box-follow-user'>
      <p>Seguidores: {followers}</p>
      <p>Seguindo: {following}</p>
      </div>
      
      <button 
      className='user-box-btn'
      onClick={()=>{navigate('/projects')}}
      >
        Ver Projetos
      </button>
      
    </div>
    </>
  )
}

export default UserBox;