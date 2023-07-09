import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

function navbar() {
  return (
    <div className={styles.NavbarMainDiv}>
        <div>
        <Link href = "/" > saksham jain</Link>
           
        </div>
        <div>
            <Link href = "/#about" >About</Link>
            <Link href = "/#certifications" >certifications</Link>
            <Link href = "" >Projects</Link>
            <Link href = "/Blogs" >blogs</Link>
            <Link href = "" >Contact</Link>
        </div>
        <div >
            contact icons
        </div>
    </div>
  )
}

export default navbar