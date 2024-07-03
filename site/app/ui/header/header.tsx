import HeaderNav from "./header-nav";

export default function Header() {
    return(
        <header>
            <div className="logo">
                <a href="/">
                    <h3>Zen</h3>
                </a>
            </div>

            <HeaderNav/>
        </header>
    );
}