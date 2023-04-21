import Head from 'next/head'
import Header from '../../components/Header/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Andrea Sabato</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/andrealogo.svg" />
      </Head>
    <Header/>
    </>
  )
}
