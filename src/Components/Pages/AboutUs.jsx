import { FaBullhorn, FaTruck, FaHeadset } from 'react-icons/fa';  // Importing icons from react-icons

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 dark:bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#D91656] mb-6 underline dark:text-white">
          About Us
        </h2>
        <p className="text-xl text-[#EE66A6] mb-6 dark:text-white">
          We are EquiSports, a company dedicated to providing high-quality sports
          equipment for all levels of athletes. Whether you're a beginner or a
          professional, we have everything you need to enhance your game.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="text-left flex items-start gap-4">
            <FaBullhorn className="text-4xl text-[#D91656] dark:text-white" />
            <div>
              <h3 className="text-2xl font-semibold text-[#D91656] mb-4 dark:text-white">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 dark:text-white">
                Our mission is to offer a wide range of affordable, durable, and
                reliable sports equipment to support the growth and success of
                athletes. We aim to make quality sports gear accessible to everyone
                by providing an outstanding shopping experience and excellent
                customer service.
              </p>
            </div>
          </div>
          <div className="text-left flex items-start gap-4">
            <FaTruck className="text-4xl text-[#D91656] dark:text-white" />
            <div>
              <h3 className="text-2xl font-semibold text-[#D91656] mb-4 dark:text-white">
                Why Choose Us
              </h3>
              <p className="text-lg text-gray-700 dark:text-white">
                At EquiSports, we go beyond selling equipment. We provide expert
                advice, fast shipping, and hassle-free returns to make your
                shopping experience seamless. We focus on customer satisfaction and
                ensure that you get the best products at competitive prices.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-10 gap-4">
          <div className="text-center">
            <FaHeadset className="text-4xl text-[#D91656] mb-4 dark:text-white" />
            <h3 className="text-2xl font-semibold text-[#D91656] mb-2 dark:text-white">Customer Support</h3>
            <p className="text-lg text-gray-700 dark:text-white">
              Our dedicated customer support team is always ready to assist you with any inquiries. We prioritize your satisfaction and aim to make your shopping experience as smooth as possible.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="bg-[#D91656] text-white px-6 py-3 rounded-full hover:bg-[#EE66A6] transition duration-300 ease-in-out dark:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
