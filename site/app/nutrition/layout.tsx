import React from "react";
import NutritionSidebar from "../ui/nutrition/global-sidebar";

export default function NutritionLayout({children}: {children: React.ReactNode}) {
    return(
        <main className="nutrition">
        <NutritionSidebar/>
        {children}
        </main>
    );
}