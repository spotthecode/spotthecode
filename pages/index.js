import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import App from '../components/App'


export default function Home() {
  return (
    <> 
    <div>
      <Head>
        <title>@spotthecode</title>
        <meta name="description" content="designed and developed with ❤ by @spotthecode" />
        <link rel="icon" href="/favicon.ico" />
      </Head>        
    </div> 
   
   {/* ********************************************************************* */}
    <App/>
    
    </>

  )
}
 