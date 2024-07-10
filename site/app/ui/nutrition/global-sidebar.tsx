'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface LinkType {
  name: string;
  href: string;
}

interface PageType {
  pageName: string;
  links: LinkType[];
}

export default function Sidebar() {

    const pathname = usePathname();

    const pages: PageType[] = [
      {
        pageName: "Nutrition",
        links: [
          // { name: "Home", href: "/nutrition" },
          { name: "Nutritional analysis", href: "/nutrition/analysis" },
          { name: "Recipe search", href: "/nutrition/recipes" },
          { name: "Meal planner", href: "/nutrition/meal-planner" },
        ],
      },
      
      {
        pageName: "Exercise",
        links: [
          // { name: "Home", href: "/exercise" },
          { name: "Fitness plans", href: "/exercise/link1" },
          { name: "Effect analysis", href: "/exercise/link2" },
          { name: "Fitness resources", href: "/exercise/link3" },
        ],
      },
      {
        pageName: "Interact",
        links: [
          {name: "AI with Gemini", href: "/ai"},
          {name: "Tracking and Progress", href: "/tracking-and-progress"},
        ]
      },
      {
        pageName: "Other links",
        links: [
          { name: "Glossary", href: "/glossary" },
          { name: "About Zen", href: "/about" },
          { name: "APIs we use", href: "/api" },
          { name: "Pricing", href: "/pricing" },
        ],
      },
    ];

    // Create a state for each nav group
    const [openSideNavGroups, setOpenSideNavGroups] = useState<boolean[]>(
      pages.map(() => false)
    );

    // Toggle specific nav group
    const toggleNavGroup = (index: number) => {
      setOpenSideNavGroups(openSideNavGroups.map((isOpen, i) => 
        i === index ? !isOpen : isOpen
      ));
    };

    return (
      <div className="sidebar">
        <div className="sidebar-intro">
          <a href="/"><h3>Zen</h3></a>
        </div>
        <nav className="sidebar-links">
          {pages.map((page, index) => (
            <div className="link-group" key={index}>
              <button
                className="nav-group-opener"
                onClick={() => toggleNavGroup(index)}
                aria-expanded={openSideNavGroups[index]}
              >
                <p className="link-group-title">{page.pageName}</p>
                <ChevronDown size={20} strokeWidth="1" />
              </button>
              <ul
                className="link-group-list"
                aria-hidden={!openSideNavGroups[index]}
              >
                {page.links.map((link, linkIndex) => (
                  <Link href={link.href} key={linkIndex}>
                    <li className="link-group-item" key={linkIndex}>
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="sidebar-quick-settings">

        </div>
      </div>
    );
}
