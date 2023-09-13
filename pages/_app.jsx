import "../styles/globals.css";
import Head from "next/head";

import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
