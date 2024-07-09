'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";

export default function Sidebar() {

    const pathname = usePathname();

    const pages = [
      {
        pageName: "Nutrition",
        links: [
          { name: "Home", href: "/nutrition" },
          { name: "Nutritional analysis", href: "/nutrition/analysis" },
          { name: "Recipe search", href: "/nutrition/recipes" },
          { name: "Meal planner", href: "/nutrition/meal-planner" },
        ],
      },
      
      {
        pageName: "Exercise",
        links: [
          { name: "Home", href: "/exercise" },
          { name: "Fitness plans", href: "/exercise/link1" },
          { name: "Effect analysis", href: "/exercise/link2" },
          { name: "Fitness resources", href: "/exercise/link3" },
        ],
      },
      {
        pageName: "Interact",
        links: [
          {name: "AI with Gemini", href: "/ai"},
          {name: "Tracking and Progress", href: "tracking-and-progress"},
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
      

    return(
        <div className="sidebar">
            <div className="sidebar-intro">
                <a href="/"><h3>Zen</h3></a>
            </div>
            <nav className="sidebar-links">
              {pages.map((page, index) => (
                <div className="link-group" key={index}>
                  <p className="link-group-title">{page.pageName}</p>
                  <ul className="link-group-list">
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