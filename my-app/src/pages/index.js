import Head from 'next/head'
import Header from '../../components/Header/Header'
import Bio from '../../components/Bio/Bio'


export default function Home() {
  return (
    <>
      <Head>
        <title>Andrea Sabato</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
    <Header/>
    <Bio/>
    </>
  )
}
