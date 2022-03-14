import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "/src/components/Layout";
import Preloader from "../src/components/Preloader";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  return (
    <>
      <Layout>
        <Component {...pageProps} setPreloader={setPreloader} />
      </Layout>
      <Preloader preloader={preloader} />
    </>
  );
}

export default MyApp;
