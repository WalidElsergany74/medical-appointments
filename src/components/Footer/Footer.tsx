import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../../public/assests/logo.webp"
import Image from "next/image";
const Footer = () => {
  return (
    <footer className=" py-10 ">
      <div className="container mx-auto ">
        {/* الأقسام */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
          {/* الشعار + الوصف */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Image src={logo} alt="Logo" width={500} height={300}/>
            
            </h2>
            <p className="text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nobis excepturi...
            </p>
          </div>

          {/* روابط الشركة */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>

          {/* المدونة */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Blog</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Getting Started With HTML and CSS</a></li>
              <li><a href="#" className="hover:text-primary">What Is Flex And When to Use It?</a></li>
              <li><a href="#" className="hover:text-primary">How TailwindCSS Can Help Your Productivity?</a></li>
              <li><a href="#" className="hover:text-primary">5 Tips to Make Responsive Website</a></li>
            </ul>
          </div>

          {/* أيقونات التواصل */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-primary hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-primary hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-primary hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-primary hover:text-white transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

     
      </div>
    </footer>
  );
};

export default Footer;
