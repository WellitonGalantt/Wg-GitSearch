import { useState } from 'react';

import './SearchBox.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import { UserProps} from '../../types/user';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function SearchBox() {

  const url = 'https://api.github.com/users/';

  const { setUser , setOpenUser, setReposUser}:any = useContext(AppContext);
  const[ userSearch, setUserSearch ] = useState<string>('');

  async function getUserGit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    //?pegar o usuario
    const resUser = await fetch(`${url}${userSearch}`);
    const dataUser = await resUser.json();

    //?pegar os repositorios
    const resRepos = await fetch(`${url}${userSearch}/repos`);
    const dataRepos = await resRepos.json();

    const { avatar_url, login, location, followers, following } = await dataUser;
    
    const userReposData:Array<object> = [];
    //?separando apenas as informacoes usadas
    dataRepos.map((e:any):void=>{
      const reposInfo = {
        id:e.id,
        html_url: e.html_url,
        description: e.description,
        stargazers_count: e.stargazers_count
      }

      userReposData.push(reposInfo);
    })

    const userData:UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }

    setUser(userData);
    setReposUser(userReposData);
    setOpenUser(true);
  }

  return (
    <div className="search-box-todo">
      <h1 className='title-search-box'>Pesquise por algum perfil no GitHub</h1>
      <form onSubmit={(e)=>{getUserGit(e)}}  className='form-box-search'> 
        <input onChange={(e)=>{setUserSearch(e.target.value)}} 
        className='input-form-box-search' 
        placeholder='Digite aqui o usuario' 
        value={userSearch}
        type="text" 
        required/>
        <button className='btn-form-box-search'><FaMagnifyingGlass /></button>
      </form>
      
    </div> 
  )
}

export default SearchBox;