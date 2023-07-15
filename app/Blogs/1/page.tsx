// import HelloWorld from './HelloWorld.mdx'
 
// // export default function Page() {
// //   return <HelloWorld />
// // }

import React from 'react'
import HelloWorld from './HelloWorld.mdx'
import BlogBox from '@/components/blogs/blogBox'

function page() {
  return (
    <BlogBox>
      <HelloWorld/>
    </BlogBox>   
  )
}

export default page
