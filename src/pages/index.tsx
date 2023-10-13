import Navbar from "@/components/NavBar/nav";
import { Advantages, Herosection, Showcase, Sponsors } from "@/components/landingPage/LandingPage";
import Head from "next/head";
import Image from "next/image";




const Home = () => {
  return (
    <div className="px-24 py-10 ">
      <Head>
        <title>ClearLink | HomePage </title>
      </Head>
      <Navbar />

      <main className={`min-h-screen space-y-32 `}>
        <Herosection />
        <Sponsors />
        <Advantages />
        <Showcase />

      </main>
      {/* <Footer /> */}

    </div>
  );
}

export default Home
