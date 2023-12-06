import Head from "next/head";
import React from "react";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer";
import Order from "../components/DeliveryReturns/OrderCard.jsx"
const DeliveryReturns = () => {
  return (
    <main className="container min-h-screen bg-[#f2eadf] py-[.94rem] relative">
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
      </Head>
      <Navbar />
      <h1 className="font-lato-regular !text-[0.875rem] text-center border-b-2 border-white pb-[.94rem] pt-16 text-[#2F2E2D] !font-[700]">
        Returns & Exchanges
      </h1>
      <Order/>
      <Footer />
    </main>
  );
};

export default DeliveryReturns;