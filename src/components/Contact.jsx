export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white text-black rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Contact Me</h2>
            <div className="space-y-6 text-lg">
              {/* Email */}
              <div className="flex items-center gap-4">
                <img
                  src="/icons/gmail.svg"
                  alt="Email"
                  className="w-6 h-6 "
                />
                <a href="mailto:abenezerashenafi001@gmail.com" className="hover:underline">
                  abenezerashenafi001@gmail.com
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-4">
                <img
                  src="/icons/phone.svg"
                  alt="Phone"
                  className="w-7 h-7 filter brightness-100000 invert"
                />
                <a href="tel:+251929220845" className="hover:underline">
                  +251 929220845
                </a>
              </div>
              {/* Location */}
              <div className="flex items-center gap-4">
                <img
                  src="/icons/location.svg"
                  alt="Location"
                  className="w-7 h-7 filter brightness-100000 invert"
                />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xvgqqwdd"
            method="POST"
            className="flex-1 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded border border-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded border border-gray-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="px-4 py-3 rounded border border-gray-300 min-h-[120px]"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:scale-105 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
