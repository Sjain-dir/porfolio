import React from 'react'
import styles from './blogBox.module.css'

interface props {
    children: React.ReactNode;
}

function blogBox({children,}: props) {
  return (
    <div className={styles.mdxBody}>
        <div className={styles.mdx}>
            {children}
        </div>
    </div>
  )
}

export default blogBox