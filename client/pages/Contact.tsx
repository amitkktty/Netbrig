import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "general",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ WhatsApp Form Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const msg = `📩 New Inquiry From Website:

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🏢 Company: ${formData.company}
🎯 Subject: ${formData.subject}

💬 Message:
${formData.message}
`;

    const whatsappURL =
      `https://wa.me/919631681403?text=` + encodeURIComponent(msg);

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "general",
        message: "",
      });
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg mb-8">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
              alt="Contact team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-1">+91 9631681403</p>
              <p className="text-gray-600">Available Monday to Friday, 9am-6pm IST</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-1">contact@netbrig.com</p>
              <p className="text-gray-600">We'll respond within 24 hours</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 mb-1">NETBRIG Headquarters</p>
              <p className="text-gray-600">Patna, Bihar</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
                  <div className="text-green-600 text-4xl mb-4">✓</div>
                  <h3 className="text-2xl font-semibold text-green-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="it-solutions">IT Solutions</option>
                      <option value="manpower">Essential Manpower</option>
                      <option value="drone-services">Drone Services</option>
                      <option value="education">Education Services</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="support">Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message (WhatsApp)
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * indicates required fields
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Find Us
          </h2>

          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5869421677283!2d85.1376!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a8f3d7d588a5%3A0x123456789abcd!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Response Time", description: "Usually within 24 hours" },
              { title: "Support Hours", description: "Monday - Friday, 9am-6pm IST" },
              { title: "Availability", description: "Available across India" },
              { title: "Languages", description: "English, Hindi & Regional Languages" },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}



