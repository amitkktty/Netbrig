import Layout from "@/components/Layout";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Education() {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                alt="Education and students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 p-4 rounded-lg">
              <BookOpen className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">NETBRIG International School</h1>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            Quality education transforming lives, particularly for children from agricultural communities.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Educational Focus:</h3>
            <ul className="space-y-3 list-inside list-disc text-gray-700">
              <li>Holistic Curriculum — Balanced education combining academics with practical skills</li>
              <li>Agricultural Integration — Hands-on learning with modern farming techniques</li>
              <li>Community Empowerment — Dedicated to uplifting underprivileged communities</li>
            </ul>
          </div>

          <div className="mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700">
              Back to Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
