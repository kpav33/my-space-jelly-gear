import { SnipcartProvider } from "use-snipcart/useSnipcart";

import "@styles/globals.scss";

function MyApp({ Component, pageProps }) {
  // We want for the value shopping cart in header gets updated every time we add an item to the cart
  // We achieve this by using the use-snipcart package, because the default Snipcart doesn't update properly the value in the cart, because of client side routing

  return (
    // Make Snipcart provider context available throughout the application
    <SnipcartProvider>
      <Component {...pageProps} />
    </SnipcartProvider>
  );
}

export default MyApp;
