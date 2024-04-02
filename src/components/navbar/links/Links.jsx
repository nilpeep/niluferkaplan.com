import React from 'react'
import Link from 'next/link'

const Links = () => {
    const links = [
        {
            name: "Home",
            link: "/"
        },
        {   
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "Portfolio",
            link: "/portfolio"
        }
    ]
  return (
    <div>{links.map((link)=>(
        <Link href={link.link}>{link.name}</Link>
    ))}</div>
  )
}

export default Links