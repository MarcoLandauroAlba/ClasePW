import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (<>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"/>
    <div className='container'>
      <Component {...pageProps} />
    </div>
  </>
  )
  
}

export default MyApp
