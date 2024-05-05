import Link from "next/link";

export default function NavBar() {
    return(
    <header>
        <nav className="navbar navbar-expand-lg shadow-lg">
            <div className="container-fluid">
                <Link id="logo" href="/" className="navbar-brand">DataBreed Africa</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto me-0">
                        <li className="nav-item"><Link href="/" className="nav-link mx-2">Home</Link></li>
                        <li className="nav-item"><Link href="/#about" className="nav-link mx-2">About</Link></li>
                        <li className="nav-item dropdown">
                            <Link href={"#"} className="nav-link mx-2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/#services" className="dropdown-item">Consultancy</Link></li>
                                <li><Link href="/#academy" className="dropdown-item">DBA Academy</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link href="/contacts" className="nav-link mx-2">Contact</Link></li>
                        <li className="nav-item"><Link href="/FAQ" className="nav-link mx-2">FAQs</Link></li>
                        <li className="nav-item"><Link href="/blog" className="nav-link mx-2">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}