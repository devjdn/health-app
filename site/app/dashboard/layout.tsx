import DashboardNavBar from "@/components/dashboard/dashboard-nav-bar";
import React from "react";

export default function DashboardLayout({children} : {children: React.ReactNode}) {
    return(
        <main className="dashboard">
            <DashboardNavBar/>
            {children}
        </main>
    );
}