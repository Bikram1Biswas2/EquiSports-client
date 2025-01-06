import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AllEquipments = () => {
  const loadedEquipments = useLoaderData();
  const [equipments, setEquipments] = useState(loadedEquipments);

  const handleSort = (order) => {
    const sortedEquipments = [...equipments];
    sortedEquipments.sort((a, b) => {
      if (order === "ascending") {
        return (a.price || 0) - (b.price || 0); // Ascending
      } else {
        return (b.price || 0) - (a.price || 0); // Descending
      }
    });
    setEquipments(sortedEquipments);
  };

  return (
    <div className="w-11/12 mx-auto mb-10">
      <Fade>
        <h2 className="text-2xl font-bold mb-6 text-center mt-6 text-[#D91656]">
          All Sports Equipments: {loadedEquipments.length}
        </h2>
      </Fade>
      <div className="text-center mb-6">
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D91656] transition duration-300 ease-in-out"
        >
          <option value="" disabled selected>
            Sort by Price
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Slide>
          {equipments.map((equipment) => (
            <div
              key={equipment._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={equipment.image}
                alt={equipment.itemName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-gray-800">
                <h3 className="text-lg font-bold mb-2">{equipment.itemName}</h3>
                <p className="text-sm mb-2">
                  Category:{" "}
                  <span className="font-semibold">{equipment.categoryName}</span>
                </p>
                <p className="text-sm mb-2">
                  Price:{" "}
                  {equipment.price ? `$${equipment.price}` : "Price on request"}
                </p>
                <p className="text-sm mb-2">Rating: {equipment.rating} ⭐</p>
                <Link
                  to={`/product-details/${equipment._id}`}
                  className="block mt-4 bg-[#DB494F] text-white px-4 py-2 text-center rounded-full hover:bg-[#D91656] transition duration-300 ease-in-out"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default AllEquipments;
