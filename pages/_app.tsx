import "../styles/styles.css";
import SEO from "../next-seo.config";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import { SavedPasswordsProvider } from "@/context/SavedPasswords";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const disabledPaths = ["/404", "/500"];

  return (
    <>
      <Analytics />
      <SavedPasswordsProvider>
        <DefaultSeo {...SEO} />
        {!disabledPaths.includes(router.pathname) && <Header />}
        <Component {...pageProps} />
        {!disabledPaths.includes(router.pathname) && <Footer />}
      </SavedPasswordsProvider>
    </>
  );
}
