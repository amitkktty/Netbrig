import ContactForm from "@/components/ContactForm";
import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  useEffect(() => {
    fetchDemo();
  }, []);

  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  // Simple FAQ data
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
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        "NETBRIG helped us scale fast — their IT team integrated systems quickly and professionally.",
      name: "Asha Rao",
      role: "CTO, AgroCorp",
      img: "https://i.pravatar.cc/120?img=32"
    },
    {
      quote:
        "Their manpower solutions are reliable — timely hires and excellent screening.",
      name: "Rahul Mehta",
      role: "HR Head, BuildIt",
      img: "https://i.pravatar.cc/120?img=12"
    },
    {
      quote:
        "Professional consulting that actually delivered measurable ROI.",
      name: "Simran Kaur",
      role: "Founder, FarmSmart",
      img: "https://i.pravatar.cc/120?img=45"
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Intro / hero stub (kept minimal) */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              NETBRIG: Trusted Hands for Every Task
            </h1>
            <p className="text-slate-600 max-w-xl">
              Empowering Progress, Enriching Lives. A multi-sector powerhouse since 2022
              providing IT Solutions, Manpower, Agriculture Drone Services & Education.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd"
              alt="team"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <ContactForm />
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-4 py-3 flex justify-between items-center"
                >
                  <span className="font-medium">{f.q}</span>
                  <span className="text-slate-500">{openFaq === idx ? "–" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-slate-600">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">What our clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="text-slate-700">“{t.quote}”</p>
                    <p className="mt-3 text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
