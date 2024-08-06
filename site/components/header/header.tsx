import { Instrument_Serif } from "next/font/google";

const instrument = Instrument_Serif({weight: ["400"], subsets: ["latin"]});

export default function Header() {
    return(
        <header>
            <div className="logo">
                <a href="/">
                    <h3 className={instrument.className}>Zen</h3>
                </a>
            </div>

        </header>
    );
}