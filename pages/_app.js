import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/scss/index.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            <main id="main">
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    )
  }