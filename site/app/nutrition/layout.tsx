import React from "react";
import NutritionSidebar from "../ui/nutrition/nutrition-sidebar";

export default function NutritionLayout({children}: {children: React.ReactNode}) {
    return(
        <div className="nutrition">
        <NutritionSidebar/>
        {children}
        </div>
    );
}