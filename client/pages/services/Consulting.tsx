import Layout from "@/components/Layout";
import { Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Consulting() {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://img.freepik.com/free-photo/business-meeting-office_1268-21517.jpg?t=st=1763453817~exp=1763457417~hmac=7fdfd63dcf586ed5d1d41fb33b2a1dcea968351f11b1d4c3c6faed8df334c550&w=1060"
                alt="Consulting and strategy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-100 p-4 rounded-lg">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Business & Strategy Consulting</h1>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              Advisory services to help organizations scale, optimize operations, and enter new markets.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-gray-900">What We Offer:</h3>
              <ul className="space-y-3 list-inside list-disc text-gray-700">
                <li>Market Entry Strategy & Planning</li>
                <li>Operational Efficiency & Process Design</li>
                <li>Digital Transformation Roadmaps</li>
                <li>Training & Capacity Building</li>
              </ul>
            </div>

            <Link to="/services" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700">
              Back to Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
