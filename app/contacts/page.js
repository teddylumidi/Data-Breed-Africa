import Link from "next/link";
import Image from "next/image";

export default function Contacts() {
    return(
        <>
        <div className="row p-5">
            <h2 className="display-4 text-center fw-medium mb-3">Talk To Us</h2>
            <div className="contacts col-md-6 p-3">
                <p className="lead fs-5">Feel free to get in touch with us for any inquiries or to discuss your data needs. Our team is here to assist you.</p>
                <nav className="nav flex-column  align-content-center">
                    <Link className="nav-link" href={"#"}><i className="bi bi-geo-alt-fill"></i>&nbsp; China Centre, Ngong Rd. Nairobi, Kenya</Link>
                    <Link className="nav-link" href={"#"}><i className="bi bi-telephone-fill"></i>&nbsp; +254792596600</Link>
                    <Link className="nav-link" href={"#"}><i className="bi bi-whatsapp"></i>&nbsp; WhatsApp Us</Link>
                </nav>
            </div>
            <div className="col-md-6 shadow p-3">
                <h3 className="fw-normal display-6">Send us a message</h3>
                <form>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="name">Your name</label>
                        <input type="text" id="name" className="form-control" />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="email">Your email address</label>
                        <input type="email" id="email" className="form-control" />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" for="message">Message</label>
                        <textarea className="form-control" id="message" rows="4"></textarea>
                    </div>
                    <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Send</button>
                </form>
            </div>
            <section id="social">
                <div className="text-center py-5">
                    <h2 className="display-5 fw-medium lh-1 my-3 pb-3">Find us on social media</h2>
                    <div className="social-icons">
                        <Link className="mx-2" href="https://web.facebook.com/profile.php?id=100067535365032" target="_blank"><Image src="/imgs/social/facebook-icon.png" alt="Facebook Icon" width={70} height={70} /></Link>
                        <Link className="mx-2" href="https://twitter.com/DataBreedAfrica" target="_blank"><Image src="/imgs/social/twitter-icon.png" alt="Twitter Icon" width={70} height={70} /></Link>
                        <Link className="mx-2" href="https://wa.me/+254792596600" target="_blank"><Image src="/imgs/social/whatsapp-icon.png" alt="WhatsApp Icon" width={70} height={70} /></Link>
                        <Link className="mx-2" href="https://www.linkedin.com/in/data-breed-africa-900694305/" target="_blank"><Image src="/imgs/social/linkedin-icon.png" alt="LinkedIn Icon" width={70} height={70} /></Link>
                    </div>
                </div>
           </section>
        </div>
        </>
    );
}