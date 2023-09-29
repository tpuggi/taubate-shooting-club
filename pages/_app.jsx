import "../styles/globals.css";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 20,
    });
  }, []);
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
