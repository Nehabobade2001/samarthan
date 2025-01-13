


// import React from 'react';
// // import logonew from '../assets/catseyeLogo.png'
// // import logo from "../assets/catseyeLogo.png";

// const Footer = () => {
//   return (
//     <footer className=" text-white"  style={{
//         backgroundImage:
//           "linear-gradient(to right, #0A0E30, #420C69, #090E2D, #080E2D)",
//       }}>
        
//       <div className="container mx-auto px-4 py-16 max-w-7xl">
//         <div className="grid grid-cols-1 md:grid-cols-4 ">
//           {/* Logo and Description Section */}
//           <div className="">
//           <div className="h-12 w-52 mb-4 ">
//           {/* <img
//             src={logo}
//             alt="Logo"
//             className="w-full h-full object-cover bg-transparent mb-10"
//           /> */}
//         </div>

//             <p className="text-gray-300 ">
//               AI World is a rare element found in asteroids, believed to have formed during the birth of the cosmos.
//             </p>
//           </div>


//           {/* Company Section */}
//           <div className="col-span-1">
//             <h3 className="text-xl font-semibold mb-6">Company</h3>
//             <ul className="space-y-1">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
//             </ul>
//           </div>

//           {/* Services Section */}
//           <div className="col-span-1">
//             <h3 className="text-xl font-semibold mb-6">Services</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact us</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Downloads & Resources</a></li>
//             </ul>
//           </div>

//           {/* Account Section */}
//           <div className="col-span-1">
//             <h3 className="text-xl font-semibold mb-6">Account</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
//                   <span>Facebook</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.767-1.57.347-.13 2.382-.806 4.03-1.357 1.746-.584 3.84-1.285 6.268-2.208 4.29-1.634 8.53-3.252 9.147-3.486.08-.03.054-.03.082-.005z"/></svg>
//                   <span>Telegram</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
//                   <span>Twitter</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
//                   <span>Pinterest</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
      

//       {/* Copyright Section */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 py-6">
//           <p className="text-center text-gray-400">
//             © 2024 AI World. All Rights Reserved
//           </p>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <button 
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
//       >
//         <svg 
//           className="w-6 h-6 text-white" 
//           fill="none" 
//           stroke="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path 
//             strokeLinecap="round" 
//             strokeLinejoin="round" 
//             strokeWidth={2} 
//             d="M5 10l7-7m0 0l7 7m-7-7v18" 
//           />
//         </svg>
//       </button>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import blog from "../assets/about.webp";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold">Samarthan</h2>
          <p className="mt-2">
            Samarthan completed 25 years of existence dedicated to promoting participatory development and governance.
          </p>
          <p className="mt-2">
            <strong>Address:</strong> 36, Green Avenue, Chuna Bhatti, Kolar Road, Bhopal, MP, India
          </p>
          <p>
            <strong>Phone:</strong> +91-755-2467625, +91-9893563713
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@samarthan.org" className="underline">info@samarthan.org</a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold">Samarthan Social</h2>
          <iframe
            className="mt-2 border-0 w-52 h-32"
            src={blog}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            title="Facebook Page"
          ></iframe>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2 mt-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Work</a></li>
            <li><a href="#" className="hover:underline">Resources</a></li>
            <li><a href="#" className="hover:underline">Training Centre</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-lg font-semibold">Important Links</h2>
          <ul className="space-y-2 mt-2">
            <li><a href="#" className="hover:underline">Annual Reports</a></li>
            <li><a href="#" className="hover:underline">Research Reports</a></li>
            <li><a href="#" className="hover:underline">Manuals</a></li>
            <li><a href="#" className="hover:underline">Communication Materials</a></li>
            <li><a href="#" className="hover:underline">Newsletters</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-6 pt-4 text-center text-sm">
        © 1995-2025 Samarthan - Centre for Development Support. All Rights Reserved.  
        <br />
        Designed & Developed by: <span className="font-semibold">G-Infosoft Technologies</span> | Sitemap
      </div>
    </footer>
  );
};

export default Footer;
