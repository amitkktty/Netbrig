import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CheckCircle, Zap, Users, Award, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

function FAQ() {
  const faqs = [
    {
      q: "What services does NETBRIG offer?",
      a: "We provide IT Solutions, Manpower, Agriculture Drone Services, Education and Consulting across multiple industries."
    },
    {
      q: "How can I get a quote?",
      a: "Contact us via the contact form or call our sales team. We'll arrange a consultation and provide a tailored proposal."
    },
    {
      q: "Do you provide training programs?",
      a: "Yes — our Education service includes custom training programs and workshops for teams and individuals."
    }
    ,
    {
      q: "Which geographic areas do you serve?",
      a: "NETBRIG operates nationally with partnerships across regions; for specialised projects we also offer targeted international collaboration. Contact us to confirm coverage for your area."
    },
    {
      q: "How does NETBRIG ensure quality and compliance?",
      a: "We follow documented QA processes, use certified partners where required, and maintain strict compliance with local regulations and industry standards for every engagement."
    },
    {
      q: "What pricing and engagement models do you offer?",
      a: "We provide flexible pricing: fixed-price projects, time-and-materials, and retainer-based agreements. Each engagement is scoped and quoted to match client needs and budget."
    }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
      <div className="space-y-4">
        {faqs.map((f, idx) => (
          <div key={idx} className="bg-gradient-to-r from-white to-sky-50 rounded-lg shadow-sm border-l-4 border-sky-500 overflow-hidden">
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full text-left px-5 py-4 flex justify-between items-center"
            >
              <span className="font-medium text-slate-800">{f.q}</span>
              <span className="text-sky-600 font-bold">{open === idx ? '−' : '+'}</span>
            </button>
            {open === idx && <div className="px-5 pb-4 text-slate-600 bg-white">{f.a}</div>}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=dc0b8f"
            alt="support and faq illustration"
            className="rounded-xl shadow-lg object-cover w-full h-72"
          />
          <p className="mt-4 text-sm text-slate-600">If you don't find your question here, contact our support and we'll get back to you within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                NETBRIG: Trusted Hands for Every Task
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering Progress, Enriching Lives. A multi-sector powerhouse since 2022 providing IT Solutions, Manpower, Agriculture Drone Services & Education.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Discover Our Impact
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                alt="NETBRIG team working together"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Pillars</h2>
            <p className="text-gray-600 text-lg">The foundation of NETBRIG's success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                letter: "N",
                title: "Network",
                description: "Building strong connections across sectors and communities",
                gradient: "from-indigo-50 to-indigo-100",
                badge: "from-indigo-500 to-purple-500"
              },
              {
                letter: "E",
                title: "Education",
                description: "Empowering through knowledge and continuous learning",
                gradient: "from-rose-50 to-rose-100",
                badge: "from-rose-500 to-orange-400"
              },
              {
                letter: "T",
                title: "Technology",
                description: "Leveraging cutting-edge solutions for modern challenges",
                gradient: "from-sky-50 to-sky-100",
                badge: "from-sky-600 to-cyan-400"
              },
              {
                letter: "B",
                title: "Bright",
                description: "Creating innovative and sustainable solutions",
                gradient: "from-amber-50 to-amber-100",
                badge: "from-amber-500 to-yellow-400"
              }
            ].map((pillar) => (
              <div key={pillar.letter} className={`bg-gradient-to-br ${pillar.gradient} p-8 rounded-2xl hover:shadow-2xl transition-shadow border border-transparent`}> 
                <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg bg-gradient-to-br ${pillar.badge}`}>
                  {pillar.letter}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                letter: "R",
                title: "Research",
                description: "Conducting thorough analysis for data-driven decisions",
                gradient: "from-green-50 to-green-100",
                badge: "from-green-500 to-teal-400"
              },
              {
                letter: "I",
                title: "Innovation",
                description: "Pioneering new approaches to industry challenges",
                gradient: "from-purple-50 to-purple-100",
                badge: "from-purple-600 to-pink-400"
              },
              {
                letter: "G",
                title: "Growth",
                description: "Scaling solutions for sustainable and shared prosperity",
                gradient: "from-cyan-50 to-cyan-100",
                badge: "from-cyan-600 to-blue-400"
              }
            ].map((pillar) => (
              <div key={pillar.letter} className={`bg-gradient-to-br ${pillar.gradient} p-8 rounded-2xl hover:shadow-2xl transition-shadow border border-transparent`}>
                <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg bg-gradient-to-br ${pillar.badge}`}>
                  {pillar.letter}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Current Active Operations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Active Operations</h2>
            <p className="text-gray-600 text-lg">Delivering excellence across multiple sectors</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Essential Manpower Supply",
                description: "Providing skilled and reliable workforce solutions for exam, election, and general manpower needs",
                icon: <Users className="w-8 h-8" />
              },
              {
                title: "Agriculture Drone Services",
                description: "Advanced precision farming solutions using cutting-edge drone technology",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "IT Solutions",
                description: "Comprehensive development, digital marketing, support, and CA & business services",
                icon: <Award className="w-8 h-8" />
              },
              {
                title: "International School",
                description: "Holistic education programs designed for farmers' children and beyond",
                icon: <CheckCircle className="w-8 h-8" />
              },
            ].map((operation, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{operation.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{operation.title}</h3>
                <p className="text-gray-600">{operation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With NETBRIG */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With NETBRIG</h2>
            <p className="text-gray-600 text-lg">Trusted excellence that delivers results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Proven Track Record",
                description: "Since 2022, we've built trust across diverse sectors with consistent delivery and quality"
              },
              {
                title: "Multi-Sector Expertise",
                description: "Integrated solutions spanning IT, education, agriculture, and manpower sectors"
              },
              {
                title: "Innovation & Technology",
                description: "Leveraging advanced technologies like drone services and digital solutions"
              },
              {
                title: "Dedicated Support",
                description: "24/7 support and commitment to your success is our priority"
              },
            ].map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ Section (added) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Questions our clients commonly ask</p>
          </div>

          <FAQ />
        </div>
      </section>

      {/* Testimonials Section (added) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">What our clients say</h2>
            <p className="text-gray-600 mt-2">Real feedback from people we've helped</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "NETBRIG helped us scale fast — their IT team integrated systems quickly and professionally.",
                name: "Asha Rao",
                role: "CTO, AgroCorp",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f2b9f",
              },
              {
                quote:
                  "Their manpower solutions are reliable — timely hires and excellent screening.",
                name: "Rahul Mehta",
                role: "HR Head, BuildIt",
                img: "https://i.pravatar.cc/300?u=rahul-mehta",
              },
              {
                quote: "Professional consulting that actually delivered measurable ROI.",
                name: "Simran Kaur",
                role: "Founder, FarmSmart",
                img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d4e5f",
              },
            ].map((t, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl p-6 shadow-lg" style={{background: i===0 ? 'linear-gradient(135deg,#e0f2fe,#eef2ff)' : i===1 ? 'linear-gradient(135deg,#ecfccb,#e0f2fe)' : 'linear-gradient(135deg,#fde68a,#fee2e2)'}}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 -mt-6">
                    <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow" />
                  </div>
                  <div>
                    <p className="text-slate-800 text-lg">“{t.quote}”</p>
                    <p className="mt-4 text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-700">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg">Dedicated professionals driving your success</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { name: "Amrit Raj Sinha", role: "CEO & Founder", img: "/amrit raj.png" },
              { name: "Ravi Raushan", role: "CTO & CO-Founder", img: "/cto.jpg" },
              { name: "Ankita", role: "HR Manager", img: "/girl.png" },
              { name: "Akshay Kumar", role: "Senior Developer", img: "/graffic designer.jpeg" },
              { name: "Amit Pathak", role: "Software Developer", img: "/amitpathak.jpeg" },
            ].map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <img
                  src={member.img}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://i.pravatar.cc/150?img=${index + 10}`;
                  }}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{member.name}</p>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>

                <div className="flex items-center justify-center gap-3 mt-2">
                  <a href="#" aria-label="LinkedIn" className="text-sky-600 hover:text-sky-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-700">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="X (Twitter)" className="text-slate-500 hover:text-slate-700">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-pink-600">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
}
