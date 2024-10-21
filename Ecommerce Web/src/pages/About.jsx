const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Furniro</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Furniro is a leading name in furniture and home décor, offering quality, style, and affordability for every home.
            With our extensive collection of handpicked pieces, we help our customers create their dream spaces with ease.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Choose Furniro?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We believe in offering the finest quality products and services to our customers. From modern to traditional
            designs, we cater to all your furniture needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">Quality Craftsmanship</h3>
              <p className="text-gray-600 mt-4">Our furniture is crafted with precision and care to ensure durability and elegance.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">Affordable Pricing</h3>
              <p className="text-gray-600 mt-4">We offer stylish furniture at affordable prices to make home décor accessible to all.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">Exceptional Service</h3>
              <p className="text-gray-600 mt-4">Our customer service team is dedicated to providing a seamless shopping experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-gray-600 mt-4">We value honesty and transparency in all our dealings with customers and partners.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-gray-600 mt-4">We are committed to offering eco-friendly products that contribute to a sustainable future.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-600 mt-4">We continuously innovate to bring the best designs and functionalities to our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600 italic">
                Furniro helped me furnish my home beautifully! The quality is top-notch and the customer service was amazing.
              </p>
              <h4 className="text-xl font-bold mt-4">- Jane Doe</h4>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-600 italic">
                Great selection and affordable prices! I’m soFhappy with my new living room set.
              </p>
              <h4 className="text-xl font-bold mt-4">- John Smith</h4>
            </div>
          </div>
        </div>
      </section>

      

      {/* Vision and Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold">Vision</h3>
            <p className="text-gray-600 mt-4">
              Our vision is to become a leader in the home décor industry by providing innovative designs and affordable solutions to create dream homes.
            </p>
            <h3 className="text-2xl font-semibold mt-8">Mission</h3>
            <p className="text-gray-600 mt-4">
              Our mission is to make stylish, high-quality furniture accessible to everyone while maintaining excellent customer service and sustainability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
