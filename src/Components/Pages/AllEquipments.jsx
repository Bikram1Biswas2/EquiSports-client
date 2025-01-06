import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AllEquipments = () => {
  const loadedEquipments = useLoaderData();
  const [equipments, setEquipments] = useState(loadedEquipments);


  const handleSort = () => {
    const sortedEquipments = [...equipments];
    sortedEquipments.sort((a, b) => (b.price || 0) - (a.price || 0));
    setEquipments(sortedEquipments);
  };

  return (
    <div className="w-11/12 mx-auto mb-10 mt-[70px]">
      <Fade>
      <h2 className="text-2xl font-bold mb-6 text-center mt-6 text-[#D91656]">
        All Sports Equipments: {loadedEquipments.length}
      </h2>
      </Fade>
      <div className="text-center mb-6">
        <button
          onClick={handleSort}
          className="bg-[#DB494F] text-white px-6 py-2 rounded-full hover:bg-[#D91656] transition duration-300 ease-in-out"
        >
          Sort by Price:Descending
        </button>
      </div>
      <div className="overflow-x-auto">
      <Slide>
      <table className="min-w-full table-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-xl rounded-lg border-separate border-spacing-4">
          <thead>
            <tr className="text-white bg-opacity-80">
              <th className="px-4 py-2 text-left">Item Image</th>
              <th className="px-4 py-2 text-left">Item Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Rating</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {equipments.map((equipment) => (
              <tr
                key={equipment._id}
                className="hover:bg-opacity-70 hover:bg-purple-600"
              >
                <td className="px-4 py-2">
                  <img
                    src={equipment.image}
                    alt={equipment.itemName}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>

                <td className="px-4 py-2">{equipment.itemName}</td>
                <td className="px-4 py-2">{equipment.categoryName}</td>
                <td className="px-4 py-2">
                  {equipment.price ? `$${equipment.price}` : "Price on request"}
                </td>
                <td className="px-4 py-2">{equipment.rating} ⭐</td>
                <td className="px-4 py-2">
                  <Link
                    to={`/product-details/${equipment._id}`}
                    className="bg-transparent text-white border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Slide>
      </div>
    </div>
  );
};

export default AllEquipments;
