import Head from 'next/head';
import { ObserverStore } from '../utils/ObserverContext';
import Home from './Components/Home.jsx';
import Header from './Components/Header.jsx';
import { SSRProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import MasterPlan from './Components/MasterPlan';

export default function LandingPage() {
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
          <MasterPlan />
        </SSRProvider>
      </ObserverStore>
    </>
  );
}
