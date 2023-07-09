import React from 'react'
import Certification from './certification'
import styles from './certifications.module.css'

const Certifications = () => {
  return (  
    <div className={styles.MainDiv} id="certifications">
        <Certification icon='icons/SecurityPlus Logo Certified CE.png' certName='CompTIA Security+ 601' certCode='sadfsafgs' expireDate='jun 2023 - jun 2026'/>
    </div>
  )
}

export default Certifications