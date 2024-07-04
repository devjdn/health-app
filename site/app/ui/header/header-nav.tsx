'use client';

import { EqualIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function HeaderNav() {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleNavMenu = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        if(openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    })

    const links = [
        {name: "Nutrition", href: "/nutrition"},
        {name: "Exercise", href: "/exercise"},
        {name: "AI", href: "/ai"},
        {name: "Glossary", href: "/glossary"},
        {name: "About", href: "/about"},
    ]

    return(
        <nav className="header-nav">
            <ul className="header-nav-list">
                {links.map((link) => {
                    return(
                        <li key={link.name}>
                            <Link key={link.name} href={link.href}>
                                <p>{link.name}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <button className="toggle-header-nav" onClick={toggleNavMenu}>
                <EqualIcon/>
            </button>
            <div className="mobile-nav-menu" aria-hidden={!openMenu}>
                <ul className="mobile-nav-list">
                    {links.map((link) => {
                        return(
                            <li key={link.name}>
                                <Link key={link.name} href={link.href}>
                                    <h3>{link.name}</h3>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}