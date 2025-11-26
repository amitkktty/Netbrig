import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const whatsappNumber = "919631681403";

    const text = `*New Enquiry Received*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Company:* ${company}\n*Subject:* ${subject}\n*Message:* ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setLoading(false);
  };

  return (
    <div
      className="bg-gradient-to-br from-blue-50 to-purple-100 px-6 py-20 sm:py-28 lg:px-8 mt-32"
    >
      {/* TOP HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Contact Sales
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Connect with our team — we respond within minutes.
        </p>
      </div>

      {/* TWO COLUMN LAYOUT */}
      <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/13228/SM461569.jpg?date=Thu%20Nov%2020%202025%2016:03:23%20GMT+0530%20(India%20Standard%20Time)"
            alt="contact"
            className="w-full h-full rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Enquiry Form</h3>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-5">

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="company"
              type="text"
              placeholder="Company Name"
              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="subject"
              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="IT Solutions">IT Solutions</option>
              <option value="Manpower">Manpower</option>
              <option value="Drone Services">Drone Services</option>
              <option value="Education Services">Education Services</option>
              <option value="Partnership">Partnership</option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send on WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}




//import { useState } from "react";
//
//export default function ContactForm() {
//  const [loading, setLoading] = useState(false);
//
//  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//    e.preventDefault();
//    setLoading(true);
//
//    const form = e.currentTarget;
//
//    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
//    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
//    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
//    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
//    const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value;
//    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
//
//    const whatsappNumber = "919631681403";
//
//    const text = `*New Enquiry Received*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Company:* ${company}\n*Subject:* ${subject}\n*Message:* ${message}`;
//
//    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
//
//    window.open(url, "_blank");
//
//    setLoading(false);
//  };
//
//  return (
//    <div className="bg-gradient-to-br from-blue-50 to-purple-100 px-6 py-20 sm:py-28 lg:px-8">
//      {/* TOP HEADER */}
//      <div className="text-center mb-16">
//        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//          Contact Sales
//        </h2>
//        <p className="mt-2 text-lg text-gray-700">
//          Connect with our team — we respond within minutes.
//        </p>
//      </div>
//
//      {/* TWO COLUMN LAYOUT */}
//      <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
//
//        {/* LEFT IMAGE */}
//        <div className="flex justify-center">
//          <img
//            src="https://images.unsplash.com/photo-1581091870627-3afdc4fa0f6b?w=800"
//            alt="contact"
//            className="w-full h-full rounded-xl shadow-xl object-cover"
//          />
//        </div>
//
//        {/* RIGHT FORM (SAME AS ENQUIRY NOW FORM) */}
//        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
//          <h3 className="text-2xl font-bold text-gray-900 mb-6">Enquiry Form</h3>
//
//          <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
//
//            <input
//              name="name"
//              type="text"
//              placeholder="Your Name"
//              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
//              required
//            />
//
//            <input
//              name="email"
//              type="email"
//              placeholder="Email"
//              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
//              required
//            />
//
//            <input
//              name="phone"
//              type="text"
//              placeholder="Phone"
//              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
//            />
//
//            <input
//              name="company"
//              type="text"
//              placeholder="Company Name"
//              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
//            />
//
//            <select
//              name="subject"
//              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
//            >
//              <option value="General Inquiry">General Inquiry</option>
//              <option value="IT Solutions">IT Solutions</option>
//              <option value="Manpower">Manpower</option>
//              <option value="Drone Services">Drone Services</option>
//              <option value="Education Services">Education Services</option>
//              <option value="Partnership">Partnership</option>
//            </select>
//
//            <textarea
//              name="message"
//              rows={4}
//              placeholder="Message"
//              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
//              required
//            />
//
//            <button
//              type="submit"
//              className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
//            >
//              {loading ? "Sending..." : "Send on WhatsApp"}
//            </button>
//          </form>
//        </div>
//      </div>
//    </div>
//  );
//}



//import { ChevronDownIcon } from 'lucide-react'
//
//const ContactForm = () => {
//  return (
//    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
//
//      {/* TOP HEADING */}
//      <div className="text-center mb-16">
//        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//          Contact Sales
//        </h2>
//        <p className="mt-2 text-lg text-gray-600">
//          Aute magna irure deserunt veniam aliqua magna enim voluptate.
//        </p>
//      </div>
//
//      {/* MAIN TWO COLUMN LAYOUT */}
//      <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
//
//        {/* LEFT IMAGE */}
//        <div>
//          <img
//            src="https://images.unsplash.com/photo-1581091870627-3afdc4fa0f6b?w=800"
//            alt="contact"
//            className="w-full h-full object-cover rounded-xl shadow-lg"
//          />
//        </div>
//
//        {/* RIGHT YOUR FULL FORM (UNCHANGED) */}
//        <div>
//          <form action="#" method="POST" className="max-w-xl">
//            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//
//              {/* First Name */}
//              <div>
//                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
//                  First name
//                </label>
//                <div className="mt-2.5">
//                  <input
//                    id="first-name"
//                    name="first-name"
//                    type="text"
//                    autoComplete="given-name"
//                    className="w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
//                  />
//                </div>
//              </div>
//
//              {/* Last Name */}
//              <div>
//                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
//                  Last name
//                </label>
//                <div className="mt-2.5">
//                  <input
//                    id="last-name"
//                    name="last-name"
//                    type="text"
//                    autoComplete="family-name"
//                    className="w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
//                  />
//                </div>
//              </div>
//
//              {/* Company */}
//              <div className="sm:col-span-2">
//                <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
//                  Company
//                </label>
//                <div className="mt-2.5">
//                  <input
//                    id="company"
//                    name="company"
//                    type="text"
//                    autoComplete="organization"
//                    className="w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
//                  />
//                </div>
//              </div>
//
//              {/* Email */}
//              <div className="sm:col-span-2">
//                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
//                  Email
//                </label>
//                <div className="mt-2.5">
//                  <input
//                    id="email"
//                    name="email"
//                    type="email"
//                    autoComplete="email"
//                    className="w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
//                  />
//                </div>
//              </div>
//
//              {/* Phone Number */}
//              <div className="sm:col-span-2">
//                <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
//                  Phone number
//                </label>
//                <div className="mt-2.5">
//                  <div className="flex rounded-md bg-white outline-1 outline-gray-300">
//                    <div className="grid shrink-0 grid-cols-1 relative">
//                      <select
//                        id="country"
//                        name="country"
//                        autoComplete="country"
//                        className="appearance-none w-full py-2 pr-7 pl-3.5 text-gray-500 rounded-md focus:outline-indigo-600"
//                      >
//                        <option>US</option>
//                        <option>CA</option>
//                        <option>EU</option>
//                      </select>
//                      <ChevronDownIcon className="absolute right-2 top-3 size-4 text-gray-500" />
//                    </div>
//
//                    <input
//                      id="phone-number"
//                      name="phone-number"
//                      type="text"
//                      placeholder="123-456-7890"
//                      className="grow py-2 px-3 text-gray-900 focus:outline-none"
//                    />
//                  </div>
//                </div>
//              </div>
//
//              {/* Message */}
//              <div className="sm:col-span-2">
//                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
//                  Message
//                </label>
//                <div className="mt-2.5">
//                  <textarea
//                    id="message"
//                    name="message"
//                    rows={4}
//                    className="w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
//                  />
//                </div>
//              </div>
//
//              {/* Checkbox */}
//              <div className="flex gap-x-4 sm:col-span-2">
//                <div className="flex h-6 items-center">
//                  <input id="agree" name="agree" type="checkbox" className="h-4 w-4 text-indigo-600" />
//                </div>
//                <label htmlFor="agree" className="text-sm text-gray-600">
//                  By selecting this, you agree to our{" "}
//                  <a className="font-semibold text-indigo-600">privacy policy</a>.
//                </label>
//              </div>
//            </div>
//
//            {/* Submit Button */}
//            <div className="mt-10">
//              <button
//                type="submit"
//                className="w-full rounded-md bg-indigo-600 py-2.5 text-white font-semibold hover:bg-indigo-500"
//              >
//                Let's talk
//              </button>
//            </div>
//          </form>
//        </div>
//      </div>
//    </div>
//  )
//}
//
//export default ContactForm



//import { ChevronDownIcon } from 'lucide-react'
//
//
//const ContactForm = () => {
//  return (
//    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//      <div
//        aria-hidden="true"
//        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//      >
//        <div
//          style={{
//            clipPath:
//              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//          }}
//          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
//        />
//      </div>
//      <div className="mx-auto max-w-2xl text-center">
//        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
//        <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
//      </div>
//      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
//        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//          <div>
//            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
//              First name
//            </label>
//            <div className="mt-2.5">
//              <input
//                id="first-name"
//                name="first-name"
//                type="text"
//                autoComplete="given-name"
//                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//              />
//            </div>
//          </div>
//          <div>
//            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
//              Last name
//            </label>
//            <div className="mt-2.5">
//              <input
//                id="last-name"
//                name="last-name"
//                type="text"
//                autoComplete="family-name"
//                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//              />
//            </div>
//          </div>
//          <div className="sm:col-span-2">
//            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
//              Company
//            </label>
//            <div className="mt-2.5">
//              <input
//                id="company"
//                name="company"
//                type="text"
//                autoComplete="organization"
//                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//              />
//            </div>
//          </div>
//          <div className="sm:col-span-2">
//            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
//              Email
//            </label>
//            <div className="mt-2.5">
//              <input
//                id="email"
//                name="email"
//                type="email"
//                autoComplete="email"
//                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//              />
//            </div>
//          </div>
//          <div className="sm:col-span-2">
//            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
//              Phone number
//            </label>
//            <div className="mt-2.5">
//              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
//                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
//                  <select
//                    id="country"
//                    name="country"
//                    autoComplete="country"
//                    aria-label="Country"
//                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                  >
//                    <option>US</option>
//                    <option>CA</option>
//                    <option>EU</option>
//                  </select>
//                  <ChevronDownIcon
//                    aria-hidden="true"
//                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//                  />
//                </div>
//                <input
//                  id="phone-number"
//                  name="phone-number"
//                  type="text"
//                  placeholder="123-456-7890"
//                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
//                />
//              </div>
//            </div>
//          </div>
//          <div className="sm:col-span-2">
//            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
//              Message
//            </label>
//            <div className="mt-2.5">
//              <textarea
//                id="message"
//                name="message"
//                rows={4}
//                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                defaultValue={''}
//              />
//            </div>
//          </div>
//          <div className="flex gap-x-4 sm:col-span-2">
//            <div className="flex h-6 items-center">
//              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
//                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
//                <input
//                  id="agree-to-policies"
//                  name="agree-to-policies"
//                  type="checkbox"
//                  aria-label="Agree to policies"
//                  className="absolute inset-0 appearance-none focus:outline-hidden"
//                />
//              </div>
//            </div>
//            <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
//              By selecting this, you agree to our{' '}
//              <a href="#" className="font-semibold whitespace-nowrap text-indigo-600">
//                privacy policy
//              </a>
//              .
//            </label>
//          </div>
//        </div>
//        <div className="mt-10">
//          <button
//            type="submit"
//            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//          >
//            Let's talk
//          </button>
//        </div>
//      </form>
//    </div>
//  )
//}
//
//export default ContactForm
