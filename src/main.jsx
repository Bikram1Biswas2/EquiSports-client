import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/MainLayOut/MainLayOut";
import AllEquipments from "./Components/Pages/AllEquipments";
import AddEquipments from "./Components/Pages/AddEquipments";
import MyEquipments from "./Components/Pages/MyEquipments";
import Error from "./Components/Pages/Error";
import Home from "./Components/MainLayOut/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import AuthProvider, { AuthContext } from "./Components/Provider/AuthProvider";
import ProductDetails from "./Components/Pages/ProductDetails";
import Update from "./Components/Pages/Update";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import AboutUs from "./Components/Pages/AboutUs";
import Contact from "./Components/Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allEquipment",
        element: <AllEquipments></AllEquipments>,
        loader: () => fetch("https://equi-sports-server-nu.vercel.app/equipments"),
      },
      {
        path: "addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipments></AddEquipments>
          </PrivateRoute>
        ),
      },
      {
        path: "myEquipment",
        element: (
          <PrivateRoute>
            <MyEquipments></MyEquipments>
          </PrivateRoute>
        ),
      },
      {
        path:'aboutUs',
        element:<AboutUs></AboutUs>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://equi-sports-server-nu.vercel.app/equipments/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://equi-sports-server-nu.vercel.app/equipments/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
