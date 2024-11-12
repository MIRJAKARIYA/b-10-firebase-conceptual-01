import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Statistics from "../components/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path:"/",
        element:
            <MainLayout></MainLayout>,
       
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:
                    <PrivateRoute>
                        <About></About>
                    </PrivateRoute>
                
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
                
            },
            {
                path:"/signin",
                element:<Login></Login>
            },
            {
                path:"/profile",
                element:<PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path:"/stats",
                element:<PrivateRoute>
                    <Statistics></Statistics>
                </PrivateRoute>
            }
        ]
    }
  

])
export default router;