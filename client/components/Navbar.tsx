import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => setDropdownOpen(false));

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Drone Services", href: "/drone-services" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "IT Solutions", href: "/services/it" },
    { name: "Manpower", href: "/services/manpower" },
    { name: "Drone Services", href: "/drone-services" },
    { name: "Education", href: "/services/education" },
    { name: "Consulting", href: "/services/consulting" },
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-sky-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-1">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline font-semibold">
                  Call Us: +91 9631681403
                </span>
                <span className="sm:hidden font-semibold">+91 9631681403</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline font-semibold">
                  contact@netbrig.com
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Facebook className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
              <Linkedin className="w-4 h-4" />
              <Youtube className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Main */}
      <div className="bg-white border-b border-gray-200 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/netbring2.jpeg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/netbrig-logo-placeholder.svg";
                }}
                alt="NETBRIG"
                className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
              />
              <span className="font-bold text-xl text-gray-900 hidden sm:inline">
                NETBRIG
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {links.map((link) =>
                link.name !== "Services" ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen((v) => !v)}
                      onMouseEnter={() => setDropdownOpen(true)}
                      aria-expanded={dropdownOpen}
                      className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1">
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              to={s.href}
                              onClick={() => setDropdownOpen(false)}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}

              {/* Enquiry Button */}
              <button
                onClick={() => setShowEnquiry(true)}
                className="bg-blue-600 text-white px-3 py-1 rounded-md"
              >
                Enquiry Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-40"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white pb-4 border-t border-gray-200 z-50 shadow-lg">
              {links.map((link) =>
                link.name !== "Services" ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div key={link.href} className="px-4 py-2">
                    <div className="text-gray-800 font-medium mb-2">Services</div>
                    <div className="pl-4">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg p-6 w-11/12 sm:w-96 shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-xl font-bold mb-4 text-gray-800">Enquiry Form</h2>

            {/* WHATSAPP FORM */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();

                const name = (e.currentTarget.elements.namedItem(
                  "name"
                ) as HTMLInputElement).value;
                const email = (e.currentTarget.elements.namedItem(
                  "email"
                ) as HTMLInputElement).value;
                const phone = (e.currentTarget.elements.namedItem(
                  "phone"
                ) as HTMLInputElement).value;
                const subject = (e.currentTarget.elements.namedItem(
                  "subject"
                ) as HTMLSelectElement).value;
                const company = (e.currentTarget.elements.namedItem(
                  "company"
                ) as HTMLInputElement).value;
                const message = (e.currentTarget.elements.namedItem(
                  "message"
                ) as HTMLTextAreaElement).value;

                const whatsappNumber = "919631681403";

                const text = `*New Enquiry Received*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Company:* ${company}\n*Subject:* ${subject}\n*Message:* ${message}`;

                const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  text
                )}`;

                window.open(url, "_blank");
              }}
            >
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                name="phone"
                type="text"
                placeholder="Phone"
                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="company"
                type="text"
                placeholder="Company Name"
                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="subject"
                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="IT Solutions">IT Solutions</option>
                <option value="Manpower">Manpower</option>
                <option value="Drone Services">Drone Services</option>
                <option value="Education Services">Education Services</option>
                <option value="Partnership">Partnership</option>
                <option value="Support">Support</option>

              </select>

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

/* Outside Click Hook */
function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!(e.target instanceof Node)) return;
      if (!ref.current.contains(e.target)) handler();
    }

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [ref, handler]);
}


//import { useState, useRef, useEffect } from "react";
//import { Link } from "react-router-dom";
//import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
//
//export default function Navbar() {
//  const [isOpen, setIsOpen] = useState(false);
//  const [dropdownOpen, setDropdownOpen] = useState(false);
//  const [showEnquiry, setShowEnquiry] = useState(false);
//  const dropdownRef = useRef<HTMLDivElement | null>(null);
//  useOutsideClick(dropdownRef, () => setDropdownOpen(false));
//
//  const toggleMenu = () => {
//    setIsOpen(!isOpen);
//  };
//
//  const links = [
//    { name: "Home", href: "/" },
//    { name: "About", href: "/about" },
//    { name: "Services", href: "/services" },
//    { name: "Drone Services", href: "/drone-services" },
//    { name: "Contact", href: "/contact" },
//  ];
//
//  const services = [
//    { name: "IT Solutions", href: "/services/it" },
//    { name: "Manpower", href: "/services/manpower" },
//    { name: "Drone Services", href: "/drone-services" },
//    { name: "Education", href: "/services/education" },
//    { name: "Consulting", href: "/services/consulting" },
//  ];
//
//  return (
//    <nav className="sticky top-0 z-50">
//      {/* Top bar */}
//      <div className="bg-sky-700 text-white text-sm">
//        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//          <div className="flex items-center justify-between gap-4 py-1">
//            <div className="flex items-center gap-4">
//              <div className="flex items-center gap-2">
//                <Phone className="w-4 h-4" />
//                <span className="hidden sm:inline font-semibold">Call Us: +91 9631681403</span>
//                <span className="sm:hidden font-semibold">+91 9631681403</span>
//              </div>
//              <div className="flex items-center gap-2">
//                <Mail className="w-4 h-4" />
//                <span className="hidden sm:inline font-semibold">contact@netbrig.com</span>
//              </div>
//            </div>
//            <div className="flex items-center gap-3">
//              <Facebook className="w-4 h-4" />
//              <Instagram className="w-4 h-4" />
//              <Linkedin className="w-4 h-4" />
//              <Youtube className="w-4 h-4" />
//            </div>
//          </div>
//        </div>
//      </div>
//
//      {/* Navbar */}
//      <div className="bg-white border-b border-gray-200 shadow-sm relative">
//        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//          <div className="flex justify-between items-center h-16 py-2">
//
//            {/* Logo */}
//            <Link to="/" className="flex items-center gap-3">
//              <img
//                src="/netbring2.jpeg"
//                onError={(e) => {
//                  const target = e.currentTarget as HTMLImageElement;
//                  target.onerror = null;
//                  target.src = "/netbrig-logo-placeholder.svg";
//                }}
//                alt="NETBRIG"
//                className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
//              />
//              <span className="font-bold text-xl text-gray-900 hidden sm:inline">
//                NETBRIG
//              </span>
//            </Link>
//
//            {/* Desktop Menu */}
//            <div className="hidden md:flex gap-8 items-center">
//              {links.map((link) =>
//                link.name !== "Services" ? (
//                  <Link
//                    key={link.href}
//                    to={link.href}
//                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//                  >
//                    {link.name}
//                  </Link>
//                ) : (
//                  <div key={link.href} className="relative" ref={dropdownRef}>
//                    <button
//                      onClick={() => setDropdownOpen((v) => !v)}
//                      onMouseEnter={() => setDropdownOpen(true)}
//                      aria-expanded={dropdownOpen}
//                      className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
//                    >
//                      {link.name}
//                      <ChevronDown className="w-4 h-4" />
//                    </button>
//
//                    {dropdownOpen && (
//                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
//                        <div className="py-1">
//                          {services.map((s) => (
//                            <Link
//                              key={s.href}
//                              to={s.href}
//                              onClick={() => setDropdownOpen(false)}
//                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
//                            >
//                              {s.name}
//                            </Link>
//                          ))}
//                        </div>
//                      </div>
//                    )}
//                  </div>
//                )
//              )}
//
//              {/* Enquiry Now Button → Opens Popup */}
//              <button
//                onClick={() => setShowEnquiry(true)}
//                className="bg-blue-600 text-white px-3 py-1 rounded-md"
//              >
//                Enquiry Now
//              </button>
//            </div>
//
//            {/* Mobile Menu Button */}
//            <button
//              onClick={toggleMenu}
//              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-40"
//            >
//              {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
//            </button>
//          </div>
//
//          {/* Mobile Dropdown */}
//          {isOpen && (
//            <div className="md:hidden absolute top-full left-0 w-full bg-white pb-4 border-t border-gray-200 z-50 shadow-lg">
//              {links.map((link) =>
//                link.name !== "Services" ? (
//                  <Link
//                    key={link.href}
//                    to={link.href}
//                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                    onClick={() => setIsOpen(false)}
//                  >
//                    {link.name}
//                  </Link>
//                ) : (
//                  <div key={link.href} className="px-4 py-2">
//                    <div className="text-gray-800 font-medium mb-2">Services</div>
//                    <div className="pl-4">
//                      {services.map((s) => (
//                        <Link
//                          key={s.href}
//                          to={s.href}
//                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                          onClick={() => setIsOpen(false)}
//                        >
//                          {s.name}
//                        </Link>
//                      ))}
//                    </div>
//                  </div>
//                )
//              )}
//            </div>
//          )}
//        </div>
//      </div>
//
//      {/* ********************* Enquiry Form Modal ********************* */}
//      {showEnquiry && (
//        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
//          <div className="bg-white rounded-lg p-6 w-11/12 sm:w-96 shadow-xl relative">
//
//            {/* Close Button */}
//            <button
//              onClick={() => setShowEnquiry(false)}
//              className="absolute top-3 right-3 text-gray-600 hover:text-black"
//            >
//              ✕
//            </button>
//
//            <h2 className="text-xl font-bold mb-4 text-gray-800">Enquiry Form</h2>
//
//            {/* Form (WhatsApp Submit) */}
//            <form
//              className="space-y-4"
//              onSubmit={(e) => {
//                e.preventDefault();
//
//                const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value;
//                const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
//                const phone = (e.currentTarget.elements.namedItem("phone") as HTMLInputElement).value;
//                const message = (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value;
//
//                const whatsappNumber = "919631681403";
//
//                const text = `*New Enquiry Received*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;
//
//                const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
//
//                window.open(url, "_blank");
//              }}
//            >
//              <input
//                name="name"
//                type="text"
//                placeholder="Your Name"
//                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
//              />
//
//              <input
//                name="email"
//                type="email"
//                placeholder="Your Email"
//                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
//              />
//
//              <input
//                name="phone"
//                type="text"
//                placeholder="Phone Number"
//                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
//              />
//
//              <textarea
//                name="message"
//                placeholder="Your Message"
//                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
//                rows={3}
//              />
//
//              <button
//                type="submit"
//                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//              >
//                Send on WhatsApp
//              </button>
//            </form>
//
//          </div>
//        </div>
//      )}
//    </nav>
//  );
//}
//
///* Outside Click Hook */
//function useOutsideClick(ref: React.RefObject<HTMLElement>, handler: () => void) {
//  useEffect(() => {
//    function onClick(e: MouseEvent) {
//      if (!ref.current) return;
//      if (!(e.target instanceof Node)) return;
//      if (!ref.current.contains(e.target)) handler();
//    }
//
//    document.addEventListener("mousedown", onClick);
//    return () => document.removeEventListener("mousedown", onClick);
//  }, [ref, handler]);
//}


//import { useState, useRef, useEffect } from "react";
//import { Link } from "react-router-dom";
//import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
//import { cn } from "@/lib/utils";
//
//export default function Navbar() {
//  const [isOpen, setIsOpen] = useState(false);
//  const [dropdownOpen, setDropdownOpen] = useState(false);
//  const dropdownRef = useRef<HTMLDivElement | null>(null);
//  useOutsideClick(dropdownRef, () => setDropdownOpen(false));
//
//  const toggleMenu = () => {
//    setIsOpen(!isOpen);
//  };
//
//  const links = [
//    { name: "Home", href: "/" },
//    { name: "About", href: "/about" },
//    { name: "Services", href: "/services" },
//    { name: "Drone Services", href: "/drone-services" },
//    { name: "Contact", href: "/contact" },
//  ];
//
//  const services = [
//    { name: "IT Solutions", href: "/services/it" },
//    { name: "Manpower", href: "/services/manpower" },
//    { name: "Drone Services", href: "/drone-services" },
//    { name: "Education", href: "/services/education" },
//    { name: "Consulting", href: "/services/consulting" },
//  ];
//
//  return (
//    <nav className="sticky top-0 z-50">
//      {/* Top bar with contact and social links */}
//      <div className="bg-sky-700 text-white text-sm">
//        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//          <div className="flex items-center justify-between gap-4 py-1">
//            <div className="flex items-center gap-4">
//              <div className="flex items-center gap-2">
//                <Phone className="w-4 h-4" />
//                <span className="hidden sm:inline font-semibold">Call Us: +91 9631681403</span>
//                <span className="sm:hidden font-semibold">+91 9631681403</span>
//              </div>
//              <div className="flex items-center gap-2">
//                <Mail className="w-4 h-4" />
//                <span className="hidden sm:inline font-semibold">contact@netbrig.com</span>
//              </div>
//            </div>
//            <div className="flex items-center gap-3">
//              <a href="#" aria-label="Facebook" className="hover:opacity-90"><Facebook className="w-4 h-4" /></a>
//              <a href="#" aria-label="Instagram" className="hover:opacity-90"><Instagram className="w-4 h-4" /></a>
//              <a href="#" aria-label="LinkedIn" className="hover:opacity-90"><Linkedin className="w-4 h-4" /></a>
//              <a href="#" aria-label="YouTube" className="hover:opacity-90"><Youtube className="w-4 h-4" /></a>
//            </div>
//          </div>
//        </div>
//      </div>
//
//  <div className="bg-white border-b border-gray-200 shadow-sm relative">
//  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//  <div className="flex justify-between items-center h-16 py-2">
//          {/* Logo */}
//          <Link to="/" className="flex items-center gap-3">
//            <img
//              src="/netbring2.jpeg"
//              onError={(e) => {
//                const target = e.currentTarget as HTMLImageElement;
//                target.onerror = null;
//                target.src = "/netbrig-logo-placeholder.svg";
//              }}
//              alt="NETBRIG"
//              className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
//            />
//            <span className="font-bold text-xl text-gray-900 hidden sm:inline">
//              NETBRIG
//            </span>
//          </Link>
//
//          {/* Desktop Menu */}
//          <div className="hidden md:flex gap-8 items-center">
//            {links.map((link) =>
//              link.name !== "Services" ? (
//                <Link
//                  key={link.href}
//                  to={link.href}
//                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//                >
//                  {link.name}
//                </Link>
//              ) : (
//                <div key={link.href} className="relative" ref={dropdownRef}>
//                  <button
//                    onClick={() => setDropdownOpen((v) => !v)}
//                    onMouseEnter={() => setDropdownOpen(true)}
//                    aria-expanded={dropdownOpen}
//                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
//                  >
//                    {link.name}
//                    <ChevronDown className="w-4 h-4" />
//                  </button>
//
//                  {dropdownOpen && (
//                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
//                      <div className="py-1">
//                        {services.map((s) => (
//                          <Link
//                            key={s.href}
//                            to={s.href}
//                            onClick={() => setDropdownOpen(false)}
//                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
//                          >
//                            {s.name}
//                          </Link>
//                        ))}
//                      </div>
//                    </div>
//                  )}
//                </div>
//              )
//            )}
//            <button className=" bg-blue-600 text-white px-3 py-1 rounded-md">Enquiry Now</button>
//          </div>
//
//          {/* Mobile Menu Button */}
//          <button
//            onClick={toggleMenu}
//            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-40"
//            aria-label="Toggle menu"
//          >
//            {isOpen ? (
//              <X className="w-6 h-6 text-gray-700" />
//            ) : (
//              <Menu className="w-6 h-6 text-gray-700" />
//            )}
//          </button>
//        </div>
//
//          {/* Mobile Menu (absolute overlay anchored to header) */}
//        {isOpen && (
//          <div className="md:hidden absolute top-full left-0 w-full bg-white pb-4 border-t border-gray-200 z-50 max-h-[calc(100vh-4rem)] overflow-auto shadow-lg">
//            {links.map((link) =>
//              link.name !== "Services" ? (
//                <Link
//                  key={link.href}
//                  to={link.href}
//                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                  onClick={() => setIsOpen(false)}
//                >
//                  {link.name}
//                </Link>
//              ) : (
//                <div key={link.href} className="px-4 py-2">
//                  <div className="text-gray-800 font-medium mb-2">Services</div>
//                  <div className="pl-4">
//                    {services.map((s) => (
//                      <Link
//                        key={s.href}
//                        to={s.href}
//                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                        onClick={() => setIsOpen(false)}
//                      >
//                        {s.name}
//                      </Link>
//                    ))}
//                  </div>
//                </div>
//              )
//            )}
//          </div>
//        )}
//      </div>
//    </div>
//    </nav>
//  );
//}
//
//// Close dropdown when clicking outside
//function useOutsideClick(ref: React.RefObject<HTMLElement>, handler: () => void) {
//  useEffect(() => {
//    function onClick(e: MouseEvent) {
//      if (!ref.current) return;
//      if (!(e.target instanceof Node)) return;
//      if (!ref.current.contains(e.target as Node)) {
//        handler();
//      }
//    }
//
//    document.addEventListener("mousedown", onClick);
//    return () => document.removeEventListener("mousedown", onClick);
//  }, [ref, handler]);
//}
//
