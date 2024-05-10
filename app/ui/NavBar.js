import Link from "next/link";

export default function NavBar() {
    return (
        <header>
            <nav className="navbar sticky-top navbar-expand-lg shadow-lg">
                <div className="container-fluid">
                    <Link href="/" id="logo" className="navbar-brand">DataBreed Africa</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center">
                        <Link href="/" className="nav-link mx-2">Home</Link>
                        <Link href="/#about" className="nav-link mx-2">About</Link>
                        <span className="nav-item dropdown">
                        <Link href={"#"} className="nav-link mx-2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                            <span className="dropdown-menu">
                            <Link href="/#services" className="dropdown-item">Consultancy</Link>
                            <Link href="/#academy" className="dropdown-item">DBA Academy</Link>
                            </span>
                        </span>
                        <Link href="/blog" className="nav-link mx-2">Blog</Link>
                        <Link href="/FAQ" className="nav-link mx-2">FAQs</Link>
                        <Link href="/contacts" className="nav-link mx-2">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}