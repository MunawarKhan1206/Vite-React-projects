
const Contact = () => {
  return (
    <div className="container  bg-slate-100 mx-auto my-12 px-4">
      <h1 className="text-4xl font-bold text-centere-300 mb-12">Contact Us</h1>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
          <p className="mb-2">
            <strong>Phone:</strong> +92-123-456789
          </p>
          <p className="mb-2">
            <strong>Email:</strong> contact@furniro.com
          </p>
          <p className="mb-4">
            <strong>Address:</strong> 123 Furniture St., Karachi, Pakistan
          </p>
          <p className="text-gray-600">
            <strong>Business Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
{/*  */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-center mb-4">Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.286893081994!2d67.03638403134231!3d24.888193866162858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5e3bae0077%3A0xdc89a8a8cb7dfd21!2sBijli%20Ground%20(Young%20Student%20Cricket%20Ground)!5e0!3m2!1sen!2s!4v1729343768648!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
