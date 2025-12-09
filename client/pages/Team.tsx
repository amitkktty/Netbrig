import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Linkedin, Twitter, Facebook, Instagram, Quote } from "lucide-react";

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
    name: "B. Nachiketa",
    role: "Chief Financial Officer (CFO)",
    img: "/b.nichiketa.jpeg",
    bio: "Expert in GST, Income Tax, and financial compliance management.",
  },
  {
    name: "Kashish Thakur",
    role: "HR Manager",
    img: "/kasish thakur.jpeg",
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
  {
    name: "Rahul Kumar",
    role: "Full Stack Developer",
    img: "/placeholder.svg",
    bio: "Full-stack development, API integration and system architecture.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Solutions Pvt Ltd",
    role: "CEO",
    image: "/placeholder.svg",
    text: "NETBRIG has been instrumental in transforming our business operations. Their IT solutions are top-notch and the team is highly professional. Highly recommended!",
  },
  {
    name: "Priya Singh",
    company: "Green Farms",
    role: "Farm Owner",
    image: "/placeholder.svg",
    text: "The drone services provided by NETBRIG revolutionized our farming practices. Precision spraying has increased our yield by 30%. Excellent service!",
  },
  {
    name: "Amit Sharma",
    company: "StartUp India",
    role: "Founder",
    image: "/placeholder.svg",
    text: "From company registration to GST filing, NETBRIG's accounting services made everything seamless. B. Nachiketa and team are extremely knowledgeable and helpful.",
  },
  {
    name: "Neha Verma",
    company: "Educational Institute",
    role: "Director",
    image: "/placeholder.svg",
    text: "Their manpower services helped us efficiently manage our examination operations. The team is reliable, professional, and always delivers on time.",
  },
  {
    name: "Vikram Reddy",
    company: "E-Commerce Solutions",
    role: "CTO",
    image: "/placeholder.svg",
    text: "Working with NETBRIG's development team has been a great experience. They delivered our e-commerce platform on time with excellent quality and support.",
  },
  {
    name: "Sunita Devi",
    company: "Food Processing Unit",
    role: "Owner",
    image: "/placeholder.svg",
    text: "NETBRIG helped us get our FSSAI license quickly and efficiently. Their consulting services are outstanding and they guided us through every step.",
  },
];

export default function Team() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [isTeamPaused, setIsTeamPaused] = useState(false);

  // Testimonial auto-scroll
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Team carousel auto-scroll
  useEffect(() => {
    if (!isTeamPaused) {
      const interval = setInterval(() => {
        setCurrentTeamIndex((prev) => (prev + 1) % members.length);
      }, 3000); // Change team member every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isTeamPaused]);

  return (
    <Layout>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
            <p className="text-gray-600 text-lg">Meet the people behind NETBRIG</p>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsTeamPaused(true)}
            onMouseLeave={() => setIsTeamPaused(false)}
          >
            {/* Team Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out gap-6"
                style={{ 
                  transform: `translateX(-${currentTeamIndex * (100 / 3)}%)`,
                }}
              >
                {/* Duplicate members for infinite loop effect */}
                {[...members, ...members, ...members].map((m, i) => (
                  <div 
                    key={i} 
                    className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105 flex-shrink-0"
                    style={{ width: 'calc(33.333% - 16px)', minWidth: '280px' }}
                  >
                    <img
                      src={m.img}
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        t.onerror = null;
                        t.src = `https://i.pravatar.cc/150?img=${(i % members.length) + 10}`;
                      }}
                      alt={m.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{m.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3 text-sm">{m.role}</p>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{m.bio}</p>
                    <div className="flex items-center justify-center gap-3">
                      <a href="#" aria-label="LinkedIn" className="text-sky-600 hover:text-sky-700 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-700 transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href="#" aria-label="X (Twitter)" className="text-slate-600 hover:text-slate-800 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-700 transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {members.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTeamIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

            {/* Pause Indicator */}
            {isTeamPaused && (
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-md">
                  Paused - Move mouse away to resume
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">Trusted by businesses across various industries</p>
          </div>

          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-4 left-4 w-12 h-12 text-blue-200 opacity-50" />
              
              {/* Testimonial Content */}
              <div className="relative z-10">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://i.pravatar.cc/150?img=${currentTestimonial + 20}`;
                    }}
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-blue-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Background */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-20 -mr-32 -mb-32"></div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Pause Indicator */}
            {isPaused && (
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-md">
                  Paused - Move mouse away to resume
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

