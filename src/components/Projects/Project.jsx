import React from 'react'
import './Project.css'

const Project = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>Projects</h2>
            <span className='worksDesc'>what i have done</span>
            <div className="worksImgs">
                <iframe className='worksImg' width="300" height="200" src="https://www.youtube.com/embed/DACDvGHCcpY"></iframe>
                <iframe className='worksImg' width="300" height="200" src="https://www.youtube.com/embed/UbR-Y4VbJls"></iframe>
                <iframe className='worksImg' width="300" height="200" src="https://www.youtube.com/embed/89RBZ9oRc20"></iframe>
                <iframe className='worksImg' width="300" height="200" src="https://www.youtube.com/embed/urEkCmgCF1I"></iframe>
                
            </div>
        </section>
    );
}

export default Project
