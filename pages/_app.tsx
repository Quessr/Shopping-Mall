import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyles from "../styles/GlobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <Provider store={store}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
