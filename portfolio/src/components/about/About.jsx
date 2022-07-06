import React from 'react'
import './about.css';
//import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
         {/*  <img className='about__me-image' src={ ME } alt='Me'></img> */}
        </div>
        <div className='about__contet'>
          <div className='about__cards'> 
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Looking for first job</small>
            </article>
            <article className='about__card'>
              <BsBook className='about__icon'/>
              <h5>Formation</h5>
              <small>Student at Trybe</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>25+ completed projects</small>
            </article>
          </div>
          <p>
          I'm passionate about Technology and development, I'm looking to improve myself more and more every day to become a FullStack developer. I study web development at Trybe, a school that teaches programming, learning and working.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About