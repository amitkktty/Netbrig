import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <Layout>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-56 md:h-72 overflow-hidden rounded-2xl shadow-lg mb-8">
            <img
              src="https://images.unsplash.com/photo-1526378725021-0b8a6c7d9c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
              alt="Terms and agreement"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-700 mb-4">Welcome to NETBRIG. These Terms of Service govern your use of our website and services. Please read them carefully.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Acceptance</h2>
            <p className="text-gray-700">By accessing NETBRIG, you agree to these terms. If you do not agree, please do not use our services.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Use of Services</h2>
            <p className="text-gray-700">You agree to provide accurate information and to use our services lawfully. We reserve the right to suspend accounts that violate our policies.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Limitation of Liability</h2>
            <p className="text-gray-700">NETBRIG is not liable for indirect or incidental damages arising from use of our services to the fullest extent permitted by law.</p>

            <div className="mt-8">
              <Link to="/" className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700">Return home</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
