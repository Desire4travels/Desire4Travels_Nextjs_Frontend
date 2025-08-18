// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import axios from 'axios';
// import Image from 'next/image';
// import companylogo from '../public/assets/companylogo.png';

// import { FaShareAlt, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitting, setSubmitting] = useState(false);

//   const handleSubscribe = async () => {
//     if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
//       setMessage('Please enter a valid email address.');
//       return;
//     }

//     setSubmitting(true);
//     setMessage('');

//     try {
//       const res = await axios.post('https://desire4travels-1.onrender.com/api/newsletter', { email });
//       setMessage(res.data.message || 'Subscribed successfully!');
//       setEmail('');
//     } catch (error) {
//       const errMsg = error.response?.data?.error || 'Subscription failed. Please try again.';
//       setMessage(errMsg);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <footer className="footer">
//       {/* First Footer Section */}
//       <div className="first-footer">
//         <div className="footer-section footerleft">
//           <div className="icon-heading">
//             <FaPhoneAlt className="icon blue-icon" />
//             <h4>Call us</h4>
//           </div>
//           <p className='footershorttext'>Chat or get a quote 24/7—we’re here to help!</p>
//           <div className="phone-links">
//             <a href="tel:+91-7977022583" className="footer-link">+91-7977022583</a>
//             <a href="tel:+91-7409030585" className="footer-link">+91-7409030585</a>
//           </div>
//         </div>

//         <div className="footer-section">
//           <div className="icon-heading">
//             <FaEnvelope className="icon red-icon" />
//             <h4>Write to us</h4>
//           </div>
//           <p className='footershorttext'>Enquiry, feedback, or suggestion? Write to us.</p>
//           <a href="mailto:info@desire4travels.com" className="footer-link">info@desire4travels.com</a>
//         </div>

//         <div className="footer-section lastsection">
//           <div className="icon-heading">
//             <FaWhatsapp className="icon whatsapp-green" />
//             <h4>WhatsApp us</h4>
//           </div>
//           <p className='footershorttext'>Chat with us for quick travel help!</p>
//           <a href="https://wa.me/917977022583" className="footer-link">+91-7977022583</a>
//         </div>
//       </div>

//       {/* Second Footer Section */}
//       <div className="second-footer">
//         <div className="subscribe">
//           <Image src={companylogo} alt="Company Logo" className="companylogo" />
//           <h4>Subscribe to our newsletter</h4>
//           <p>Stay updated with the latest travel deals and blogs.</p>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="newsletter-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={submitting}
//           />
//           <button
//             className="subscribe-button"
//             onClick={handleSubscribe}
//             disabled={submitting}
//           >
//             {submitting ? 'Subscribing...' : 'Subscribe'}
//           </button>
//           {message && <p className="subscribe-message">{message}</p>}
//         </div>

//         <div className="footer-links">
//           <div className="link-column">
//             <h4>About Us</h4>
//             <Link href="/about">About Us</Link>
//             <Link href="/careerpage">Career Page</Link>
//             <Link href="/reviews">Reviews</Link>
//           </div>

//           <div className="link-column">
//             <h4>Navigation</h4>
//             <Link href="/">Home</Link>
//             <Link href="/contact">Contact Us</Link>
//           </div>

//           <div className="link-column">
//             <h4>Resources</h4>
//             <Link href="/faq">FAQ</Link>
//             <Link href="/blogs/blogs">Blogs</Link>
//             <Link href="/terms">Terms & Conditions</Link>
//           </div>

//           <div className="link-column">
//             <h4>Travel</h4>
//             <Link href="/destination">Destinations</Link>
//             <Link href="/package">Packages</Link>
//           </div>

//           <div className="footer-section-social">
//             <div className="icon-heading">
//               <FaShareAlt className="icon" />
//               <h4>Connect with us</h4>
//             </div>
//             <p>Reviews, podcasts, blogs and more...</p>
//             <div className="social-icons">
//               <a href="https://www.facebook.com/hashtag/desire4travels/" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebookF /></a>
//               <a href="https://www.youtube.com/channel/UCyeSVsm2NoBijIiE4saB2_A" target="_blank" rel="noopener noreferrer" className="youtube"><FaYoutube /></a>
//               <a href="https://in.linkedin.com/company/desire4travels" target="_blank" rel="noopener noreferrer" className="linkedin"><FaLinkedinIn /></a>
//               <a href="https://www.instagram.com/desire4travels/" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
//               <a href="https://wa.me/917977022583" target="_blank" rel="noopener noreferrer" className="whatsapp"><FaWhatsapp /></a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <p className="footer-note">© {new Date().getFullYear()} Desire4Travels. All Rights Reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


'use client';

import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import companylogo from '../public/assets/companylogo.png';

