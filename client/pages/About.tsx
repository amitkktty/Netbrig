import Layout from "@/components/Layout";
import CountUp from "@/components/CountUp";
import { Target, Heart, Lightbulb, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About NETBRIG
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-4">
              Driving Progress Since 2022
            </p>
            <p className="text-xl text-gray-600">
              Building trust, innovation, and sustainable growth across multiple sectors
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2022, NETBRIG emerged with a vision to bridge gaps across sectors and create meaningful impact. The name itself embodies our mission: Network, Education, Technology, Bright solutions, Research-driven approach, Innovation, and Growth.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What started as a small initiative has grown into a multi-sector powerhouse serving thousands of clients and partners. We've built our reputation on reliability, innovation, and a genuine commitment to our clients' success.
              </p>
              <p className="text-lg text-gray-600">
                Today, NETBRIG operates across four major sectors: IT Solutions, Essential Manpower Supply, Agriculture Drone Services, and Education. Each division carries our core values and commitment to excellence.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/21370/SM1113858.jpg?date=Tue%20Nov%2018%202025%2013:37:33%20GMT+0530%20(India%20Standard%20Time)"
                alt="NETBRIG office or team"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Through Solutions</h3>
              <p className="text-gray-600">
                To provide innovative, reliable, and comprehensive solutions that empower individuals, organizations, and communities to achieve their full potential.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                We believe in creating sustainable value through:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">Delivering excellence in everything we do</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">Embracing innovation and continuous improvement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">Building lasting partnerships based on trust</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-600">Contributing positively to society and the environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">These principles guide every decision we make</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Trust",
                description: "Built on transparency, integrity, and consistent delivery"
              },
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Innovation",
                description: "Always seeking new ways to solve challenges better"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Social Responsibility",
                description: "Committed to positive community and environmental impact"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Excellence",
                description: "Pursuing the highest standards in all endeavors"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Collaboration",
                description: "Growing together through partnerships and teamwork"
              },
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision for the Future</h2>
            <p className="text-gray-600 text-lg">Expanding horizons, creating opportunities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expansion Plans</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">→</span>
                  <span>Scaling operations to new geographical markets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">→</span>
                  <span>Introducing advanced technology solutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">→</span>
                  <span>Expanding educational programs and training initiatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">→</span>
                  <span>Building partnerships with global organizations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-term Goals</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Become a leading integrated solutions provider in South Asia</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Create sustainable employment for thousands</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Drive digital transformation in agriculture</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Empower underprivileged communities through education</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { static: "2022", label: "Year Founded" },
              { end: 4, label: "Active Sectors" },
              { end: 1000, label: "Clients Served", suffix: "+" },
              { end: 100, label: "Team Members", suffix: "+" },
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {stat.static ? (
                    stat.static
                  ) : (
                    <CountUp end={stat.end as number} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
