import '../styles/globals.css'
import Head from './_head';
import Footer from './_footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