//import { useState } from "react";
//import Layout from "@/components/Layout";
//import { Phone, Mail, MapPin, Send } from "lucide-react";
//
//export default function Contact() {
//  const [formData, setFormData] = useState({
//    name: "",
//    email: "",
//    phone: "",
//    company: "",
//    subject: "general",
//    message: "",
//  });
//
//  const [submitted, setSubmitted] = useState(false);
//
//  const handleChange = (
//    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//  ) => {
//    const { name, value } = e.target;
//    setFormData((prev) => ({
//      ...prev,
//      [name]: value,
//    }));
//  };
//
//  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//    e.preventDefault();
//    console.log("Form submitted:", formData);
//    setSubmitted(true);
//    setTimeout(() => {
//      setSubmitted(false);
//      setFormData({
//        name: "",
//        email: "",
//        phone: "",
//        company: "",
//        subject: "general",
//        message: "",
//      });
//    }, 3000);
//  };
//
//  return (
//    <Layout>
//      {/* Hero Section */}
//      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
//        <div className="max-w-7xl mx-auto">
//          <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg mb-8">
//            <img
//              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
//              alt="Contact team"
//              className="w-full h-full object-cover"
//            />
//          </div>
//
//          <div className="text-center max-w-3xl mx-auto">
//            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h1>
//            <p className="text-xl text-gray-600">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
//          </div>
//        </div>
//      </section>
//
//      {/* Contact Info + Form */}
//      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//        <div className="max-w-7xl mx-auto">
//          <div className="grid md:grid-cols-3 gap-8 mb-16">
//            {/* Contact Info Cards */}
//            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
//              <Phone className="w-12 h-12 text-blue-600 mb-4" />
//              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
//              <p className="text-gray-600 mb-1">+91 9631681403</p>
//              <p className="text-gray-600">Available Monday to Friday, 9am-6pm IST</p>
//            </div>
//
//            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
//              <Mail className="w-12 h-12 text-blue-600 mb-4" />
//              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
//              <p className="text-gray-600 mb-1">contact@netbrig.com</p>
//              <p className="text-gray-600">We'll respond within 24 hours</p>
//            </div>
//
//            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
//              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
//              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
//              <p className="text-gray-600 mb-1">NETBRIG Headquarters</p>
//              <p className="text-gray-600">Patna, Bihar</p>
//            </div>
//          </div>
//
//          {/* Contact Form */}
//          <div className="max-w-2xl mx-auto">
//            <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12">
//              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
//
//              {submitted ? (
//                <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
//                  <div className="text-green-600 text-4xl mb-4">✓</div>
//                  <h3 className="text-2xl font-semibold text-green-900 mb-2">Thank You!</h3>
//                  <p className="text-green-700">
//                    We've received your message and will get back to you soon.
//                  </p>
//                </div>
//              ) : (
//                <form onSubmit={handleSubmit} className="space-y-6">
//                  <div className="grid md:grid-cols-2 gap-6">
//                    <div>
//                      <label className="block text-sm font-semibold text-gray-900 mb-2">
//                        Full Name *
//                      </label>
//                      <input
//                        type="text"
//                        name="name"
//                        value={formData.name}
//                        onChange={handleChange}
//                        required
//                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                        placeholder="Your name"
//                      />
//                    </div>
//
//                    <div>
//                      <label className="block text-sm font-semibold text-gray-900 mb-2">
//                        Email Address *
//                      </label>
//                      <input
//                        type="email"
//                        name="email"
//                        value={formData.email}
//                        onChange={handleChange}
//                        required
//                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                        placeholder="your@email.com"
//                      />
//                    </div>
//                  </div>
//
//                  <div className="grid md:grid-cols-2 gap-6">
//                    <div>
//                      <label className="block text-sm font-semibold text-gray-900 mb-2">
//                        Phone Number
//                      </label>
//                      <input
//                        type="tel"
//                        name="phone"
//                        value={formData.phone}
//                        onChange={handleChange}
//                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                        placeholder="+91 XXXXXXXXXX"
//                      />
//                    </div>
//
//                    <div>
//                      <label className="block text-sm font-semibold text-gray-900 mb-2">
//                        Company Name
//                      </label>
//                      <input
//                        type="text"
//                        name="company"
//                        value={formData.company}
//                        onChange={handleChange}
//                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                        placeholder="Your company"
//                      />
//                    </div>
//                  </div>
//
//                  <div>
//                    <label className="block text-sm font-semibold text-gray-900 mb-2">
//                      Subject *
//                    </label>
//                    <select
//                      name="subject"
//                      value={formData.subject}
//                      onChange={handleChange}
//                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                    >
//                      <option value="general">General Inquiry</option>
//                      <option value="it-solutions">IT Solutions</option>
//                      <option value="manpower">Essential Manpower</option>
//                      <option value="drone-services">Drone Services</option>
//                      <option value="education">Education Services</option>
//                      <option value="partnership">Partnership Opportunities</option>
//                      <option value="support">Support</option>
//                    </select>
//                  </div>
//
//                  <div>
//                    <label className="block text-sm font-semibold text-gray-900 mb-2">
//                      Message *
//                    </label>
//                    <textarea
//                      name="message"
//                      value={formData.message}
//                      onChange={handleChange}
//                      required
//                      rows={6}
//                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                      placeholder="Tell us more about your inquiry..."
//                    ></textarea>
//                  </div>
//
//                  <button
//                    type="submit"
//                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//                  >
//                    <Send className="w-5 h-5" />
//                    Send Message
//                  </button>
//
//                  <p className="text-sm text-gray-500 text-center">* indicates required fields</p>
//                </form>
//              )}
//            </div>
//          </div>
//        </div>
//      </section>
//
//      {/* Map Section */}
//      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//        <div className="max-w-7xl mx-auto">
//          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Find Us</h2>
//          <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
//            <div className="text-center">
//              <MapPin className="w-16 h-16 text-blue-600/30 mx-auto mb-4" />
//              <p className="text-gray-600 text-lg">Map placeholder</p>
//              <p className="text-gray-500">Location information here</p>
//            </div>
//          </div>
//        </div>
//      </section>
//
//      {/* Quick Links */}
//      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//        <div className="max-w-7xl mx-auto">
//          <div className="grid md:grid-cols-4 gap-8 text-center">
//            {[
//              { title: "Response Time", description: "Usually within 24 hours" },
//              { title: "Support Hours", description: "Monday - Friday, 9am-6pm IST" },
//              { title: "Availability", description: "Available across India" },
//              { title: "Languages", description: "English, Hindi & Regional Languages" },
//            ].map((item, index) => (
//              <div key={index} className="p-6">
//                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
//                <p className="text-gray-600">{item.description}</p>
//              </div>
//            ))}
//          </div>
//        </div>
//      </section>
//    </Layout>
//  );
//}
