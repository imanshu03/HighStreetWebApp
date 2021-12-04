import Head from 'next/head';
import { useEffect } from 'react';
import { ObserverStore } from '../utils/ObserverContext';
import Home from './Components/Home.jsx';
import Header from './Components/Header.jsx';
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Head>
        <title>High Street</title>
        <meta name="description" content="High Street" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ObserverStore>
        <SSRProvider>
          <Header />
          <Home />
        </SSRProvider>
      </ObserverStore>
    </>
  );
}
