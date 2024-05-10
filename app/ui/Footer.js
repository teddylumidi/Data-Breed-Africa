import styles from "../page.module.css"

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <footer> 
            <div className={`${[styles.grid]} mx-auto py-5 text-center`}>
                <section className="mx-2 my-auto">
                    <Image 
                        unoptimized
                        src="/imgs/logo.png"
                        alt="DataBreed Logo"
                        width={200}
                        height={200}
                    />
                </section>
                <section className="mx-2">
                    <h4 className="display-6 fw-medium fs-2 my-4">Get In Touch</h4>
                    <nav className="nav flex-column">
                        <Link className="nav-link" href={"#"}><i className="bi bi-geo-alt-fill"></i>&nbsp; China Centre, Ngong Rd. Nairobi, Kenya</Link>
                        <Link className="nav-link" href={"#"}><i className="bi bi-telephone-fill"></i>&nbsp; +254792596600</Link>
                        <Link className="nav-link" href="https://wa.me/+254792596600" target="_blank"><i className="bi bi-whatsapp"></i>&nbsp; WhatsApp Us</Link>
                    </nav>
                </section>
                <section className="mx-2">
                    <h4 className="display-6 fw-medium fs-2 my-4">Quick Links</h4>
                    <nav className="nav flex-column">
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/#about">About</Link>
                        <Link className="nav-link" href="/#services">Consultancy</Link>
                        <Link className="nav-link" href="/#academy">DBA Academy</Link>
                    </nav>
                </section>
                <section className="mx-2">
                    <h4 className="display-6 fw-medium fs-2 my-4">Help</h4>
                    <nav className="nav flex-column">
                        <Link className="nav-link" href="/blog">Blog</Link>
                        <Link className="nav-link" href="/FAQ">FAQ</Link>
                        <Link className="nav-link" href="/contacts">Contact us</Link>
                    </nav>
                </section>
            </div>
        </footer>
    );
}