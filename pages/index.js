import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { ObserverStore } from "../utils/ObserverContext";
import Home from "./Components/Home";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>High Street</title>
        <meta name="description" content="High Street" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ObserverStore>
        <Home />
      </ObserverStore>
    </div>
  );
}
