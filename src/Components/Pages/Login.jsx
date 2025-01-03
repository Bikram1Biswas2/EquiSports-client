import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";


const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const {signInUser,googleLogin,setUser} = useContext(AuthContext)

  const from = location?.state?.from?.pathname || '/'

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value 

        const login = {email,password}
        console.log(login);

        signInUser(email,password)
        .then((result)=> {
          setUser(result.user)
          navigate(from)
          console.log(result.user);
          e.target.reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch((error)=>{
          console.log(error.message);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Login failed",
            showConfirmButton: false,
            timer: 1500
          });
        })
    }

    const handleGoogleLogin = () =>{
      googleLogin()
      .then(result=>{
        setUser(result.user)
        navigate(from)
        console.log(result.user);
      
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Login Successful",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error)=>{
        console.log(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Google Login failed",
          showConfirmButton: false,
          timer: 1500
        });
      })
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div onClick={handleGoogleLogin} className="flex justify-center items-center gap-2 bg-[#FABC3F] p-2 text-xl hover:cursor-pointer">
         <FaGoogle className="text-[#E90074]" /> <p className="font-bold">Login with Google</p>
      </div>
     <div className="p-4">
     <p className="text-center">First time to this website?<Link to="/register" className="text-red-500">Register</Link> first</p>
     </div>
    </div>
  </div>
</div>
    );
};

export default Login;