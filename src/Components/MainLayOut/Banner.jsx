import { Bounce } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full  ">
        <img
          src="https://i.ibb.co/0K9Hjs8/og-1532940154.jpg"
          className="w-full h-[400px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
         <Bounce>
         <h2 className="text-4xl font-bold mb-3">
            Gear Up for Your Sports Future
          </h2>
          <p className="text-lg mb-5">
            Discover the best sports accessories for you with comfort and
            durability for every stride.
          </p>
         </Bounce>
          <button className="btn bg-[#C7253E] text-white">Shop Now</button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/M7Ppp9Z/Best-Trail-Running-Shoes-Hoka-Speedgoat-6.jpg"
          className="w-full  h-[400px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
         <Bounce>
         <h2 className="text-4xl font-bold mb-3">Conquer Every Trail</h2>
          <p className="text-lg mb-5">
            Trail running shoes built for rugged terrain and ultimate
            performance.
          </p>
         </Bounce>
          <button className="btn bg-[#C7253E] text-white">
            Explore Collection
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/4pXY7D7/360-F-263369603-U8-Ig-JWd-Nrrd-DRz5-Edx0-AATygzsmd-Y1-Nt.jpg"
          className="w-full h-[400px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <Bounce>
        <h2 className="text-4xl font-bold mb-3">Elevate Your Game</h2>
          <p className="text-lg mb-5">
            High-quality sports gear designed to help you perform at your best.
          </p>
        </Bounce>
          <button className="btn bg-[#C7253E] text-white">Browse Gear</button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
