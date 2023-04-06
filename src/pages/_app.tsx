import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Provider>
  );
}
