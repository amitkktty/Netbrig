import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Zap, TrendingUp, Leaf, BarChart3, Check, ArrowRight } from "lucide-react";

export default function DroneServices() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg mb-8">
              <img
                src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/20836/SM1077955.jpg?date=Tue%20Nov%2018%202025%2013:43:11%20GMT+0530%20(India%20Standard%20Time)"
                alt="Drones over farm"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              NETBRIG Agriculture Drone Solutions
            </h1>
            <p className="text-2xl text-purple-600 font-semibold mb-4">
              Advancing Farming with Precision
            </p>
            <p className="text-xl text-gray-600">
              Revolutionary drone technology bringing efficiency and sustainability to modern agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Future of Agriculture</h2>
              <p className="text-lg text-gray-600 mb-4">
                NETBRIG's advanced drone solutions are transforming how farmers manage their crops and land. By combining cutting-edge technology with agricultural expertise, we're helping farmers achieve:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Leaf className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Higher crop yields with precision application</span>
                </li>
                <li className="flex gap-3">
                  <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Cost savings through optimized resource use</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Time efficiency with rapid deployment</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-96 rounded-2xl flex items-center justify-center">
              <Zap className="w-32 h-32 text-purple-600/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Drone Spraying Service */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-96 rounded-2xl flex items-center justify-center">
              <Zap className="w-32 h-32 text-blue-600/30" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Precision Spraying</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced drone spraying technology delivers precise application of pesticides, fertilizers, and other agricultural inputs exactly where they're needed.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Micro-Level Precision</p>
                      <p className="text-gray-600 text-sm">Accurate coverage with minimal waste and chemical use</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Environmental Safety</p>
                      <p className="text-gray-600 text-sm">Reduced chemical runoff and ground contamination</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Time Efficient</p>
                      <p className="text-gray-600 text-sm">Cover larger areas in hours instead of days</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Cost Effective</p>
                      <p className="text-gray-600 text-sm">Reduce operational costs while improving results</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Monitoring & Mapping */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Crop Monitoring & Analytics</h2>
              <p className="text-lg text-gray-600 mb-6">
                Real-time aerial monitoring and advanced analytics help you make data-driven decisions about your farm.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900">Capabilities:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Health Assessment</p>
                      <p className="text-gray-600 text-sm">Identify crop diseases and stress early</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Yield Prediction</p>
                      <p className="text-gray-600 text-sm">Forecast harvest outcomes with accuracy</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Land Mapping</p>
                      <p className="text-gray-600 text-sm">Detailed topographic and vegetation mapping</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Resource Optimization</p>
                      <p className="text-gray-600 text-sm">Optimize water and fertilizer usage</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-96 rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-32 h-32 text-purple-600/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg">Our process from consultation to implementation</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "We analyze your farm and specific needs"
              },
              {
                step: "2",
                title: "Planning",
                description: "Develop a customized drone solution plan"
              },
              {
                step: "3",
                title: "Implementation",
                description: "Deploy drones and monitoring systems"
              },
              {
                step: "4",
                title: "Analysis & Support",
                description: "Continuous monitoring and optimization"
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 pt-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-gray-600 text-lg">Why farmers choose NETBRIG drone services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Increased Productivity",
                description: "Higher yields with optimized crop management"
              },
              {
                icon: <Leaf className="w-12 h-12" />,
                title: "Sustainability",
                description: "Reduced chemical use and environmental impact"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Efficiency",
                description: "Faster operations and reduced labor costs"
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Data-Driven",
                description: "Make informed decisions with accurate analytics"
              },
              {
                icon: <Check className="w-12 h-12" />,
                title: "Reliability",
                description: "Consistent results with advanced technology"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "ROI",
                description: "Quick return on investment through savings"
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What size farms can be serviced?",
                answer: "Our drones can efficiently service farms of any size, from small parcels to thousands of acres. We customize our approach based on your specific needs."
              },
              {
                question: "What weather conditions can drones operate in?",
                answer: "While drones work best in clear conditions, our advanced systems can operate in light rain and various weather patterns. We always ensure safety and optimal conditions."
              },
              {
                question: "How much time does drone spraying take?",
                answer: "A typical farm can be covered in hours, compared to days with traditional methods. The exact time depends on farm size and complexity."
              },
              {
                question: "Is drone farming cost-effective?",
                answer: "Yes! While initial investment exists, our clients typically see 30-50% savings in chemical costs and 20-30% increase in yield within the first season."
              },
              {
                question: "Do I need special training to use drone services?",
                answer: "No. NETBRIG provides all operations and training. We handle everything so you can focus on your farm."
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow group">
                <summary className="font-semibold text-gray-900 flex justify-between items-center">
                  {faq.question}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-purple-600 text-white p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and farm assessment
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
