import React from "react";
import Sidebar from "../ui/containers/global-sidebar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return(
        <main className="dashboard">
        <Sidebar/>
        {children}
        </main>
    );
}