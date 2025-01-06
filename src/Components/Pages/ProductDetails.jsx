import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();

  return (
    <div className="w-11/12 mx-auto mt-[70px] p-6 bg-[#f8f8f8] rounded-lg shadow-xl mb-10 dark:text-white">
      <h2 className="text-3xl font-bold text-black mb-4">{product.itemName}</h2>
      <img
        src={product.image}
        alt={product.itemName}
        className="rounded-xl w-full h-[400px] mb-6 object-contain"
      />
      <p className="text-black text-lg mb-4">
        <span className="font-semibold">Category:</span> {product.categoryName}
      </p>
      <p className="text-black text-lg mb-4">
        <span className="font-semibold">Description:</span> {product.description}
      </p>
      <p className="text-yellow-400 text-lg mb-4">
        <span className="font-semibold">Rating:</span> {product.rating} ⭐
      </p>
      <p className="text-black text-lg mb-4">
        <span className="font-semibold">Price:</span>{" "}
        {product.price ? `$${product.price}` : "Price on request"}
      </p>
      <p className="text-black text-lg"><span className="text-xl font-bold">Customization</span>: {product.customization}</p>
      <div className="flex gap-8 text-black text-lg mb-4 mt-3">
        <p><span className="font-bold">Processing Time:</span> {product.processingTime}</p>
        <p><span className="font-bold">Stock: </span>{product.stockStatus}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
