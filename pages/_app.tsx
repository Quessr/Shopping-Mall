import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import GlobalStyles from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
