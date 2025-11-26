import Layout from "@/components/Layout";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const members = [
  {
    name: "Amrit Raj Sinha",
    role: "CEO & Founder",
    img: "/amrit raj.png",
    bio: "Vision-led leadership, strategy and partnerships across sectors.",
  },
  {
    name: "Ravi Raushan",
    role: "CTO & CO-Founder",
    img: "/cto.jpg",
    bio: "Technology strategy, architecture and product delivery.",
  },
  {
    name: "Ankita",
    role: "HR Manager",
    img: "/girl.png",
    bio: "Client success, onboarding and ongoing support operations.",
  },
  {
    name: "Akshay Kumar",
    role: "Senior Developer",
    img: "/graffic designer.jpeg",
    bio: "Full-stack development, performance and code quality.",
  },
  {
    name: "Amit Pathak",
    role: "Software Developer",
    img: "/amitpathak.jpeg",
    bio: "Frontend engineering, UI integration and automation.",
  },
];

export default function Team() {
  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
            <p className="text-gray-600 text-lg">Meet the people behind NETBRIG</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {members.map((m, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img
                  src={m.img}
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.onerror = null;
                    t.src = `https://i.pravatar.cc/150?img=${i + 10}`;
                  }}
                  alt={m.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{m.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{m.role}</p>
                <p className="text-sm text-gray-600 mb-4">{m.bio}</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="#" aria-label="LinkedIn" className="text-sky-600 hover:text-sky-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-700">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="X (Twitter)" className="text-slate-600 hover:text-slate-800">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-700">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

