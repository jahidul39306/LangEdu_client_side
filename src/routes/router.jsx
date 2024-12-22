import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AllTutorsPage from "../pages/AllTutorsPage";
import AddTutorialsPage from "../pages/AddTutorialsPage";
import MyTutorialsPage from "../pages/MyTutorialsPage";
import MyBookedTutorsPage from "../pages/MyBookedTutorsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1 className="text-3xl">Error Page</h1>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/find-tutors",
                element: <AllTutorsPage></AllTutorsPage>
            },
            {
                path: "/add-tutorials",
                element: <AddTutorialsPage></AddTutorialsPage>
            },
            {
                path: "/my-tutorials",
                element: <MyTutorialsPage></MyTutorialsPage>
            },
            {
                path: "/my-booked-tutors",
                element: <MyBookedTutorsPage></MyBookedTutorsPage>
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/registration",
                element: <RegistrationPage></RegistrationPage>
            },
        ]
    }
])

export default router;