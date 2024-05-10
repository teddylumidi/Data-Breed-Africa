export default function Contacts() {
    return(
        <>
        <section id="contacts">
            <div className="container row shadow w-75 m-5 mx-auto">
                <div className="email col-md-7 p-4">
                    <h1 className="display-5 fw-bold fs-2 mb-4">Get In Touch</h1>
                    <p className="lead fs-6">We are always on the lookout to work with new clients. Please get in touch 
                        in one of the following ways.
                    </p>
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
                        <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Send message</button>
                    </form>
                </div>
                <div className="info col-md-5 p-4">
                    <h2 className="display-5 fw-bold fs-2 mb-4">Contact information</h2>
                    <div>
                        <p className="fs-5"><i className="bi bi-geo-alt-fill fs-4"></i>&nbsp;<span className="fw-bold">Address</span></p>
                        <p className="ms-4">China Centre, Ngong Rd. Nairobi, Kenya</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <p className="fs-5"><i className="bi bi-telephone-forward-fill fs-4"></i> &nbsp;<span className="fw-bold">Phone</span></p>
                            <p className="ms-4">+254792596600</p>
                        </div>
                        <div className="col-6">
                            <p className="fs-5"><i className="bi bi-envelope-fill fs-4"></i>&nbsp;<span className="fw-bold">Email</span></p>
                            <p className="ms-4">info@databreed.africa</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <p className="fs-5"><i className="bi bi-alarm-fill fs-4"></i>&nbsp;<span className="fw-bold">Opening Hours</span></p>
                            <p className="ms-4"><em>Mon - Fri</em> &nbsp;&nbsp;9am - 5pm </p>
                            <p className="ms-4"><em>Sat - Sun</em> &nbsp;&nbsp;9am - 2pm </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}