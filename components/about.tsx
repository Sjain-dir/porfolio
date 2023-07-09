import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
    
    <div className={styles.aboutdiv} id="about">
    <div>
      <div className={styles.abouttext}>
        Hi I am Saksham Jain 😎!<br/>
        I am a Rust developer 🦀.<br/>
        loves Linux 🐧!<br/>
        And very enthusiast about Opensource projects 🙇‍♂️.<br/>
      </div>
    </div>
    <div>
      <img className={styles.image} src="profile.jpg" alt="" />
    </div>
  </div>
  )
}

export default About