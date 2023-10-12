import Layout from '@/components/layout/layout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--Montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: "100",
});

export default function App({
  Component,
  pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`bg-white text-black ${montserrat.className} `}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
