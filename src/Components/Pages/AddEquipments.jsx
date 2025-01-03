import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipments = () => {
    const {user} = useContext(AuthContext)

    const handleAddEquipments = e =>{
        e.preventDefault()

        const form = e.target 
        const image = form.image.value 
        const itemName = form.itemName.value 
        const categoryName = form.categoryName.value 
        const description = form.description.value 
        const price = form.price.value 
        const rating = form.rating.value 
        const customization = form.customization.value 
        const processingTime = form.processingTime.value
        const stockStatus = form.stockStatus.value 
        const userEmail = user.email 
        const userName = user.displayName

        const newEquipments = {image,itemName,categoryName,description,price,rating,customization,processingTime,stockStatus,userEmail,userName}
        console.log(newEquipments);

        fetch('https://equi-sports-server-nu.vercel.app/equipments',{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(newEquipments)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Equipment Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

  return (
    <div>
      <div className="w-10/12 mx-auto mt-10 mb-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add New Equipment
        </h2>
        <form onSubmit={handleAddEquipments} className="space-y-4">
          {/* Image URL */}
          <div>
            <label className="block mb-2 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Item Name */}
          <div>
            <label className="block mb-2 font-medium">Item Name</label>
            <input
              type="text"
              name="itemName"
              placeholder="Enter item name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category Name */}
          <div>
            <label className="block mb-2 font-medium">Category Name</label>
            <input
              type="text"
              name="categoryName"
              placeholder="Enter category name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              name="description"
              placeholder="Enter item description"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-medium">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered w-full"
              min="0"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-2 font-medium">Rating</label>
            <input
              type="number"
              name="rating"
              placeholder="Enter rating (out of 5)"
              className="input input-bordered w-full"
              min="0"
              max="5"
              step="0.1"
              required
            />
          </div>

          {/* Customization */}
          <div>
            <label className="block mb-2 font-medium">Customization</label>
            <input
              type="text"
              name="customization"
              placeholder="Enter customization details"
              className="input input-bordered w-full"
            />
          </div>

          {/* Processing Time */}
          <div>
            <label className="block mb-2 font-medium">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              placeholder="Enter processing time (e.g., 3-5 days)"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Stock Status */}
          <div>
            <label className="block mb-2 font-medium">Stock Status</label>
            <input
              type="number"
              name="stockStatus"
              placeholder="Enter available stock quantity"
              className="input input-bordered w-full"
              min="0"
              required
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block mb-2 font-medium">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={user?.email || ""}
              className="input input-bordered w-full bg-gray-200"
              readOnly
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block mb-2 font-medium">User Name</label>
            <input
              type="text"
              name="userName"
              value={user?.displayName || ""}
              className="input input-bordered w-full bg-gray-200"
              readOnly
            />
          </div>

          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipments;
