"use client"

import styles from "./header.module.css"
import Link from "next/link"
import  {usePathname}  from "next/navigation"


const Header = () => {

    const pathname = usePathname();

const navItems = [
    {
        label: "Movies",
        href: "/homepage"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Profile",
        href: "/profilePage"
    },
    {
        label: "Logout",
        href: "/api/auth/logout"
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
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
         
        </div>
    )
}

export default Header;

