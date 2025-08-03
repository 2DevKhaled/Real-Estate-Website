import React from "react";
import footerLogo from "../../assets/footer_logo.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaVimeo } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#0f0f0e] relative -mt-20">
      <div className="max-w-screen-2xl mx-auto pt-20 px-5">
        <div className="text-white py-10">
          <div className="flex felx-col lg:flex-row gap-10 flex-wrap lg:gap-20">
            {/* Brand Section */}
            <div className="flex-1 sm:w-full">
              <h3 className="font-bold text-xl">
                <a href="#" className="flx items-center gap-2 mb-4">
                  <img src={footerLogo} alt="" className="w-8 h-8" />
                  Monks Estate
                </a>
              </h3>
              <p className="text-sm mb-4 text-justify">
                We are your personal real estate navigator, gudiding you to your
                dream property with expert advice.
              </p>
              <form action="" className="flex items-center overflow-hidden">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="flex-1 bg-black text-white px-4 py-2 border border-gray-500 outline-none"
                />
                <button className="text-white border border-[#FF5b28] ml-2 px-4 py-2 transition-all duration-200 ">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex-1 sm:w-full">
              <h4 className="text-lg font-semibold mb-4 ">Links</h4>
              <ul>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    Preperties
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    Preperties Details
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 sm:w-full">
              <h4 className="text-lg font-semibold mb-4 ">Information</h4>
              <ul>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    404
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 sm:w-full">
              <h4 className="text-lg font-semibold mb-4 ">Contact</h4>
              <p className="text-gray-400 text-sm mb-4">+1 7885 389 33</p>
              <p className="text-gray-400 text-sm mb-4">Monks Estate</p>
              <ul className="flex space-x-2">
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    <FaTwitter size={24} className="text-white" />
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    <FaFacebook size={24} className="text-white" />
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    <FaLinkedin size={24} className="text-white" />
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-[#FF5B28] ">
                    <FaVimeo size={24} className="text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
            <p className="text-sm text-center mt-16">
              2025 Design Monks. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
