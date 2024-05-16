
import { ReposUserInter } from "../../../types/user";

import './ProjectBox.css'
import { FaFolder, FaStar } from "react-icons/fa";
import { GiStabbedNote } from "react-icons/gi";


function ProjectBox({p}:any){

  const {id, html_url, description, stargazers_count}:ReposUserInter = p;
  

  return(
    <div key={id} className="project-box">
      <span className="project-box-info">
        <p className="project-box-description"><GiStabbedNote className='desc-icon'/>
          {description === null || description === '' ? <>Sem Descrição</> : <>{description}</>}
        </p>
        <span className="project-box-star">{stargazers_count}<FaStar /> </span>
        </span>
      <p className='desc-link-from-repos'>
        Repositório
        <a href={html_url}><FaFolder className="repos-lik-icon"/></a>
      </p>
    </div>
  )
}

export default ProjectBox;