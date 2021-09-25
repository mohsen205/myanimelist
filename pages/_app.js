import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/style.css'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  })
  if (Component.getLayout) {
    return Component.getLayout(
      <Component {...pageProps} />
    )
  }
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp