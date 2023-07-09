import React from 'react'
import styles from './page.module.css'
import About from '@/components/about'
import Certifications from '@/components/certifications/certifications'

function page() {
  return (
    <div className={styles.container}>
      <About/>
      <Certifications/>
      <div>projects</div>
      <div>contact</div>
    </div>
  )
}

export default page