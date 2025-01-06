import { JackInTheBox } from "react-awesome-reveal";

const LatestBlog = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-6 text-[#D91656] underline">
          Our Latest Blog{" "}
        </h2>
        <p className="text-[#EE66A6] text-xl">
          Stay updated with our latest blogs featuring expert tips, trends, and
          insights into the world of sports and fitness. Discover engaging
          articles designed to inspire and enhance your sporting journey!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1 */}
        <JackInTheBox>
          <div className="lg:card-side bg-[#f8f8f8] shadow-xl h-[90vh]">
            <figure>
              <img
                className="h-[320px] object-fill"
                src="https://i.ibb.co/TYYRjxh/shutterstock-1032332713.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl text-black">
                Choosing the Right Sports Gear for Peak Performance
              </h2>
              <p className="font-semibold text-black">Published on: <span>21/09/2024</span></p>
              <p className="text-black">
                Discover how to select the perfect sports gear to enhance your
                performance, comfort, and safety in every activity...{" "}
                <span className="text-rose-400">read more</span>
              </p>
            </div>
          </div>
        </JackInTheBox>

        {/* 2 */}
        <JackInTheBox>
          <div className="lg:card-side bg-[#f8f8f8] shadow-xl h-[90vh]">
            <figure>
              <img
                className="h-[320px] object-fill"
                src="https://i.ibb.co/vh6g41w/hq720.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl text-black">
                The Evolution of Modern Sports Equipment
              </h2>
              <p className="font-semibold text-black">Published on: 21/09/2024</p>
              <p className="text-black">
                Explore how advancements in technology and design have revolutionized modern sports equipment for athletes worldwide...{" "}
                <span className="text-rose-400">read more</span>
              </p>
            </div>
          </div>
        </JackInTheBox>

        {/* 3 */}
        <JackInTheBox>
          <div className="lg:card-side bg-[#f8f8f8] shadow-xl h-[90vh]">
            <figure>
              <img
                className="h-[320px] object-fill"
                src="https://i.ibb.co/d6d0kC8/b531db392bbfa84cf5ffb839c5df2e3d.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl text-black">
                Healthy Diet Plans for Active Lifestyles
              </h2>
              <p className="font-semibold text-black">Published on: 21/09/2024</p>
              <p className="text-black">
                Learn about balanced diet plans tailored to fuel your body and optimize performance for an active lifestyle...{" "}
                <span className="text-rose-400">read more</span>
              </p>
            </div>
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};

export default LatestBlog;
