import Layout from "@/components/Layout";
import { Calculator, FileText, Shield, TrendingUp, CheckCircle, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const accountingServices = [
  {
    icon: FileText,
    title: "GST Registration & Filing",
    description: "Complete GST registration, monthly/quarterly returns filing, and GST compliance management for your business.",
    features: [
      "GST Registration (Regular/Composition)",
      "Monthly & Quarterly Returns (GSTR-1, GSTR-3B)",
      "Annual Returns (GSTR-9, GSTR-9C)",
      "GST Audit & Reconciliation",
      "Input Tax Credit Management",
    ],
  },
  {
    icon: Calculator,
    title: "Income Tax Services (ITR Filing)",
    description: "Expert income tax filing, planning, and advisory services for individuals and businesses including ITR-1.",
    features: [
      "ITR-1 Filing for Salaried Individuals",
      "ITR-2, ITR-3, ITR-4 Filing",
      "Business Tax Returns (ITR-5, ITR-6)",
      "TDS Returns & Compliance",
      "Tax Planning & Advisory",
      "Income Tax Notice Handling",
    ],
  },
  {
    icon: Award,
    title: "Trademark Registration",
    description: "Protect your brand identity with professional trademark registration and intellectual property services.",
    features: [
      "Trademark Search & Analysis",
      "Trademark Application Filing",
      "Trademark Renewal",
      "Trademark Objection Handling",
      "Brand Protection Services",
    ],
  },
  {
    icon: TrendingUp,
    title: "MSME Registration",
    description: "Get your business registered under MSME/Udyam for government benefits and priority lending.",
    features: [
      "Udyam Registration Certificate",
      "MSME Classification (Micro/Small/Medium)",
      "Subsidy & Loan Assistance",
      "Priority Sector Lending Benefits",
      "Government Tender Benefits",
    ],
  },
  {
    icon: Shield,
    title: "ISO Certification",
    description: "Achieve international quality standards with ISO certification services for your organization.",
    features: [
      "ISO 9001 (Quality Management)",
      "ISO 14001 (Environmental Management)",
      "ISO 27001 (Information Security)",
      "ISO 45001 (Occupational Health & Safety)",
      "ISO Audit & Renewal",
    ],
  },
  {
    icon: FileText,
    title: "Digital Signature Certificate (DSC)",
    description: "Secure digital signature certificates for online filing and e-governance applications.",
    features: [
      "Class 2 DSC for Individual",
      "Class 3 DSC for Organizations",
      "DSC for Income Tax E-filing",
      "DSC for MCA Filings",
      "DSC Renewal Services",
    ],
  },
  {
    icon: TrendingUp,
    title: "IEC Registration",
    description: "Import Export Code registration for businesses involved in international trade.",
    features: [
      "IEC Code Application",
      "IEC Modification/Amendment",
      "RCMC Certificate",
      "Export Benefits Consultation",
      "Customs Clearance Support",
    ],
  },
  {
    icon: Award,
    title: "Private Limited Company Registration",
    description: "Complete private limited company incorporation with DIN, DSC, and all compliance requirements.",
    features: [
      "Name Approval & Reservation",
      "DIN & DSC for Directors",
      "MOA & AOA Drafting",
      "Company Incorporation Certificate",
      "PAN, TAN & Bank Account Assistance",
    ],
  },
  {
    icon: FileText,
    title: "Food License (FSSAI)",
    description: "FSSAI food license registration for food businesses, restaurants, and manufacturing units.",
    features: [
      "Basic FSSAI Registration",
      "State FSSAI License",
      "Central FSSAI License",
      "Food Safety Compliance",
      "License Renewal & Modification",
    ],
  },
  {
    icon: Shield,
    title: "Shops & Establishments Act Registration",
    description: "Mandatory registration for shops, commercial establishments, and offices under state laws.",
    features: [
      "Shop Act Registration",
      "Certificate Issuance",
      "Renewal Services",
      "Amendment & Modification",
      "Compliance Advisory",
    ],
  },
  {
    icon: FileText,
    title: "Accounting & Bookkeeping",
    description: "Professional accounting and bookkeeping services to maintain accurate financial records.",
    features: [
      "Monthly Bookkeeping",
      "Financial Statement Preparation",
      "Accounts Payable/Receivable",
      "Bank Reconciliation",
      "Payroll Processing",
    ],
  },
  {
    icon: Award,
    title: "Audit & Assurance",
    description: "Comprehensive audit services to ensure financial accuracy and regulatory compliance.",
    features: [
      "Statutory Audit",
      "Internal Audit",
      "Tax Audit",
      "Stock Audit",
      "Management Audit",
    ],
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Financial Team",
    description: "Qualified financial professionals with years of experience",
  },
  {
    icon: Clock,
    title: "Timely Services",
    description: "Quick turnaround time with deadline adherence",
  },
  {
    icon: Shield,
    title: "100% Compliance",
    description: "Full compliance with tax laws and regulations",
  },
  {
    icon: TrendingUp,
    title: "Cost Effective",
    description: "Competitive pricing without compromising quality",
  },
];

export default function Accounting() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Accounting & Tax Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              Professional CA Services for Your Business Growth
            </p>
            <p className="text-lg text-green-200 max-w-3xl mx-auto">
              Expert Chartered Accountant services for GST, Income Tax, PAN, Business Registration,
              and complete financial compliance management.
            </p>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="https://wa.me/919631681403?text=Hi, I need accounting services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors border-2 border-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Accounting Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive CA services to handle all your financial and tax needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountingServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-8 border border-green-100"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Financial Services?
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses for reliable and professional accounting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CFO Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Financial Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Led by experienced financial professionals with extensive expertise
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg p-8 max-w-md border border-green-100 text-center">
              <img
                src="/b.nichiketa.jpeg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const div = document.createElement("div");
                    div.className = "w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold";
                    div.textContent = "BN";
                    parent.insertBefore(div, target.nextSibling);
                  }
                }}
                alt="B. Nachiketa"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-green-200"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                B. Nachiketa
              </h3>
              <p className="text-green-600 font-semibold mb-4 text-lg">
                Chief Financial Officer (CFO)
              </p>
              <p className="text-gray-600 mb-6">
                Expert in taxation, GST compliance, company registration, and financial consulting with years of
                experience helping businesses achieve financial excellence and regulatory compliance.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>GST, Income Tax & ITR Expert</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Company Registration Specialist</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Trademark & MSME Registration</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Audit & Compliance Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Simplify Your Accounting?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get expert financial services for all your tax and business needs. Contact us today for a
            free consultation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-lg"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919631681403"
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors border-2 border-white text-lg"
            >
              Call Now: +91 9631681403
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

