import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#D91656] mb-6 underline">
          Contact Us
        </h2>
        <p className="text-xl text-[#EE66A6] mb-8">
          Have questions or need assistance? Feel free to reach out to us, and we will be happy to help.
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="text-left flex flex-col items-center gap-4">
            <FaPhoneAlt className="text-4xl text-[#D91656]" />
            <h3 className="text-2xl font-semibold text-[#D91656] mb-4">Call Us</h3>
            <p className="text-lg text-gray-700">(123) 456-7890</p>
          </div>
          <div className="text-left flex flex-col items-center gap-4">
            <FaEnvelope className="text-4xl text-[#D91656]" />
            <h3 className="text-2xl font-semibold text-[#D91656] mb-4">Email Us</h3>
            <p className="text-lg text-gray-700">support@equipsports.com</p>
          </div>
          <div className="text-left flex flex-col items-center gap-4">
            <FaMapMarkerAlt className="text-4xl text-[#D91656]" />
            <h3 className="text-2xl font-semibold text-[#D91656] mb-4">Visit Us</h3>
            <p className="text-lg text-gray-700">
              123 Sports Avenue, New York, NY 10001
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
          <h3 className="text-2xl font-semibold text-[#D91656] mb-6">Get in Touch</h3>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D91656]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D91656]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="mt-2 p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D91656]"
              ></textarea>
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-[#D91656] text-white px-8 py-3 rounded-full hover:bg-[#EE66A6] transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-[#D91656] mb-4">Our Location</h3>
          <div className="w-full h-[400px] bg-gray-200 rounded-lg">
            {/* Embed Google Map iframe (change the link to your actual location) */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.481385107003!2d-74.0060153!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAuNzEyNzYqMTAwLjA2Mzg!5e0!3m2!1sen!2sus!4v1619649843792!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
