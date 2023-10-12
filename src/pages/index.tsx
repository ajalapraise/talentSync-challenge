import Navbar from "@/components/NavBar/nav";
import Head from "next/head";
import Image from "next/image";


const Home = () => {
  return (
    <div className="px-24 py-10 ">
      <Head>
        <title>ClearLink | HomePage </title>
      </Head>
      <Navbar />

      <main className={`min-h-screen `}>

      </main>
      {/* <Footer /> */}

    </div>
  );
}

export default Home
