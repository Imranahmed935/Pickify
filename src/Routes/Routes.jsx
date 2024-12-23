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
                element:<MyQueries/>,
            },
            {
                path:'/recommendationMe',
                element:<RecommendationForMe/>,
            },
            {
                path:'/MyRecommendation',
                element:<MyRecommendation/>,
            },
            {
                path:'/Queries_Details/:id',
                element:<QueriesDetails/>,
                loader:({params})=> fetch(`http://localhost:5000/queries-details/${params.id}`)
            },
            {
                path:'/update-queries/:id',
                element:<UpdateQueries/>,
                loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`)
            }
        ]
    }
])

export default router;