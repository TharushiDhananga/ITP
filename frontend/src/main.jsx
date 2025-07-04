import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css"; // Ensure Tailwind CSS is imported here
import store from "./store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import TrainerDashboard from "./screens/TrainerDashboard.jsx";
import MemberDashboard from "./screens/MemberDashboard.jsx";
import AdminDashboard from "./screens/AdminDashboard.jsx";
import EditUser from "./screens/Auth User/EditUser.jsx";
import DeleteUser from "./screens/Auth User/DeleteUser.jsx";
import CreateUser from "./screens/Auth User/CreateUser.jsx";
import ShowUser from "./screens/Auth User/ShowUser.jsx";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen.jsx";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import Dashboard from "./screens/Dashboard.jsx";

//Inventory - Deshitha
import Store from "./screens/Inventory/main.jsx";
import Cart from "./screens/Inventory/Cart.jsx";
import Inventory from "./screens/Inventory/StoreM.jsx";
import AddInventory from "./screens/Inventory/Addnewproduct.jsx";
import UpdateItem from "./screens/Inventory/update.jsx";
import Details from "./screens/Inventory/details.jsx";

//Schedule - Nethula
import Addform from "./screens/Schedules/Addform.jsx";
import Manage from "./screens/Schedules/Mangeschedule.jsx";
import Add from "./screens/Schedules/AddSched.jsx";
import Myshedule from "./screens/Schedules/Myschedule.jsx";

//Progress - Kalish
import Update from "./screens/Progress/Update.jsx";
import MangeEmp from "./screens/Progress/NewAdd.jsx";
import ProgressM from "./screens/Progress/ProgressM.jsx";
import Progressdisplay from "./screens/Progress/Progressdisplay.jsx";

//Package - Dhanga
import UpdatePack from "./screens/Packages/Update.jsx";
import Member from "./screens/Packages/Member.jsx";
import Pack from "./screens/Packages/PackM.jsx";
import Addpromo from "./screens/Packages/Addpromo.jsx";
import Plan from "./screens/Packages/palan.jsx";
import JoinNowPage from "./screens/Packages/JoinNowPage.jsx";

// Create the router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
      <Route path="/reset-password/:token" element={<ResetPasswordScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/users/edit/:id" element={<EditUser />} />
      <Route path="/users/delete/:id" element={<DeleteUser />} />
      <Route path="/users/view/:id" element={<ShowUser />} />
      <Route path="/users/create" element={<CreateUser />} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
        <Route path="/member-dashboard" element={<MemberDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/add-inventory" element={<AddInventory />} />
      <Route path="/update/:Id" element={<UpdateItem />} />
      <Route path="/details/:itemId" element={<Details />} />


      <Route path="/addschedule" element={<Addform />} />
      <Route path="/schedulemanage" element={<Manage />} />
      <Route path="/Add/:Sdd" element={<Add />} />
      <Route path="/myschedule" element={<Myshedule />} />


      <Route path="/addprogress" element={<MangeEmp />} />
      <Route path="/ProgressM" element={<ProgressM />} />
      <Route path="/manage/:idd" element={<Update />} />
      <Route path="/pdisplay" element={<Progressdisplay />} />


      <Route path="/madd" element={<Member />} />
      <Route path="/Addprom" element={<Addpromo />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/package" element={<Pack />} />
      <Route path="/manage/:idd" element={<UpdatePack />} />
      <Route path="/join-now" element={<JoinNowPage />} />
    </Route>
  )
);

// Render the app with Redux provider and RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
