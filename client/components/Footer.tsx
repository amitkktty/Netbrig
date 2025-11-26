import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-white py-12 mt-20"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(139,92,246,0.85)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/netbring2.jpeg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/netbrig-logo-placeholder.svg";
                }}
                alt="NETBRIG"
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-xl">NETBRIG</span>
            </div>
            <p className="text-white/90 text-sm mb-4">
              NETBRIG is a multi-sector organization delivering IT, manpower, drone and education solutions. We empower communities and businesses with innovative services tailored for growth.
            </p>
            <p className="text-white/80 text-sm">
              Address: NETBRIG Headquarters, Patna, Bihar
            </p>
            <p className="text-white/80 text-sm mt-2">Phone: +91 9631681403</p>
            <p className="text-white/80 text-sm">Email: contact@netbrig.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/drone-services" className="hover:text-white transition-colors">Drone Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/services/it" className="hover:text-white transition-colors">IT Solutions</Link>
              </li>
              <li>
                <Link to="/services/manpower" className="hover:text-white transition-colors">Manpower Supply</Link>
              </li>
              <li>
                <Link to="/drone-services" className="hover:text-white transition-colors">Drone Services</Link>
              </li>
              <li>
                <Link to="/services/education" className="hover:text-white transition-colors">Education</Link>
              </li>
              <li>
                <Link to="/services/consulting" className="hover:text-white transition-colors">Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Social & Policies */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect & Policies</h3>
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/netbrig" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.facebook.com/netbrig" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/netbrig?original_referer=https%3A%2F%2Fnetbrig.com%2F" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.instagram.com/netbrig_/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>

            <div className="space-y-2 text-white/80">
              <Link to="/privacy" className="block hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookie" className="block hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-white/90 text-sm">© {currentYear} NETBRIG. All rights reserved.</p>
            <p className="text-white/80 text-xs mt-1">Designed to empower communities through technology, education and sustainable practices.</p>
          </div>

          <div className="flex gap-6 text-white/90 text-sm flex-col sm:flex-row">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
