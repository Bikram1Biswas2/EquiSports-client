import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://equi-sports-server-nu.vercel.app/equipments/limit");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Function to limit description to 15 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 15) {
      return words.slice(0, 15).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="space-y-10 w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#D91656] underline dark:text-white">Our Products</h2>
        <p className="text-[#EE66A6] text-xl dark:text-white">
          Our products are crafted to meet the needs of sports enthusiasts, offering high-quality equipment across various categories. Whether you're a beginner or a pro, our collection ensures durability, performance, and satisfaction.
        </p>
      </div>

      <Slide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-[#f8f8f8] rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out dark:bg-gray-800"
            >
              <img
                src={product.image}
                alt={product.itemName}
                className="rounded-lg w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-black dark:text-white">Product Name: {product.itemName}</h3>
                <p className="text-[#821131] bg-slate-100 rounded-lg px-3 py-1 text-center dark:bg-gray-700 dark:text-white">
                  Product Category: {product.categoryName}
                </p>
                <p className="text-sm text-black dark:text-gray-300">{truncateDescription(product.description)}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-yellow-400">{product.rating} ⭐</div>
                  <div className="text-lg font-semibold text-black dark:text-white">
                    {product.price ? `$${product.price}` : "Price on request"}
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    to={`/product-details/${product._id}`}
                    className="bg-transparent text-black border-2 border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition duration-300 ease-in-out dark:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default ProductSection;
