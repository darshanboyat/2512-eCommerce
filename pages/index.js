import Head from "next/head";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer.jsx";
import SectionOne from "../components/Home/SectionOne.jsx";
import SectionTwo from "../components/Home/SectionTwo.jsx";
import SectionThree from "../components/Home/SectionThree.jsx";
import SectionFour from "../components/Home/SectionFour.jsx";
import SectionFive from "../components/Home/SectionFive.jsx";
import SectionSix from "../components/Home/SectionSix.jsx";
import SectionSeven from "../components/Home/SectionSeven.jsx";
const Home = () => {
  const [close, setClose] = useState(false);
  return (
    <main>
      <Head>
        <title>
          Sustainable & Stylish Clothing | 2512: Organic Gender-Inclusive
          Fashion
        </title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sustainable & Stylish Clothing | 2512: Organic Gender-Inclusive Fashion"
        />
        <meta
          property="og:description"
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
        />
        <meta property="og:url" content="https://www.2512.in/" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="container min-h-screen bg-[#f2eadf] relative">
        {!close && (
          <div className="container py-2 sticky left-0 right-0 w-full drop-shadow-md text-[#A86549]">
            <div className="flex items-center justify-center backdrop-sepia px-6 py-3 rounded-md bg-[#E9E0D9CC] font-semibold relative">
              Free shipping all over India!!!
              <span
                className="absolute right-4 top-4 text-2xl"
                onClick={() => setClose(true)}
              >
                <IoClose />
              </span>
            </div>
          </div>
        )}
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive /> 
        <SectionSix /> 
        <SectionSeven /> 
        <Footer/>
      </div>
    </main>
  );
};

export default Home;
