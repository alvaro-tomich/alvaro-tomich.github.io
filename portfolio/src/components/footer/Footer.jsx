import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/alvaro-tomich/' target='_blank' rel='noreferrer'><BsLinkedin /></a> 
        <a href='https://github.com/alvaro-tomich' target='_blank' rel='noreferrer'><BsGithub /></a> 
      </div>
    </footer>
  )
}

export default Footer