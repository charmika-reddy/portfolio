
import React from 'react';
import './introduction.css'
import bg from '../../assets/photo.png.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock} from '@fortawesome/free-solid-svg-icons'



import { Link } from 'react-scroll'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Charmika</span> <br /></span>
                <p className="introPara">I am Student from Vishnu Institute Of Technology Bhimavaram.</p>
                <Link to="contact" smooth={true} duration={500}>
                    <button className="btn">
                        <div className="iconHire">
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        Hire me
                    </button>
                </Link>
            </div>
            
                
            
            
            
            <img src={bg} alt=""  className='bg'/>
        </section>
    )
}

export default Intro

