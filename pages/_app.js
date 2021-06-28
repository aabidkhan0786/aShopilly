import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css" integrity="sha384-9+PGKSqjRdkeAU7Eu4nkJU8RFaH8ace8HGXnkiKMP9I9Te0GJ4/km3L1Z8tXigpG" crossorigin="anonymous"/>
  </Head>
  <NavBar/>
  <Component {...pageProps} />
  </> )
}

export default MyApp
