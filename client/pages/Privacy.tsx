import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-56 md:h-72 overflow-hidden rounded-2xl shadow-lg mb-8">
            <img
              src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
              alt="Privacy and security"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-700 mb-4">
              At NETBRIG, we respect your privacy. This policy explains what information we collect, why we collect it, and how we use it to provide and improve our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Information We Collect</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Contact details (name, email, phone) when you reach out or sign up.</li>
              <li>Usage data to understand how people use our website and services.</li>
              <li>Cookies and analytics identifiers to improve your experience.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">How We Use Information</h2>
            <p className="text-gray-700">We use information to respond to inquiries, provide services, send updates, and improve the site. We never sell your personal data.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Security</h2>
            <p className="text-gray-700">We implement industry-standard measures to protect your data, and access is limited to authorized team members only.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Contact</h2>
            <p className="text-gray-700">If you have privacy questions, email us at <a className="text-blue-600" href="mailto:contact@netbrig.com">contact@netbrig.com</a>.</p>

            <div className="mt-8">
              <Link to="/" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700">
                Return home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
