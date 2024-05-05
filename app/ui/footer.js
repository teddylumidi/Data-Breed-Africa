import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="pt-3">
            <div className="row p-5 text-center">
                <div className="col-3">
                    <Image 
                        src="/imgs/logo.png"
                        width={150}
                        height={150}
                        alt="Company Logo"
                        className="img-fluid"
                    />
                </div>
                <div className="col-3">
                    <h4 className="mb-3">Get In Touch</h4>
                    <nav className="nav flex-column">
                        <Link className="nav-link" href={"#"}><i class="bi bi-geo-alt-fill"></i>&nbsp; China Centre, Ngong Rd. Nairobi, Kenya</Link>
                        <Link className="nav-link" href={"#"}><i class="bi bi-telephone-fill"></i>&nbsp; +254792596600</Link>
                        <Link className="nav-link" href={"#"}><i class="bi bi-whatsapp"></i>&nbsp; WhatsApp Us</Link>
                    </nav>
                </div>
                <div className="col-3">
                    <h4 className="mb-3">Quick Links</h4>
                    <nav className="nav flex-column">
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/about">About</Link>
                        <Link className="nav-link" href="/consultancy">Consultancy</Link>
                        <Link className="nav-link" href="/academy">DBA Academy</Link>
                    </nav>
                </div>
                <div className="col-3">
                    <h4 className="mb-3">Help</h4>
                    <nav className="nav flex-column">
                        <Link className="nav-link" href="/blog">Blog</Link>
                        <Link className="nav-link" href="/FAQ">FAQ</Link>
                        <Link className="nav-link" href="/contacts">Contact us</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}