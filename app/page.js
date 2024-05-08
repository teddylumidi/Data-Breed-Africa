import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <section>
                <div className="hero row align-items-center py-5 px-3">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <Image
                            src="/imgs/logo.png"
                            width={450}
                            height={450}
                            className="d-block mx-lg-auto img-fluid"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-4 text-center fw-medium mb-3"> Who we are</h1>
                        <p>
                            Data Breed Africa is a Pan African company that offers Data Analytics
                            solutions and Training across the continent of Africa. We pride ourselves
                            in our experience and expertise in Data and Artificial Intelligence.
                            We offer a holistic approach to helping businesses and individuals
                            solve their day to day problems in our areas of expertise and this continues
                            to evolve so as to address current challenges in various industry verticals.
                            At Data Breed Africa, we acknowledge the fact that a company’s decisions are
                            only as good as the data they are based upon. That is why DBA focuses on ensuring
                            that organizations make use of the power of their data in all seasons.
                            Your data could be stored in spreadsheets, databases, images and so on;
                            we help you analyze, visualize and provide deep insights from them to enable
                            you make meaningful data-driven decisions out of them. Ultimately,
                            your conclusions should be based on the data. Contact us and experience
                            the amazing work we do for our customers and partners.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div id="about" className="container mx-lg-auto row text-center py-4">
                    <div className="col-lg-4 p-4 mt-2">
                        <h2 className="fw-medium display-6">Mission</h2>
                        <p className="lead fs-5">To empower businesses and individuals across Africa with the knowledge, skills
                            and tools to harness the power of data for innovation and growth.</p>
                    </div>
                    <div className="col-lg-4 p-4 mt-2">
                        <h2 className="fw-medium display-6">Vision</h2>
                        <p className="lead fs-5">We strive to be a leading provider of data analytics and artificial intelligence
                            solutions, driving sustainable development and economic prosperity throughout
                            the African continent.</p>
                    </div>
                    <div className="col-lg-4 p-4 mt-2">
                        <h2 className="fw-medium display-6">Core Values</h2>
                        <ul className="list-unstyled lead fs-5">
                            <li>Excellence</li>
                            <li>Innovation</li>
                            <li>Integrity</li>
                            <li>Collaboration</li>
                            <li>Empowerment</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <h2 id="services" className="fw-medium text-center display-4 my-3">What We Do</h2>
                <div className="row container mx-lg-auto mt-3">
                    <div className="col-lg-6 shadow-sm p-4">
                        <h3 className="display-6 fw-normal mb-2">Training and Certification of Data</h3>
                        <p className="lead">Empower yourself and your team with our expert-led training programs in data analysis,
                            visualization, reporting, inventory management, and business process optimization.
                            Whether you’re new to data analytics or looking to advance your skills.
                        </p>
                        <Image
                            src="/imgs/service1.jpg"
                            width={400}
                            height={300}
                            alt="Service 1"
                            className="img-fluid "
                            style={{ borderRadius: "21px 21px 0 0" }}
                        />
                        <p className="mt-3">
                            <Link 
                                className="btn btn-primary"
                                href="#"
                            >Learn more</Link>
                        </p>
                    </div>
                    <div className="col-lg-6 text-bg-dark shadow-sm p-4">
                        <h3 className="display-6 fw-normal mb-2">Data Analytics as a Service</h3>
                        <p className="lead">Leverage our professional data analysis consultancy to gain valuable
                            insights from your data without the need for expensive infrastructure or in-house expertise.
                            From retail data analysis to human resources and logistics, we provide tailored solutions to drive
                            informed decision-making.
                        </p>
                        <Image
                            src="/imgs/service2.jpg"
                            width={400}
                            height={300}
                            alt="Service 2"
                            className="img-fluid "
                            style={{ borderRadius: "21px 21px 0 0" }}
                        />
                        <p className="mt-3">
                            <Link 
                                className="btn btn-primary"
                                href="#"
                            >Learn more</Link>
                        </p>
                    </div>
                </div>
                <div className="row container mx-lg-auto mt-3">
                    <div className="col-lg-6 text-bg-dark shadow-sm p-4">
                        <h3 className="display-6 fw-normal mb-2">Business Process Optimization</h3>
                        <p className="lead">Streamline your operations and maximize efficiency with our
                            business process optimization consultancy. We’ll help you develop standardized processes
                            and training materials to ensure seamless workflows and eliminate unnecessary complexities.
                        </p>
                        <Image
                            src="/imgs/service3.jpg"
                            width={400}
                            height={300}
                            alt="Service 3"
                            className="img-fluid "
                            style={{ borderRadius: "21px 21px 0 0" }}
                        />
                        <p className="mt-3">
                            <Link 
                                className="btn btn-primary"
                                href="#"
                            >Learn more</Link>
                        </p>
                    </div>
                </div>
            </section>
            <section>
            <h2 id="academy" className="fw-medium text-center display-4 mb-2 mt-5">Our Academy</h2>
                <div className="container-xl row mx-lg-auto pb-3">
                    <div className="col-md-4 shadow-sm p-4">
                        <h3 className="display-5">Data Analysis Beginner</h3>
                        <p className="lead">Embark on your data journey with our comprehensive course
                            covering Excel, Statistics, SQL, and Power BI/Tableau. Perfect for beginners!
                        </p>
                        <Image
                            src="/imgs/dataanalysis.jpg"
                            width={400}
                            height={300}
                            alt="Data analysis"
                            className="img-fluid "
                            style={{ borderRadius: "21px 21px 0 0" }}
                        />
                    </div>
                    <div className="col-md-4 shadow-sm p-4">
                        <h3 className="display-5">Full Stack Data Analysis</h3>
                        <p className="lead">Master the art of data analysis with our Full
                            Stack Data Analysis course. Learn Statistics, Excel, SQL,
                            Power BI/Tableau, and Python/R.
                        </p>
                        <Image
                            src="/imgs/fullstackdataanalysis.jpg"
                            width={400}
                            height={300}
                            alt="Data analysis"
                            className="img-fluid "
                            style={{ borderRadius: "21px 21px 0 0" }}
                        />
                    </div>
                    <div className="col-md-4 shadow-sm p-4">
                        <h3 className="display-5">DBA Combo Packages</h3>
                        <p className="lead">Combine your skills with our DBA Combo Packages.
                            Choose from various combinations to suit your needs.
                        </p>
                        <Image
                            src="/imgs/combo.jpg"
                            width={400}
                            height={300}
                            alt="Combination"
                            className="img-fluid "
                            style={{ borderRadius: "21px 21px 0 0" }}
                        />
                    </div>
                </div>
                <div className="container-xl row mx-lg-auto pb-3">
                    <div className="col-md-4 shadow-sm p-4">
                        <h3 className="display-5">Analytics Services</h3>
                        <p className="lead">Unlock the potential of your HR data with our Human Resource
                            Analytics course. Learn to optimize your HR processes for maximum efficiency.
                        </p>
                        <Image
                            src="/imgs/hranalytics.jpg"
                            width={400}
                            height={300}
                            alt="HR Analytics"
                            className="img-fluid "
                            style={{ borderRadius: "21px 21px 0 0" }}
                        />
                    </div>
                    <div className="col-md-4 shadow-sm p-4">
                        <h3 className="display-5">Inventory Management</h3>
                        <p className="lead">Manage your inventory like a pro with our
                            Inventory Management and Stock Analysis course. Learn industry-best practices and techniques.
                        </p>
                        <Image
                            src="/imgs/inventory.jpg"
                            width={400}
                            height={300}
                            alt="Data analysis"
                            className="img-fluid "
                            style={{ borderRadius: "21px 21px 0 0" }}
                        />
                    </div>
                    <div className="col-md-4 shadow-sm p-4">
                        <h3 className="display-5">Corporate Training</h3>
                        <p className="lead">Empower your team with our customized corporate training programs.
                            We offer training in Data Analytics, Business Intelligence, Inventory Management,
                            and more.
                        </p>
                        <Image
                            src="/imgs/corporate.jpg"
                            width={400}
                            height={300}
                            alt="Combination"
                            className="img-fluid "
                            style={{ borderRadius: "21px 21px 0 0" }}
                        />
                    </div>
                </div>
            </section>
            <section id="testimonials">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center">
                        <h2 className="fw-medium text-center display-4 my-3">Our Client's Reviews</h2>
                        <p className="mb-4 pb-2 mb-md-5 pb-md-0 lead">
                            <small>
                                At DataBreed Africa, we're dedicated to providing top-notch data analytics
                                solutions and training. But don't just take our word for it
                                , hear directly from those who've experienced the transformative
                                power of our services.
                                Their stories speak volumes about our commitment to excellence.
                            </small>
                        </p>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <Image
                                src="/imgs/reviews/reviewer1.jpeg"
                                className="rounded-circle shadow-1-strong"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h5 className="mb-3">Mindra Khan</h5>
                        <h6 className="text-primary mb-3">CEO Mega Plastics</h6>
                        <p className="px-xl-3 lead">
                            <i className="bi bi-quote"></i> Data Breed Africa helped us unlock the potential of our data and make informed decisions. Highly recommend their services! Their expertise and guidance were invaluable in driving our business forward.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-half text-warning"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <Image
                                src="/imgs/reviews/reviewer2.jpeg"
                                className="rounded-circle shadow-1-strong"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h5 className="mb-3">Naomi Akinyi</h5>
                        <h6 className="text-primary mb-3">Director Net Station</h6>
                        <p className="px-xl-3 lead">
                            <i className="bi bi-quote"></i>Excellent services! They provided valuable insights that transformed our business operations. Their expertise and dedication significantly improved our efficiency and boosted our bottom line. Highly recommended!
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-0">
                        <div className="d-flex justify-content-center mb-4">
                            <Image
                                src="/imgs/reviews/reviewer4.jpeg"
                                className="rounded-circle shadow-1-strong"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h5 className="mb-3">Alphayo Mubanda</h5>
                        <h6 className="text-primary mb-3">COO Shivakalabs</h6>
                        <p className="px-xl-3 lead">
                            <i className="bi bi-quote"></i>Data Breed Africa helped us unlock the potential of our data and make informed decisions. Highly recommend their services! Their expertise was instrumental in driving our success.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li>
                                <i className="bi bi-star text-warning"></i>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <section id="social">
                <div className="text-center py-5">
                    <h2 className="fw-medium text-center display-4 my-3">Let's Get Social</h2>
                    <div className="social-icons">
                        <Link className="mx-2" href="https://web.facebook.com/profile.php?id=100067535365032" target="_blank"><Image src="/imgs/social/facebook-icon.png" alt="Facebook Icon" width={70} height={70} /></Link>
                        <Link className="mx-2" href="https://twitter.com/DataBreedAfrica" target="_blank"><Image src="/imgs/social/twitter-icon.png" alt="Twitter Icon" width={70} height={70} /></Link>
                        <Link className="mx-2" href="https://wa.me/+254792596600" target="_blank"><Image src="/imgs/social/whatsapp-icon.png" alt="WhatsApp Icon" width={70} height={70} /></Link>
                        <Link className="mx-2" href="https://www.linkedin.com/in/data-breed-africa-900694305/" target="_blank"><Image src="/imgs/social/linkedin-icon.png" alt="LinkedIn Icon" width={70} height={70} /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}