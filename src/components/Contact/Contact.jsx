
import React , {useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_czayt2k', 'template_g0obvjp', form.current, {
            publicKey: 'z08eoY2KVFffzsDmU',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Email sent");
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className='Title'>
                    Contact Me
                </h1>
                <span className='contactDesc'>
                    Please fill out the form below to discuss any work opportunity.
                </span>
                <form className="contactForm"   ref={form}  >
                    <input type="text" className="name" placeholder='YourName' name='your_name'/>
                    <input type="text" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea name="message"  className="msg" rows='5' placeholder='Your Message'></textarea>
                    <button type=' submit' className="submitBtn" onSubmit={sendEmail}>Submit</button>
                </form>
                <div className="icons">
                    
                    <div className="iconWhat">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    
                    <div className="iconTwitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className='iconLinkedIn'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div className="iconFace">
                    <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className='iconInst'>
                    <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="iconGit">
                    <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
