import Head from 'next/head';
import { Header, Footer } from '../';

export default function Layout({ children }) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app" />
          <meta property='og:image' content='/assets/thumbnail/linkedin.png' />
          <title>Manuel Duran - Portfolio</title>
        </Head>
        <Header />
            <main>{children}</main>
        <Footer />
      </>
    )
  }