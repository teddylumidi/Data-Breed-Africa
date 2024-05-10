import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section id="hero">
          <div className={`row p-4 container-fluid `}>
            <div className={`my-lg-auto col-md-6`}>
              <Image
                className={styles.logo}
                src="/imgs/logo.png"
                alt="DataBreed Africa Logo"
                width={400}
                height={400}
                priority
                unoptimized
              />
            </div>
            <div className="col-md-6 my-lg-auto">
              <h1 className="mb-3 display-3 fw-medium"> Who we are</h1>
              <p className="lead fs-6 fw-normal">
                Data Breed Africa provides Pan African Data Analytics solutions and Training.
                With expertise in Data and Artificial Intelligence, we offer holistic approaches
                to solve business and individual challenges across various industries.
                We emphasize the importance of data-driven decisions, leveraging your
                data from spreadsheets, databases, images, and more. Contact us to experience
                our impactful solutions for customers and partners.
              </p>
              <Link href="/contacts" className="btn btn-primary" >Talk to us</Link>
            </div>
          </div>
        </section>
        <section id="about" className="mb-3">
          <div className="container mx-auto row text-center my-5 p-3">
            <div className={`${styles.card} col-lg-4 mb-3`}>
              <h2 className="display-6 fw-medium fs-3">Mission</h2>
              <p className="lead fs-6">To empower businesses and individuals across Africa with the knowledge, skills
                and tools to harness the power of data for innovation and growth.</p>
            </div>
            <div className={`${styles.card} col-lg-4 mb-3`}>
              <h2 className="display-6 fw-medium fs-3">Vision</h2>
              <p className="lead fs-6">We strive to be a leading provider of data analytics and artificial intelligence
                solutions, driving sustainable development and economic prosperity throughout
                the African continent.</p>
            </div>
            <div className={`${styles.card} col-lg-4 mb-3`}>
              <h2 className="display-6 fw-medium fs-3">Core Values</h2>
              <ul className="list-unstyled lead fs-6">
                <li>Excellence</li>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Collaboration</li>
                <li>Empowerment</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="services">
          <h2 className="display-3 text-center fw-medium mt-4 mb-3">What We Do</h2>
          <div className="row container mx-auto mb-3">
            <div className="col-lg-6 p-3 shadow">
              <h3 className="display-4 fw-normal mb-2">Training and Certification of Data</h3>
              <p className="lead">Empower yourself and your team with our expert-led training programs in data analysis,
                visualization, reporting, inventory management, and business process optimization.
                Whether you’re new to data analytics or looking to advance your skills.
              </p>
              <Image
                unoptimized
                src="/imgs/service1.jpg"
                width={600}
                height={300}
                alt="Service 1"
                className="img-fluid "
                style={{ borderRadius: "21px 21px 0 0" }}
              />
              <p className="mt-3">
                <Link
                  className="btn btn-primary"
                  href="/contacts"
                >Learn more</Link>
              </p>
            </div>
            <div className="col-lg-6 text-bg-dark p-3 shadow">
              <h3 className="display-4 fw-normal mb-2">Data Analytics as a Service</h3>
              <p className="lead">Leverage our professional data analysis consultancy to gain valuable
                insights from your data without the need for expensive infrastructure or in-house expertise.
                From retail data analysis to human resources and logistics, we provide tailored solutions to drive
                informed decision-making.
              </p>
              <Image
                unoptimized
                src="/imgs/service2.jpg"
                width={600}
                height={300}
                alt="Service 2"
                className="img-fluid "
                style={{ borderRadius: "21px 21px 0 0" }}
              />
              <p className="mt-3">
                <Link
                  className="btn btn-primary"
                  href="/contacts"
                >Learn more</Link>
              </p>
            </div>
          </div>
          <div className="row container mx-auto mb-3">
            <div className="col-lg-6 text-bg-dark shadow p-4">
              <h3 className="display-4 fw-normal mb-2">Business Process Optimization</h3>
              <p className="lead">Streamline your operations and maximize efficiency with our
                business process optimization consultancy. We&apos;’ll help you develop standardized processes
                and training materials to ensure seamless workflows and eliminate unnecessary complexities.
              </p>
              <Image
                unoptimized
                src="/imgs/service3.jpg"
                width={600}
                height={300}
                alt="Service 3"
                className="img-fluid "
                style={{ borderRadius: "21px 21px 0 0" }}
              />
              <p className="mt-3">
                <Link
                  className="btn btn-primary"
                  href="/contacts"
                >Learn more</Link>
              </p>
            </div>
          </div>
        </section>

        <section id="academy">
          <h2 className="display-3 text-center fw-medium mt-5 mb-3">Our Academy</h2>
          <div className={`${styles.grid2} mx-auto`}>
            <Link href="/contacts" className={`${styles.card} shadow my-4`}>
              <h3 className="display-4  px-2">Data Analysis Beginner</h3>
              <p className="lead text-dark p-2">Embark on your data journey with our comprehensive course
                covering Excel, Statistics, SQL, and Power BI/Tableau. Perfect for beginners!
              </p>
              <Image
                unoptimized
                src="imgs/hranalytics.jpg"
                width={400}
                height={300}
                alt="HR Analytics"
                className="img-fluid "
                style={{ borderRadius: "21px 21px 0 0" }}
              />
            </Link>
            <Link href="/contacts" className={`${styles.card} shadow my-4`}>
              <h3 className="display-4 px-2">Full Stack Data Analysis</h3>
              <p className="lead text-dark p-2">Master the art of data analysis with our Full
                Stack Data Analysis course. Learn Statistics, Excel, SQL,
                Power BI/Tableau, and Python/R.</p>
              <Image
                unoptimized
                src="imgs/fullstackdataanalysis.jpg"
                width={400}
                height={300}
                alt="HR Analytics"
                className="img-fluid "
                style={{ borderRadius: "21px 21px 0 0" }}
              />
            </Link>
            <Link href="/contacts" className={`${styles.card} shadow my-4`}>
              <h3 className="display-4 px-2">DBA Combo Packages</h3>
              <p className="lead text-dark p-2">Combine your skills with our DBA Combo Packages.
                Choose from various combinations to suit your needs.
              </p>
              <Image
                unoptimized
                src="/imgs/combo.jpg"
                width={400}
                height={300}
                alt="Combination"
                className="img-fluid "
                style={{ borderRadius: "21px 21px 0 0" }}
              />
            </Link>
            <Link href="/contacts" className={`${styles.card} shadow my-4`}>
              <h3 className="display-4 px-2">Analytics Services</h3>
              <p className="lead text-dark p-2">Unlock the potential of your HR data with our Human Resource
                Analytics course. Learn to optimize your HR processes for maximum efficiency.
              </p>
              <Image
                unoptimized
                src="/imgs/hranalytics.jpg"
                width={400}
                height={300}
                alt="HR Analytics"
                className="img-fluid "
                style={{ borderRadius: "21px 21px 0 0" }}
              />
            </Link>
            <Link href="/contacts" className={`${styles.card} shadow my-4`}>
              <h3 className="display-4 px-2">Inventory Management</h3>
              <p className="lead text-dark p-2">Manage your inventory like a pro with our
                Inventory Management and Stock Analysis course. Learn industry-best practices and techniques.
              </p>
              <Image
                unoptimized
                src="/imgs/inventory.jpg"
                width={400}
                height={300}
                alt="Data analysis"
                className="img-fluid "
                style={{ borderRadius: "21px 21px 0 0" }}
              />
            </Link>
            <Link href="/contacts" className={`${styles.card} shadow my-4`}>
              <h3 className="display-4 px-2">Corporate Training</h3>
              <p className="lead text-dark p-2">Empower your team with our customized corporate training programs.
                We offer training in Data Analytics, Business Intelligence, Inventory Management,
                and more.
              </p>
              <Image
                unoptimized
                src="/imgs/corporate.jpg"
                width={400}
                height={300}
                alt="Combination"
                className="img-fluid "
                style={{ borderRadius: "21px 21px 0 0" }}
              />
            </Link>
          </div>
        </section>
        <section id="testimonials">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h2 className="display-3 text-center fw-medium mt-4 mb-3">Our Client&apos;s Reviews</h2>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0 lead">
                <small>
                  At DataBreed Africa, we&apos;re dedicated to providing top-notch data analytics
                  solutions and training. But don&apos;t just take our word for it
                  , hear directly from those who&apos;ve experienced the transformative
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
                  unoptimized
                  src="/imgs/reviews/reviewer1.jpeg"
                  alt="Reviews"
                  className="rounded-circle shadow-1-strong"
                  width={150}
                  height={150}
                />
              </div>
              <h5 className="mb-3">Mukesh Akhan</h5>
              <h6 className="mb-3">CEO Mega Plastics</h6>
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
                  unoptimized
                  src="/imgs/reviews/reviewer2.jpeg"
                  alt="reviews 1"
                  className="rounded-circle shadow-1-strong"
                  width={150}
                  height={150}
                />
              </div>
              <h5 className="mb-3">Naomi Akinyi</h5>
              <h6 className="mb-3">COO Net Station</h6>
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
                  unoptimized
                  src="/imgs/reviews/reviewer4.jpeg"
                  alt="reviews2"
                  className="rounded-circle shadow-1-strong"
                  width={150}
                  height={150}
                />
              </div>
              <h5 className="mb-3">Alphayo Mubanda</h5>
              <h6 className="mb-3">COO Shivakalabs</h6>
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
          <div className="text-center py-5 mb-3">
            <h2 className="display-3 text-center fw-medium mt-4 mb-3">Let&apos;s Get Social</h2>
            <div className="social-icons">
              <Link className="mx-2" href="https://web.facebook.com/profile.php?id=100067535365032" target="_blank"><Image unoptimized src="/imgs/social/facebook-icon.png" alt="Facebook Icon" width={70} height={70} /></Link>
              <Link className="mx-2" href="https://twitter.com/DataBreedAfrica" target="_blank"><Image unoptimized src="/imgs/social/twitter-icon.png" alt="Twitter Icon" width={70} height={70} /></Link>
              <Link className="mx-2" href="https://wa.me/+254792596600" target="_blank"><Image unoptimized src="/imgs/social/whatsapp-icon.png" alt="WhatsApp Icon" width={70} height={70} /></Link>
              <Link className="mx-2" href="https://www.linkedin.com/in/data-breed-africa-900694305/" target="_blank"><Image unoptimized src="/imgs/social/linkedin-icon.png" alt="LinkedIn Icon" width={70} height={70} /></Link>
            </div>
          </div>
        </section>
      </main>
    </>

  );
}