import { FaShareAlt, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      const res = await axios.post('https://desire4travels-1.onrender.com/api/newsletter', { email });
      setMessage(res.data.message || 'Subscribed successfully!');
      setEmail('');
    } catch (error) {
      const errMsg = error.response?.data?.error || 'Subscription failed. Please try again.';
      setMessage(errMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#0b1d2e] font-sans">
      {/* First Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-gray-200 px-4 md:px-[5%] py-2 items-center">
        <div className="flex flex-col items-center text-center py-4 text-gray-800 text-sm border-b md:border-b-0 md:border-r border-gray-300 relative md:after:content-[''] md:after:block md:after:w-px md:after:h-16 md:after:bg-gray-300 md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2">
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-xl text-[#0c55a3]" />
            <h4 className="text-lg text-[#0b1d2e] font-medium">Call us</h4>
          </div>
          <p className="text-gray-600 mb-2 text-sm">Chat or get a quote 24/7—we're here to help!</p>
          <div className="flex gap-2 whitespace-nowrap justify-center">
            <a href="tel:+91-7977022583" className="text-[#0033a0] font-bold text-sm hover:underline">+91-7977022583</a>
            <a href="tel:+91-7409030585" className="text-[#0033a0] font-bold text-sm hover:underline">+91-7409030585</a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center py-4 text-gray-800 text-sm border-b md:border-b-0 md:border-r border-gray-300 relative md:after:content-[''] md:after:block md:after:w-px md:after:h-16 md:after:bg-gray-300 md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2">
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-xl text-red-600" />
            <h4 className="text-lg text-[#0b1d2e] font-medium">Write to us</h4>
          </div>
          <p className="text-gray-600 mb-2 text-sm">Enquiry, feedback, or suggestion? Write to us.</p>
          <a href="mailto:info@desire4travels.com" className="text-[#0033a0] font-bold text-sm hover:underline">info@desire4travels.com</a>
        </div>

        <div className="flex flex-col items-center text-center py-4 text-gray-800 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <FaWhatsapp className="text-xl text-[#25D366]" />
            <h4 className="text-lg text-[#0b1d2e] font-medium">WhatsApp us</h4>
          </div>
          <p className="text-gray-600 mb-2 text-sm">Chat with us for quick travel help!</p>
          <a href="https://wa.me/917977022583" className="text-[#0033a0] font-bold text-sm hover:underline">+91-7977022583</a>
        </div>
      </div>

      {/* Second Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 md:px-[5%] py-8 bg-[#0b1d2e] text-white">
        <div className="flex flex-col w-full md:max-w-[325px]">
          <Image src={companylogo} alt="Company Logo" className="h-12 w-auto object-contain mb-4" />
          <h4 className="text-lg font-medium mb-2">Subscribe to our newsletter</h4>
          <p className="text-gray-300 text-sm mb-4">Stay updated with the latest travel deals and blogs.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-3 rounded mb-2 w-full text-sm text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
          />
          <button
            className="px-5 py-3 bg-[#2873a1] text-white font-bold rounded text-sm hover:bg-[#1a5a80] transition-colors"
            onClick={handleSubscribe}
            disabled={submitting}
          >
            {submitting ? 'Subscribing...' : 'Subscribe'}
          </button>
          {message && <p className="text-white text-xs mt-2">{message}</p>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:col-span-4 gap-6">
          <div className="flex flex-col">
            <h4 className="text-[#2873a1] text-sm font-medium mb-4">About Us</h4>
            <Link href="/about" className="text-gray-300 text-sm mb-2 hover:text-white">About Us</Link>
            <Link href="/careerpage" className="text-gray-300 text-sm mb-2 hover:text-white">Career Page</Link>
            <Link href="/reviews" className="text-gray-300 text-sm mb-2 hover:text-white">Reviews</Link>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[#2873a1] text-sm font-medium mb-4">Navigation</h4>
            <Link href="/" className="text-gray-300 text-sm mb-2 hover:text-white">Home</Link>
            <Link href="/contact" className="text-gray-300 text-sm mb-2 hover:text-white">Contact Us</Link>
            <Link href="/service_providers" className="text-gray-300 text-sm mb-2 hover:text-white">Partners with us</Link>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[#2873a1] text-sm font-medium mb-4">Resources</h4>
            <Link href="/faq" className="text-gray-300 text-sm mb-2 hover:text-white">FAQ</Link>
            <Link href="/blogs" className="text-gray-300 text-sm mb-2 hover:text-white">Blogs</Link>
            <Link href="/terms" className="text-gray-300 text-sm mb-2 hover:text-white">Terms & Conditions</Link>
            {/* ✅ Sitemap links */}
            <a
              href="https://desire4travels.com/server-sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-sm mb-2 hover:text-white"
            >
              Sitemap
            </a>
            {/* <a href="http://localhost:3000/server-sitemap.xml" className="text-gray-300 text-sm mb-2 hover:text-white">Dynamic Sitemap</a> */}

          </div>

          <div className="flex flex-col">
            <h4 className="text-[#2873a1] text-sm font-medium mb-4">Travel</h4>
            <Link href="/destination" className="text-gray-300 text-sm mb-2 hover:text-white">Destinations</Link>
            <Link href="/package" className="text-gray-300 text-sm mb-2 hover:text-white">Packages</Link>
            <Link href="/activity" className="text-gray-300 text-sm mb-2 hover:text-white">Activities</Link>
             <Link href="https://saarthi.desire4travels.com/" className="text-gray-300 text-sm mb-2 hover:text-white">Saarthi AI</Link>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <FaShareAlt className="text-gray-300" />
              <h4 className="text-[#2873a1] text-sm font-medium">Connect with us</h4>
            </div>
            <p className="text-gray-300 text-xs mb-4 text-center md:text-left">Reviews, podcasts, blogs and more...</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/hashtag/desire4travels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#1877F2] hover:text-[#145dbf]"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://www.youtube.com/@Desire4travels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#FF0000] hover:text-[#cc0000]"
              >
                <FaYoutube className="text-lg" />
              </a>
              <a
                href="https://in.linkedin.com/company/desire4travels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#0A66C2] hover:text-[#004182]"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/desire4travels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#E1306C] hover:text-[#c13584]"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://wa.me/917977022583"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#25D366]"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center py-4 text-gray-300 bg-[#0b1d2e] border-t border-[#1a3a5a] text-sm">
        © {new Date().getFullYear()} Desire4Travels. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;