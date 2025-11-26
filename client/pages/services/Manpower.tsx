import Layout from "@/components/Layout";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Manpower() {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                alt="Manpower and team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-4 rounded-lg">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Essential Manpower</h1>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            Reliable workforce solutions connecting skilled professionals with opportunities.
          </p>

          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-gray-900">Our Services:</h3>
            <ul className="space-y-3 list-inside list-disc text-gray-700">
              <li>Exam Invigilators — Trained professionals for educational examination supervision</li>
              <li>Election Staff — Skilled workforce for election management and operations</li>
              <li>General Manpower — Flexible staffing solutions for various industries</li>
            </ul>
          </div>

          <Link to="/services" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700">
            Back to Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
