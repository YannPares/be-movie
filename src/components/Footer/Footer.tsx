"use client"

import styles from "./Footer.module.css"
import Link from "next/link"
import  {usePathname}  from "next/navigation"


const Footer = () => {

    const pathname = usePathname();

const navItems = [
    {
        image: <img src="https://s3-symbol-logo.tradingview.com/twitter--600.png" alt="home" width="42px" />,
        href: "https://twitter.com/"
    },
    {
        image: <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="home" width="42px" />,
        href: "https://facebook.com/"
    },
    {
        image: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="home" width="42px" />,
        href: "https://instagram.com/"
    }
]
    return (
        <div>
            <ul className={styles.navbar_container}>
                {navItems.map((link, index) => {
                    return (
                        <li key={index} >
                            <Link href={link.href} 
                            className={ pathname === `${link.href}` ? styles.nav_item_active : styles.nav_item}
                            >
                                {link.image}
                            </Link>
                        </li>
                    )
                })}
            </ul>
         
        </div>
    )
}

export default Footer;