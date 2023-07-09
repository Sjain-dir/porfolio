import React from 'react'
import styles from './footer.module.css'

function footer() {
  console.log(styles)
  return (
    <div className={styles.FooterMainDiv}>
        <div>
            <hr className={styles.FooterHr}/> 
        </div>
        <div className={styles.FooterComponentDiv}>
            <div >good to see you 😊</div>
            <div >Thank you 😁</div>
            <div >contact icons</div>
        </div>
    </div>
  )
}

export default footer