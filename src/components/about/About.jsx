import React from 'react';
import "./about.css";
import Github from '../../img/github.png'
import Twitter from '../../img/twitter.png'
import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'




const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600" className='a-img' alt="" />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className="a-sub">Hello, I'm Utku. I am 23 years old. I live in Izmir Turkey. <br /> I graduated from Muğla Sitki Kocman University, Information Systems <br /> Engineering. <br /> On the other hand, I am a warm-blooded, fun and secretive person. <br /> It is true that I give a good energy to the people around me!
            </p>
           
            <p className="a-desc">
            I am developing myself as a web developer. I do interface designs. <br /> I am working with React.js. I have good knowledge of HTML5, CSS, JS. <br /> I am looking for a job. <br /> <strong>Welcome to my website.</strong>
            </p>
            <br />
            <h4>My Social Accounts:</h4>
            <br />
            <a className='link' href="https://github.com/utkutuncal35">
              <img src={Github} alt="" />
            </a>
            <a className='link' href="https://twitter.com/utkutuncall">
              <img src={Twitter} alt="" />
            </a>
            <a className='link' href="https://www.instagram.com/utkutuncall/">
              <img src={Instagram} alt="" />
            </a>
            <a className='link' href="https://www.linkedin.com/in/utku-tun%C3%A7al-119b40205/">
              <img src={Linkedin} alt="" />
            </a>
            
        </div>
    </div>
  )
}

export default About