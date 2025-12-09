import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Code2, Users, Zap, BookOpen, ArrowRight, ChevronDown, Calculator } from "lucide-react";
import { useState } from "react";

export default function Services() {
  function ServiceDropdown() {
    const [open, setOpen] = useState(false);
    const services = [
      { name: "IT Solutions", href: "/services/it" },
      { name: "Manpower", href: "/services/manpower" },
      { name: "Accounting & Tax", href: "/services/accounting" },
      { name: "Drone Services", href: "/drone-services" },
      { name: "Education", href: "/services/education" },
      { name: "Consulting", href: "/services/consulting" },
    ];

    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-95 transition"
        >
          View All Services
          <ChevronDown className="w-4 h-4" />
        </button>

        {open && (
          <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {services.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  onClick={() => setOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services & Impact
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions across multiple sectors designed to drive your success
            </p>
          </div>
        </div>
      </section>

      {/* Services Dropdown (mobile + desktop) */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <ServiceDropdown />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Service 1: IT Solutions */}
          <div className="mb-20 pb-20 border-b border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <Code2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">NETBRIG IT Solutions</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Empowering businesses through comprehensive technology solutions tailored to your needs.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Our Offerings:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <p className="font-semibold text-gray-900">Custom Software Development</p>
                        <p className="text-gray-600 text-sm">Scalable, secure, and innovative software solutions</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <p className="font-semibold text-gray-900">Digital Marketing</p>
                        <p className="text-gray-600 text-sm">Strategic marketing to grow your online presence</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <p className="font-semibold text-gray-900">IT Support & Maintenance</p>
                        <p className="text-gray-600 text-sm">24/7 technical support and system optimization</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 font-bold">→</span>
                      <div>
                        <p className="font-semibold text-gray-900">CA & Business Services</p>
                        <p className="text-gray-600 text-sm">Financial and compliance expertise for growth</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/services/it"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-96 rounded-2xl flex items-center justify-center">
                <Code2 className="w-32 h-32 text-blue-600/30" />
              </div>
            </div>
          </div>

          {/* Service 2: Manpower */}
          <div className="mb-20 pb-20 border-b border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-green-100 to-green-200 h-96 rounded-2xl flex items-center justify-center">
                <Users className="w-32 h-32 text-green-600/30" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Essential Manpower</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Reliable workforce solutions connecting skilled professionals with opportunities.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Our Services:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">Exam Invigilators</p>
                        <p className="text-gray-600 text-sm">Trained professionals for educational examination supervision</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">Election Staff</p>
                        <p className="text-gray-600 text-sm">Skilled workforce for election management and operations</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">General Manpower</p>
                        <p className="text-gray-600 text-sm">Flexible staffing solutions for various industries</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/services/manpower"
                  className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3: Accounting & Tax Services */}
          <div className="mb-20 pb-20 border-b border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-emerald-100 p-4 rounded-lg">
                    <Calculator className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Accounting & Tax Services</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Professional CA services for GST, Income Tax, and complete financial compliance management.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Our CA Services:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-emerald-600 font-bold">₹</span>
                      <div>
                        <p className="font-semibold text-gray-900">GST Registration & Filing</p>
                        <p className="text-gray-600 text-sm">Complete GST compliance and returns filing</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600 font-bold">₹</span>
                      <div>
                        <p className="font-semibold text-gray-900">Income Tax Services</p>
                        <p className="text-gray-600 text-sm">ITR filing, tax planning, and advisory</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600 font-bold">₹</span>
                      <div>
                        <p className="font-semibold text-gray-900">PAN & Business Registration</p>
                        <p className="text-gray-600 text-sm">PAN, TAN, and company incorporation services</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-600 font-bold">₹</span>
                      <div>
                        <p className="font-semibold text-gray-900">Audit & Bookkeeping</p>
                        <p className="text-gray-600 text-sm">Professional audit and accounting services</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/services/accounting"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 h-96 rounded-2xl flex items-center justify-center">
                <Calculator className="w-32 h-32 text-emerald-600/30" />
              </div>
            </div>
          </div>

          {/* Service 4: Drone Services */}
          <div className="mb-20 pb-20 border-b border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Agriculture Drone Services</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Revolutionary drone technology transforming precision agriculture and crop management.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Advanced Services:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-purple-600 font-bold">→</span>
                      <div>
                        <p className="font-semibold text-gray-900">Precision Spraying</p>
                        <p className="text-gray-600 text-sm">Efficient pesticide and fertilizer application</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-600 font-bold">→</span>
                      <div>
                        <p className="font-semibold text-gray-900">Crop Monitoring</p>
                        <p className="text-gray-600 text-sm">Real-time analysis and health assessment</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-600 font-bold">→</span>
                      <div>
                        <p className="font-semibold text-gray-900">Land Mapping</p>
                        <p className="text-gray-600 text-sm">Detailed agricultural land surveys and analysis</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/drone-services"
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Learn More About Drone Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-96 rounded-2xl flex items-center justify-center">
                <Zap className="w-32 h-32 text-purple-600/30" />
              </div>
            </div>
          </div>

          {/* Service 4: Education */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-orange-100 to-orange-200 h-96 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-orange-600/30" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <BookOpen className="w-8 h-8 text-orange-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">NETBRIG International School</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Quality education transforming lives, particularly for children from agricultural communities.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Educational Focus:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-orange-600 font-bold">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">Holistic Curriculum</p>
                        <p className="text-gray-600 text-sm">Balanced education combining academics with practical skills</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-600 font-bold">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">Agricultural Integration</p>
                        <p className="text-gray-600 text-sm">Hands-on learning with modern farming techniques</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-600 font-bold">✓</span>
                      <div>
                        <p className="font-semibold text-gray-900">Community Empowerment</p>
                        <p className="text-gray-600 text-sm">Dedicated to uplifting underprivileged communities</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/services/education"
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-gray-600 text-lg">Measurable results that matter</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: "1000+", label: "Clients Served" },
              { number: "5000+", label: "Professionals Placed" },
              { number: "10000+", label: "Students Educated" },
              { number: "50000+", label: "Acres Supported" },
            ].map((metric, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.number}</div>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how NETBRIG can help your organization achieve its goals
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
