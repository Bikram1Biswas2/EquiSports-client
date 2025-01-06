import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { MdOutlineDeleteForever, MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import { Rotate } from "react-awesome-reveal";


const MyEquipments = () => {
const {user} =useContext(AuthContext)
const[equipments,setEquipments] = useState([])



useEffect(()=>{
    fetch(`https://equi-sports-server-nu.vercel.app/myEquipments/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        setEquipments(data);
    })
    .catch(error=>{
      console.log(error);
    })
},[user?.email])


const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`https://equi-sports-server-nu.vercel.app/equipments/${_id}`,{
            method:'DELETE',

        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your equipment has been deleted.",
                icon: "success",
              });
              const remaining = equipments.filter(equip=>equip._id !== _id);
              setEquipments(remaining)
            }
          });

        console.log("Delete");
      }
    });
  };
  
    return (
        <div className="mb-10 mt-[70px] w-11/12 mx-auto ">
            <h2 className="text-3xl">My Equipments:{equipments.length}</h2>
           <Rotate>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {equipments.map((equipment) => (
            <div
              key={equipment._id}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={equipment.image}
                alt={equipment.itemName}
                className="rounded-lg w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Product Name: {equipment.itemName}</h3>
                <p className="text-[#821131] bg-slate-100 rounded-lg px-3 py-1 text-center">Product Category: {equipment.categoryName}</p>
                <p className="text-sm text-white">{equipment.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-yellow-400">{equipment.rating} ⭐</div>
                  <div className="text-lg font-semibold text-white">
                    {equipment.price ? `$${equipment.price}` : "Price on request"}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-around">
                  <Link
                    to={`/product-details/${equipment._id}`}
                    className="bg-transparent text-white border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
                  >
                    View Details
                  </Link>
                  <div className="space-x-3">
                 <button>
                 <Link to={`/update/${equipment._id}`}
                    data-tooltip-id="update-tooltip"
                    data-tooltip-content="Update Item"
                    className="text-2xl"
                  >
                    <MdOutlineUpdate />
                  </Link>
                 </button>
                  <button onClick={()=>handleDelete(equipment._id)}
                    data-tooltip-id="delete-tooltip"
                    data-tooltip-content="Delete Item"
                    className="text-2xl"
                  >
                    <MdOutlineDeleteForever />
                  </button>

                  <ReactTooltip id="update-tooltip" />
                  <ReactTooltip id="delete-tooltip" />
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
           </Rotate>
        </div>
    );
};

export default MyEquipments;