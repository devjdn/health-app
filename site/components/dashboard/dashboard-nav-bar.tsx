'use client';

import { useEffect, useState } from "react";
import { PanelLeftOpen, PanelLeftClose, Wheat, Dumbbell, BrainCircuit, HandHeart } from "lucide-react";
import Link from "next/link";

export default function DashboardNavBar(){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    const navLinks = [
        { name: 'Nutrition', href: '/dashboard/nutrition', icon: <Wheat strokeWidth={1.5}/> },
        { name: 'Exercise', href: '/dashboard/exercise', icon: <Dumbbell strokeWidth={1.5}/> },
        { name: 'AI', href: '/dashboard/ai-with-gemini', icon: <BrainCircuit strokeWidth={1.5}/> },
        { name: 'Wellbeing', href: '/dashboard/wellbeing', icon: <HandHeart strokeWidth={1.5}/> },
    ]

    return(
        <div className={`dashboard-nav-bar ${isOpen ? 'open' : 'closed'}`} id="navbar" aria-expanded={isOpen}>
            <button className="nav-bar-opener" onClick={toggleNav}>
                {isOpen ? (
                    <>
                    <PanelLeftClose strokeWidth={1.5}/>
                    <p>Close</p>
                    </>
                ) : (
                    <>
                    <PanelLeftOpen strokeWidth={1.5}/>
                    </>
                )}
            </button>
            <nav className="dashboard-nav">
                <ul className="nav-list">
                    {navLinks.map((navLink, linkIndex) => (
                        <li className="nav-list-item" key={linkIndex}>
                            <Link href={navLink.href}>
                                <div className="link-content">
                                    {navLink.icon}
                                    <p>{navLink.name}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}