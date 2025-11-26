import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function Cookie() {
  return (
    <Layout>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-56 md:h-72 overflow-hidden rounded-2xl shadow-lg mb-8">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
              alt="Cookies and analytics"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar technologies to improve your experience, analyze traffic, and provide personalized content.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">What are cookies?</h2>
            <p className="text-gray-700">Cookies are small text files stored on your device by websites. They help remember preferences and provide analytics data.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">How we use cookies</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Essential cookies for site functionality.</li>
              <li>Analytics cookies to understand usage and improve the site.</li>
              <li>Optional marketing cookies to show relevant content.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Manage your cookies</h2>
            <p className="text-gray-700">You can manage or disable cookies via your browser settings. Note that disabling some cookies may affect site functionality.</p>

            <div className="mt-8">
              <Link to="/" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700">Return home</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
