import { FaSquareGithub } from "react-icons/fa6";
import './Header.css'

function Header() {

  return (
    <header>
      <span className="title-wg-git-seach">WG GitSearch <FaSquareGithub className="icon"/></span>
    </header>
  )
}

export default Header