import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddQueries from "../Pages/AddQueries/AddQueries";
import Queries from "../Pages/Queries/Queries";
import MyQueries from "../Pages/MyQueries/MyQueries";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<LogIn/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/addQueries',
                element:<AddQueries/>
            },
            {
                path:'/queries',
                element:<Queries/>
            },
            {
                path:'/myQueries',
                element:<MyQueries/>
            }
        ]
    }
])

export default router;