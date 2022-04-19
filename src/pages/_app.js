import { SnipcartProvider } from "use-snipcart/useSnipcart";

import "@styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SnipcartProvider>
      <Component {...pageProps} />
    </SnipcartProvider>
  );
}

export default MyApp;
