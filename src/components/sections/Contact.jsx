import Container from "../layout/ui/Container";


const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <Container>
        <div className="max-w-2xl">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>

          <p className="text-muted mb-10">
            I’m currently open to opportunities, collaborations, or freelance
            work. Feel free to reach out if you’d like to discuss a project or
            just say hello.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
