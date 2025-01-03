import { Bounce } from "react-awesome-reveal";
import { FaSalesforce, FaTruckMoving } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";

const OurPolicies = () => {
    return (
      <div className="w-11/12 mx-auto">
      <div className="text-center mb-6">
      <h2 className="text-3xl font-bold mb-6 text-[#D91656] underline">Our Policies </h2>
      <p className="text-[#EE66A6] text-xl">
      Our Policies ensure transparency, fairness, and customer satisfaction in every transaction. We are committed to providing clear guidelines and support to make your shopping experience seamless and reliable.</p>
      </div>
        <Bounce>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div className="flex items-center gap-3 bg-black text-white justify-center py-14 border-r-2">
                <div className="text-4xl">
                <FaTruckMoving className="text-[#D80032]" />
                </div>
                <div>
                    <h2 className="font-bold">Free Shipping</h2>
                    <p>For All orders over $220</p>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-black text-white justify-center py-14 border-r-2">
                <div className="text-4xl">
                <GiReturnArrow className="text-[#D80032]" />
                </div>
                <div>
                    <h2 className="font-bold">30 DAYS RETURN</h2>
                    <p>Money Back Guarantee</p>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-black text-white justify-center py-14 border-r-2">
                <div className="text-4xl">
                <MdOutlineSupportAgent className="text-[#D80032]" />
                </div>
                <div>
                    <h2 className="font-bold">
                    Online Support</h2>
                    <p>Free support 24/7 Per Week</p>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-black text-white justify-center py-14">
                <div className="text-4xl">
                <FaSalesforce className="text-[#D80032]" />
                </div>
                <div>
                    <h2 className="font-bold">Promotions</h2>
                    <p>New Member 10% Discount</p>
                </div>
            </div>
        </div>
        </Bounce>
      </div>
    );
};

export default OurPolicies;