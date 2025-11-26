import Layout from "@/components/Layout";
import { Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ITSolutions() {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/19256/SM910322.jpg?date=Tue%20Nov%2018%202025%2013:41:42%20GMT+0530%20(India%20Standard%20Time)"
                alt="IT solutions team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <Code2 className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">NETBRIG IT Solutions</h1>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            Empowering businesses through comprehensive technology solutions tailored to your needs.
          </p>

          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-gray-900">Our Offerings:</h3>
            <ul className="space-y-3 list-inside list-disc text-gray-700">
              <li>Custom Software Development — Scalable, secure, and innovative software solutions</li>
              <li>Digital Marketing — Strategic marketing to grow your online presence</li>
              <li>IT Support & Maintenance — 24/7 technical support and system optimization</li>
              <li>CA & Business Services — Financial and compliance expertise for growth</li>
            </ul>
          </div>

          <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
            Back to Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
