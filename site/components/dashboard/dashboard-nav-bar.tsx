'use client';

import { useEffect, useState } from "react";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";

export default function DashboardNavBar(){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className={`dashboard-nav-bar ${isOpen ? 'open' : 'closed'}`} id="navbar" aria-expanded={isOpen}>
            <button className="nav-bar-opener" onClick={toggleNav}>
                {isOpen ? (
                    <PanelLeftOpen strokeWidth={1.5}/>
                ) : (
                    <PanelLeftClose strokeWidth={1.5}/>
                )}
            </button>
        </div>
    );
}