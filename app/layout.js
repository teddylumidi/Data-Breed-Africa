import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./global.css";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
<<<<<<< HEAD
                <title>Data Breed Africa</title>
=======
                <title>DataBreed Africa</title>
>>>>>>> b377f0b0791987019ef23802785c7036b442a971
                <NavBar />
                <main>{children}</main>
                <Footer />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
            </body>
        </html>
    )
}
