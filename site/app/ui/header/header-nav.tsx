'use client';

import Link from "next/link";
import { useState } from "react";

export default function HeaderNav() {

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
                <button>

                </button>
            </ul>
        </nav>
    );
}