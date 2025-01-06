import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { MdOutlineDeleteForever, MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";

const MyEquipments = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch(`https://equi-sports-server-nu.vercel.app/myEquipments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEquipments(data))
      .catch((error) => console.log(error));
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://equi-sports-server-nu.vercel.app/equipments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
              const remaining = equipments.filter((equip) => equip._id !== _id);
              setEquipments(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mb-10 w-11/12 mx-auto">
      <h2 className="text-3xl text-center mb-4">My Equipments: {equipments.length}</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200 text-left text-xs sm:text-sm dark:bg-black">
              <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-2 dark:text-white">Image</th>
              <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-2 dark:text-white">Product Name</th>
              <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-2 dark:text-white">Category</th>
              <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-2 dark:text-white">Description</th>
              <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-2 dark:text-white">Rating</th>
              <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-2 dark:text-white">Price</th>
              <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-2 dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment) => (
              <tr key={equipment._id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="border border-gray-300 px-2 py-2">
                  <img
                    src={equipment.image}
                    alt={equipment.itemName}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                  />
                </td>
                <td className="border border-gray-300 px-2 py-2">{equipment.itemName}</td>
                <td className="border border-gray-300 px-2 py-2">{equipment.categoryName}</td>
                <td className="border border-gray-300 px-2 py-2 text-xs sm:text-sm">
                  {equipment.description.slice(0, 50)}
                  {equipment.description.length > 50 ? "..." : ""}
                </td>
                <td className="border border-gray-300 px-2 py-2 text-yellow-400">
                  {equipment.rating} ⭐
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  {equipment.price ? `$${equipment.price}` : "Price on request"}
                </td>
                <td className="border px-2 py-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Link
                    to={`/product-details/${equipment._id}`}
                    className="bg-transparent text-black border-2 border-black px-4 py-1 rounded-full dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white transition duration-300 ease-in-out"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/update/${equipment._id}`}
                    data-tooltip-id="update-tooltip"
                    data-tooltip-content="Update Item"
                    className="text-2xl text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <MdOutlineUpdate />
                  </Link>
                  <button
                    onClick={() => handleDelete(equipment._id)}
                    data-tooltip-id="delete-tooltip"
                    data-tooltip-content="Delete Item"
                    className="text-2xl text-black dark:text-white hover:text-red-500 dark:hover:text-red-300"
                  >
                    <MdOutlineDeleteForever />
                  </button>
                  <ReactTooltip id="update-tooltip" />
                  <ReactTooltip id="delete-tooltip" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEquipments;
