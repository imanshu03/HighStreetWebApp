import Head from 'next/head';
import { useEffect } from 'react';
import { ObserverStore } from '../utils/ObserverContext';
import Home from './Components/Home.jsx';
import NavBar from './Components/NavBar.jsx';
import { Row, SSRProvider } from 'react-bootstrap';
import MasterPlan from './Components/MasterPlan';
import ImageCrousel from './Components/ImageCrousel';
import ContactForm from './Components/ContactForm';
import Services from './Components/Services';
import 'bootstrap/dist/css/bootstrap.css';

export default function LandingPage() {
  useEffect(() => {
    document.getElementById('main-content').scrollTo({
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
      <div id="call-cta">
        <a href="tel:9780282060">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fillRule="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
        </a>
      </div>
      <ObserverStore>
        <SSRProvider>
          <NavBar />
          <div className="content-wrapper" id="main-content">
            <p className="rera-number">
              RERA NUMBER: <b>PBRERA-SAS79-PC0160</b>
            </p>
            <Home />
            <MasterPlan />
            <ImageCrousel />
            <Services />
            <ContactForm />
          </div>
        </SSRProvider>
      </ObserverStore>
    </>
  );
}
