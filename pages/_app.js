import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  console.log('render app')
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
