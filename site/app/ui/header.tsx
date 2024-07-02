import HeaderNav from "./header-nav";

export default function Header() {
    return(
        <header>
            <div className="logo">
                <a href="/">
                    <p>Zen</p>
                </a>
            </div>

            <HeaderNav/>
        </header>
    );
}