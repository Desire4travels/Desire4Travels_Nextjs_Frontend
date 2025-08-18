// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const router = useRouter();

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleTripTypeChange = (type) => {
//     if (type) {
//       router.push(`/triptype/${type}`);
//       setMenuOpen(false);
//       setDropdownOpen(false);
//     }
//   };

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//     setDropdownOpen(false);
//     if (typeof window !== 'undefined') {
//       window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <nav className="fixed w-full z-50 bg-gray-900 backdrop-blur-sm px-4 h-20 flex items-center border-b border-blue-500/20">
//       <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
//         <Link
//           href="/"
//           className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors font-serif whitespace-nowrap"
//           onClick={handleLinkClick}
//         >
//           Desire<span className="text-white">4</span>Travels
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-0">
//           <Link
//             href="/"
//             className="text-gray-200 hover:text-blue-400 px-4 py-2 text-sm font-medium transition-colors"
//             onClick={handleLinkClick}
//           >
//             Home
//           </Link>

//           <Link
//             href="/destination"
//             className="text-gray-200 hover:text-blue-400 px-4 py-2 text-sm font-medium transition-colors"
//             onClick={handleLinkClick}
//           >
//             Destinations
//           </Link>

//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="text-gray-200 hover:text-blue-400 px-4 py-2 text-sm font-medium flex items-center transition-colors bg-transparent hover:bg-transparent focus:outline-none"
//             >
//               Trip Type
//               <svg
//                 className={`ml-1 h-4 w-4 text-gray-200 ${dropdownOpen ? 'rotate-180' : ''} transition-transform`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-blue-500/20 z-50">
//                 {['mountain', 'beach', 'religious', 'treks', 'offbeat', 'other'].map((type) => (
//                   <button
//                     key={type}
//                     onClick={() => handleTripTypeChange(type)}
//                     className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-blue-600/20 hover:text-blue-300 capitalize"
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link
//             href="/package"
//             className="text-gray-200 hover:text-blue-400 px-4 py-2 text-sm font-medium transition-colors"
//             onClick={handleLinkClick}
//           >
//             Packages
//           </Link>

//           <Link
//             href="/contact"
//             className="text-gray-200 hover:text-blue-400 px-4 py-2 text-sm font-medium transition-colors"
//             onClick={handleLinkClick}
//           >
//             Contact Us
//           </Link>
//         </div>

//         {/* Hamburger Icon */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
//         >
//           <span className="sr-only">Open menu</span>
//           {!menuOpen ? (
//             <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="white">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           ) : (
//             <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="white">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden absolute top-16 left-0 right-0 bg-gray-900 shadow-lg ${menuOpen ? 'block' : 'hidden'}`}>
//         <div className="pt-2 pb-3 space-y-1 text-center">
//           <Link
//             href="/"
//             className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-blue-500/10"
//             onClick={handleLinkClick}
//           >
//             Home
//           </Link>

//           <Link
//             href="/destination"
//             className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-blue-500/10"
//             onClick={handleLinkClick}
//           >
//             Destinations
//           </Link>

// <div className="w-full flex justify-center">
//   <button
//     onClick={toggleDropdown}
//     className="w-48 px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 bg-transparent hover:bg-transparent flex justify-center items-center gap-1"
//   >
//     Trip Type
//     <svg
//       className={`h-5 w-5 text-white ${dropdownOpen ? 'rotate-180' : ''} transition-transform`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//     </svg>
//   </button>
// </div>

//           {dropdownOpen && (
//             <div className="w-full flex justify-center">
//               <div className="space-y-1 w-60 bg-white/5 rounded-md shadow-md">
//                 {['mountain', 'beach', 'religious', 'treks', 'offbeat', 'other'].map((type) => (
//                   <button
//                     key={type}
//                     onClick={() => handleTripTypeChange(type)}
//                     className="block w-full text-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-blue-400 hover:bg-blue-500/10 capitalize"
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <Link
//             href="/package"
//             className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-blue-500/10"
//             onClick={handleLinkClick}
//           >
//             Packages
//           </Link>

//           <Link
//             href="/contact"
//             className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-400 hover:bg-blue-500/10"
//             onClick={handleLinkClick}
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleTripTypeChange = (type) => {
    if (type) {
      router.push(`/triptype/${type}`);
      setMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-logo">
          <Link href="/" className="nav-logo" onClick={handleLinkClick}>
            Desire<span>4</span>Travels
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={`nav-container ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-menu">
          <li>
            <Link href="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="https://saarthi.desire4travels.com/" className="nav-link" onClick={handleLinkClick}>
              Saarthi AI
            </Link>
          </li>
          <li>
            <Link href="/destination" className="nav-link" onClick={handleLinkClick}>
              Destinations
            </Link>
          </li>
          <li className="dropdown">
            <div className="dropdown-container">
              <button className="dropdown-toggle">TRIP TYPE</button>
              <ul className="dropdown-menu">
                {["mountain", "beach", "religious", "treks", "offbeat", "desert", "cityscape", "other"].map((type) => (
                  <li key={type}>
                    <button onClick={() => handleTripTypeChange(type)}>
                      {type.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link href="/package" className="nav-link" onClick={handleLinkClick}>
              Packages
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" onClick={handleLinkClick}>
              Contact Us
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

