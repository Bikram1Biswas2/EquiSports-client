const CustomerReviews = () => {
    return (
      <div className="w-11/12 mx-auto mb-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-6 text-[#D91656] underline">Customer Reviews</h2>
          <p className="text-[#EE66A6] text-xl">
            Hear what our customers have to say about their experiences with our products and services.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" border border-[#EE66A6] p-6 rounded-lg shadow-lg">
            <p className="text-lg text-black font-semibold">
              "Great product, excellent quality!"
            </p>
            <p className="mt-4 text-[#EE66A6]">- Jane Doe</p>
          </div>
          <div className=" border border-[#EE66A6] p-6 rounded-lg shadow-lg">
            <p className="text-lg text-black font-semibold">
              "Fast delivery and awesome customer service."
            </p>
            <p className="mt-4 text-[#EE66A6]">- John Smith</p>
          </div>
          <div className=" border border-[#EE66A6] p-6 rounded-lg shadow-lg">
            <p className="text-lg text-black font-semibold">
              "Amazing value for the price. Highly recommend!"
            </p>
            <p className="mt-4 text-[#EE66A6]">- Sarah Lee</p>
          </div>
          <div className=" border border-[#EE66A6] p-6 rounded-lg shadow-lg">
            <p className="text-lg text-black font-semibold">
              "Exceptional quality and beautiful design."
            </p>
            <p className="mt-4 text-[#EE66A6]">- Alex Brown</p>
          </div>
          <div className=" border border-[#EE66A6] p-6 rounded-lg shadow-lg">
            <p className="text-lg text-black font-semibold">
              "Best purchase I've ever made. Worth every penny!"
            </p>
            <p className="mt-4 text-[#EE66A6]">- Emily Davis</p>
          </div>
          <div className=" border border-[#EE66A6] p-6 rounded-lg shadow-lg">
            <p className="text-lg text-black font-semibold">
              "Wonderful experience, I’m a loyal customer now."
            </p>
            <p className="mt-4 text-[#EE66A6]">- Michael Johnson</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomerReviews;
  