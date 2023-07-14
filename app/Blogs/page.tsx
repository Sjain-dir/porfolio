import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const page = () => {
  return (
    <div className={styles.MainDiv}>
        <div>Blogs</div>
        <div>list of blogs</div>
        <Link href = "/Blogs/1" >blogs</Link>
    </div>
  )
}

export default page