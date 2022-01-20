import '../styles/globals.css'
import Head from './_head';
import Footer from './footer';
import NavBar from './navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <NavBar />
      <div className={'contentBody'}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
