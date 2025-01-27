import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddQueries from "../Pages/AddQueries/AddQueries";
import Queries from "../Pages/Queries/Queries";
import MyQueries from "../Pages/MyQueries/MyQueries";
import QueriesDetails from "../Components/QueriesDetails/QueriesDetails";
import UpdateQueries from "../Components/UpdateQueries/UpdateQueries";
import RecommendationForMe from "../Pages/RecommendationForMe/RecommendationForMe";
import MyRecommendation from "../Pages/MyRecommendation/MyRecommendation";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

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
                element:<PrivateRoute><AddQueries/></PrivateRoute>
            },
            {
                path:'/queries',
                element:<Queries/>
            },
            {
                path:'/myQueries',
                element:<PrivateRoute><MyQueries/></PrivateRoute>,
            },
            {
                path:'/recommendationMe',
                element:<PrivateRoute><RecommendationForMe/></PrivateRoute>,
                
            },
            {
                path:'/MyRecommendation',
                element:<PrivateRoute><MyRecommendation/></PrivateRoute>,
            },
            {
                path:'/Queries_Details/:id',
                element:<QueriesDetails/>,
                loader:({params})=> fetch(`https://pickify-server.vercel.app/queries-details/${params.id}`)
            },
            {
                path:'/update-queries/:id',
                element:<UpdateQueries/>,
                loader:({params})=>fetch(`https://pickify-server.vercel.app/update/${params.id}`)
            }
        ]
    }
])

export default router;