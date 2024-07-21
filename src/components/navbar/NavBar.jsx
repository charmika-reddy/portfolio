import React from 'react'
import { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
  const [showMenu , setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <h1>Charmika's Portfolio</h1>
      <div className="desktopmenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Projects</Link>
          <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Education</Link>

      </div>
      <button className="destopmenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
         <div className='iconContact'>
            <FontAwesomeIcon icon={faPhone} />
         </div>
         Contact Me
      </button>
      <div className="iconMenu" onClick={()=>setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="navMenu" style={{display : showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="MenuList" onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="MenuList" onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="MenuList" onClick={()=>setShowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className="MenuList" onClick={()=>setShowMenu(false)}>Education</Link>
          <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-100} duration={500} className="MenuList" onClick={()=>setShowMenu(false)}>Contact</Link>

      </div>
      
      
    </nav>
  )
}

export default NavBar
