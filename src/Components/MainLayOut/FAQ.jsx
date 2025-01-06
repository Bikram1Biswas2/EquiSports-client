const FAQ = () => {
    return (
        <div className=" w-11/12 mx-auto">
           <div className="text-center mb-6">
           <h2 className="text-3xl font-bold mb-6 text-[#D91656] underline">Frequently Asked Questions</h2>
           <p className="text-[#EE66A6] text-xl">The FAQ section addresses common queries like making purchases, returning items within 30 days if unused, and international shipping availability with variable fees. It ensures a seamless user experience by providing clear and concise information.</p>
           </div>
            <div className="space-y-6 bg-gray-50">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold">How do I make a purchase?</h3>
                    <p>You can make a purchase by adding products to your cart and proceeding to checkout.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold">What is the return policy?</h3>
                    <p>Our return policy allows returns within 30 days of purchase, as long as the item is unused and in its original packaging.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold">Do you offer international shipping?</h3>
                    <p>Yes, we offer international shipping to most countries. Shipping fees may vary depending on the destination.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
