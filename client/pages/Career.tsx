import { useState } from "react";
import Layout from "@/components/Layout";
import { Briefcase, MapPin, Clock, IndianRupee, Upload, X } from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Full Stack Developer",
    department: "Technology",
    location: "Patna / Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹5-8 LPA",
    description: "We're looking for a skilled Full Stack Developer proficient in React, Node.js, and modern web technologies.",
    requirements: [
      "Strong experience with React.js and Node.js",
      "Knowledge of database systems (MongoDB, PostgreSQL)",
      "Experience with REST APIs and microservices",
      "Good understanding of Git and version control",
    ],
  },
  {
    id: 2,
    title: "HR Manager",
    department: "Human Resources",
    location: "Patna",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹4-6 LPA",
    description: "Seeking an experienced HR Manager to lead recruitment, employee relations, and organizational development.",
    requirements: [
      "MBA in HR or related field",
      "Experience in recruitment and talent management",
      "Strong interpersonal and communication skills",
      "Knowledge of labor laws and HR best practices",
    ],
  },
  {
    id: 3,
    title: "Drone Pilot",
    department: "Drone Services",
    location: "Patna / Field",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹3-5 LPA",
    description: "Join our drone services team as a certified drone pilot for agricultural and surveying projects.",
    requirements: [
      "Valid drone pilot license (DGCA certified)",
      "Experience in drone operations",
      "Knowledge of agriculture or surveying applications",
      "Willingness to travel for field operations",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Patna / Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹3.5-6 LPA",
    description: "Looking for a creative Digital Marketing Specialist to drive our online presence and marketing campaigns.",
    requirements: [
      "Experience with SEO, SEM, and social media marketing",
      "Knowledge of Google Analytics and marketing tools",
      "Content creation and copywriting skills",
      "Understanding of digital marketing trends",
    ],
  },
  {
    id: 5,
    title: "Business Development Executive",
    department: "Sales",
    location: "Patna",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹3-5 LPA + Incentives",
    description: "Join our sales team to identify new business opportunities and build strong client relationships.",
    requirements: [
      "Excellent communication and negotiation skills",
      "Experience in B2B sales",
      "Self-motivated and target-oriented",
      "Knowledge of IT or service industry preferred",
    ],
  },
  {
    id: 6,
    title: "Frontend Developer Intern",
    department: "Technology",
    location: "Remote",
    type: "Internship",
    experience: "Fresher",
    salary: "₹10-15k/month",
    description: "Internship opportunity for passionate frontend developers to learn and grow with our tech team.",
    requirements: [
      "Basic knowledge of HTML, CSS, JavaScript",
      "Familiarity with React.js is a plus",
      "Eagerness to learn and adapt",
      "Good problem-solving skills",
    ],
  },
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleApply = (jobId: number) => {
    setSelectedJob(jobId);
    setShowApplicationForm(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const experience = formData.get("experience") as string;
    const currentCompany = formData.get("currentCompany") as string;
    const noticePeriod = formData.get("noticePeriod") as string;
    const coverLetter = formData.get("coverLetter") as string;

    const job = jobOpenings.find((j) => j.id === selectedJob);
    const whatsappNumber = "919631681403";

    let message = `*New Job Application*\n\n`;
    message += `*Position:* ${job?.title}\n`;
    message += `*Department:* ${job?.department}\n\n`;
    message += `*Applicant Details:*\n`;
    message += `*Name:* ${name}\n`;
    message += `*Email:* ${email}\n`;
    message += `*Phone:* ${phone}\n`;
    message += `*Experience:* ${experience}\n`;
    message += `*Current Company:* ${currentCompany}\n`;
    message += `*Notice Period:* ${noticePeriod}\n\n`;
    message += `*Cover Letter:*\n${coverLetter}\n\n`;
    
    // Upload CV file to temporary hosting and get link
    if (cvFile) {
      setIsUploading(true);
      
      try {
        const uploadFormData = new FormData();
        uploadFormData.append("file", cvFile);

        let uploadSuccess = false;
        let downloadLink = "";

        // Try file.io first
        try {
          const uploadResponse = await fetch("https://file.io", {
            method: "POST",
            body: uploadFormData,
          });
          const uploadData = await uploadResponse.json();
          
          if (uploadData.success && uploadData.link) {
            uploadSuccess = true;
            downloadLink = uploadData.link;
          }
        } catch (err) {
          console.log("file.io upload failed, trying alternative...");
        }

        // If file.io fails, try tmpfiles.org
        if (!uploadSuccess) {
          try {
            const uploadResponse = await fetch("https://tmpfiles.org/api/v1/upload", {
              method: "POST",
              body: uploadFormData,
            });
            const uploadData = await uploadResponse.json();
            
            if (uploadData.status === "success" && uploadData.data?.url) {
              uploadSuccess = true;
              downloadLink = uploadData.data.url.replace("tmpfiles.org/", "tmpfiles.org/dl/");
            }
          } catch (err) {
            console.log("tmpfiles.org upload failed");
          }
        }

        if (uploadSuccess && downloadLink) {
          message += `*CV File:* ${cvFile.name} (${(cvFile.size / 1024).toFixed(2)} KB)\n`;
          message += `*CV Download Link:* ${downloadLink}\n`;
          message += `\n_Note: Please download the CV from the link above._`;
        } else {
          message += `*CV:* ${cvFile.name} (${(cvFile.size / 1024).toFixed(2)} KB)\n`;
          message += `\n_Note: CV upload failed. Please ask candidate to email CV to careers@netbrig.com_`;
        }
      } catch (error) {
        console.error("Error uploading CV:", error);
        message += `*CV:* ${cvFile.name} (${(cvFile.size / 1024).toFixed(2)} KB)\n`;
        message += `\n_Note: CV upload failed. Please ask candidate to email CV to careers@netbrig.com_`;
      } finally {
        setIsUploading(false);
      }
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setShowApplicationForm(false);
    setSelectedJob(null);
    setCvFile(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Build Your Career with NETBRIG
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about technology,
            innovation, and making a difference. Explore our open positions and become part of
            our growing team.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Continuous learning and career advancement</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
              <p className="text-gray-600">Attractive salary and comprehensive benefits</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">Work with talented and supportive teams</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible working arrangements available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Current Openings
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Find your perfect role and apply today
          </p>

          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-blue-600 font-medium">{job.department}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IndianRupee className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => handleApply(job.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap self-start"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4 overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-2xl shadow-2xl relative my-8">
            <button
              onClick={() => {
                setShowApplicationForm(false);
                setSelectedJob(null);
                setCvFile(null);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">
                Apply for {jobOpenings.find((j) => j.id === selectedJob)?.title}
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Total Experience *
                    </label>
                    <input
                      name="experience"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="e.g., 3 years"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Company
                    </label>
                    <input
                      name="currentCompany"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Notice Period *
                    </label>
                    <select
                      name="noticePeriod"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="">Select</option>
                      <option value="Immediate">Immediate</option>
                      <option value="15 days">15 days</option>
                      <option value="1 month">1 month</option>
                      <option value="2 months">2 months</option>
                      <option value="3 months">3 months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload CV/Resume *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="cv-upload"
                      required
                    />
                    <label
                      htmlFor="cv-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="w-10 h-10 text-gray-400 mb-2" />
                      {cvFile ? (
                        <p className="text-sm text-gray-700 font-medium">
                          {cvFile.name} ({(cvFile.size / 1024).toFixed(2)} KB)
                        </p>
                      ) : (
                        <>
                          <p className="text-sm text-gray-600">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PDF, DOC, DOCX (Max 5MB)
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter / Why should we hire you? *
                  </label>
                  <textarea
                    name="coverLetter"
                    rows={5}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                    placeholder="Tell us about yourself and why you're a great fit for this role..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowApplicationForm(false);
                      setSelectedJob(null);
                      setCvFile(null);
                    }}
                    disabled={isUploading}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isUploading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Uploading CV...</span>
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Don't See the Right Role?
          </h2>
          <p className="text-gray-600 mb-8">
            We're always interested in hearing from talented individuals. Send us your CV and
            we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@netbrig.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Email Your CV
          </a>
        </div>
      </section>
    </Layout>
  );
}

