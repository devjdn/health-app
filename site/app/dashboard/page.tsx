import { Instrument_Serif } from "next/font/google";
const instrument = Instrument_Serif({weight: ["400"], subsets: ["latin"]});

export default function DashboardHome() {
    return(
        <div className="dashboard-home dashboard-page">
            <div className="dashboard-intro">
                <h3>Your dashboard</h3>
            </div>
        </div>
    );
}