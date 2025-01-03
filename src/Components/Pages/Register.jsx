import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {createUser,setUser} = useContext(AuthContext)

     const from = location?.state?.from?.pathname || '/'

    const handleRegister = e =>{
        e.preventDefault()
        const form =e.target
        const name = form.name.value 
        const photo = form.photo.value 
        const email = form.email.value 
        const password = form.password.value 

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if(!passwordRegex.test(password)){
            Swal.fire({
                title: "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
                icon: "error",
                confirmButtonText: "Okay",
            });
            return;
        }

        const newUser = {name,photo,email,password}
        console.log(newUser);

        createUser(email,password)
        .then((result)=>{
            const user = result.user
            setUser(user)
         

            return updateProfile(user, {
                displayName: name,
                photoURL: photo,
              }).then(() => {
                setUser({
                    ...user,
                    displayName:name,
                    photoURL:photo,
                })
              const newUser = {name,photo,email}
              fetch('https://equi-sports-server-nu.vercel.app/users',{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
              })
              .then((res)=>res.json())
              .then(data=>{
                console.log('user saved to database',data);
              })

            console.log(result.user);
            navigate(from)
            e.target.reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Register Successful",
                showConfirmButton: false,
                timer: 1500
              });
            })
        })
        .catch((err)=>{
            console.log(err.message);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Register failed",
                showConfirmButton: false,
                timer: 1500
              });
        })

    }

    return (
        <div className="">
             <form onSubmit={handleRegister} className="card-body w-8/12 mx-auto border border-red-500 mt-4 rounded-lg">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#DB494F] text-white text-lg font-bold">Register Now</button>
          </div>
        </form>
        <div className="p-4">
        <p className="text-center">Already Registered?Please<Link to="/login" className="text-green-500"> Login </Link></p>
        </div>
        </div>
    );
};

export default Register;