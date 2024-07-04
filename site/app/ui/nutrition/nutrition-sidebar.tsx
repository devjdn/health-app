import Link from "next/link";

export default function NutritionSidebar() {

    const nutritionLinks = [
        {name: "Home", href: "/nutrition"},
        {name: "Nutritional Analysis", href: "/nutrition/analysis"},
        {name: "Recipe Search", href: "/nutrition/recipe-search"},
        {name: "Food Database", href: "/nutrition/food-database"},
        {name: "Diet Tracker", href: "/nutrition/tracking"},
    ]

    return(
        <div className="nutrition-sidebar">
            <div className="service-name">
                <h3>Nutrition</h3>
            </div>
            <nav>
                <ul>
                    {nutritionLinks.map((nutritionLink) => {
                        return(
                            <li key={nutritionLink.name}>
                                <Link key={nutritionLink.name} href={nutritionLink.href}>
                                    <p>{nutritionLink.name}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}