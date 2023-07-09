import React from 'react'
import styles from './certification.module.css'

interface props {
    icon : string, 
    certName: string, 
    certCode : string,
    expireDate: string
}

function Certification({icon, certName, certCode, expireDate} : props) {
  return (
    <div className={styles.MainDiv}>
        <div>
            <img src={icon} alt={certName} />
        </div>
        <div className={styles.certDetails}>
            <div>
              <h1>
              {certName}
              </h1>
              </div>
            <div>{certCode}</div>
            <div>{expireDate}</div>
        </div>
    </div>
  )
}

export default Certification