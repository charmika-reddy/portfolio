


import React from 'react'
import './skills.css';
import C from '../../assets/c.png'
import Flutter from '../../assets/flutter.png'
import React_logo from '../../assets/react.png'
import Dart from '../../assets/dart.png';
import JS from '../../assets/js.png'
import FireBase from'../../assets/firebase.png';
import Html from '../../assets/html.png';
import Python from '../../assets/python.png';
import NodeJs from '../../assets/nodejs.png';

const Skills=() => {
    return (
        <section id="skills">
                <span className='skillTitle'>What I do</span>
                <span className='skillDesc'>I am a skilled and passinate web developer </span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={C} alt="C-language" className="skillBarImg" />
                    
                    </div>
                   
                    <div className="skillBar">
                        <img src={Flutter} alt="Flutter " className="skillBarImg" />
                        
                    </div>
                    
                    <div className="skillBar">
                        <img src={Dart} alt="Dart " className="skillBarImg" />
                        
                    </div>
                    
                    
                    <div className="skillBar">
                        <img src={React_logo } alt="React " className="skillBarImg" />
                       
                    </div>
                    <div className="skillBar">
                        <img src={JS } alt="JS " className="skillBarImg" />
                       
                    </div>
                    <div className="skillBar">
                        <img src={FireBase } alt="FireBase " className="skillBarImg" />
                       
                    </div>
                    <div className="skillBar">
                        <img src={Python } alt="Python " className="skillBarImg" />
                       
                    </div>
                    <div className="skillBar">
                        <img src={NodeJs } alt="NodeJs " className="skillBarImg" />
                       
                    </div>
                    <div className="skillBar">
                        <img src={Html} alt="Html" className="skillBarImg" />
                       
                    </div>
                </div>
        </section>
    )
}

export default Skills;