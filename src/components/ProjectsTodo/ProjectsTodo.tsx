import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { ReposUserInter } from "../../types/user";
import ProjectBox from "./ProjectBox/ProjectBox";

import "./ProjectsTodo.css"
import { MdMoodBad } from "react-icons/md";

function ProjectsTodo(){

  const { reposUser }:any = useContext(AppContext);

  console.log(reposUser)

  return(
    <>
    <div className="projects-box-todo">
      {reposUser === null || reposUser.lenght === 0 ?  
      <h1 className="text-nothing-here-projects"><MdMoodBad />Nada para ver aqui</h1>
      :
      reposUser.map((e:ReposUserInter)=><ProjectBox key={e.id} p={e}/>)}
    </div>
      
    </>
  )
}

export default ProjectsTodo;