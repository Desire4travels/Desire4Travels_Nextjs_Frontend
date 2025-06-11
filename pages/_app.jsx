import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";  // <-- import Head

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Popup from "./PopUp.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Tawk from "../components/Tawk.jsx";

import '../styles/globals.css';
import '../styles/index.css';
import '../styles/App.css';      
import '../styles/Contact.css';
import '../styles/Destination.css';
import '../styles/Navbar.css';
import '../styles/Footer.css';
import '../styles/Package.css';
import '../styles/PackageCard.css';
import '../styles/DestinationCard.css';
import '../styles/Hero.css';
import '../styles/Aboutus.css';
import '../styles/CareerPage.css';
import '../styles/Review.css';
import '../styles/Faq.css';
import '../styles/TermsandConditions.css';
import '../styles/BlogList.css';
import '../styles/BlogPost.css';
import '../styles/TripTypePage.css';
import '../styles/DestinationDetails.css';
import '../styles/PackageDetails.css';
import '../styles/SuccessPopup.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const excludedPaths = ["/login", "/signup"];

  useEffect(() => {
    setIsPopupVisible(true);
  }, [router.pathname]);

  const blurClass = isPopupVisible ? "blurred" : "";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Desire4Travels - Collect Moments Not Things</title>
        <meta name="description" content="Explore the world with Desire4Travels. Discover amazing destinations, book travel packages, and plan your perfect trip." />
      </Head>

      <div className="app-container">
        <ScrollToTop />
        {!excludedPaths.includes(router.pathname) && isPopupVisible && (
          <Popup onClose={() => setIsPopupVisible(false)} />
        )}
        <Navbar />
        <div className={`app-content ${blurClass}`}>
          <Component {...pageProps} />
        </div>
        <Tawk />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
