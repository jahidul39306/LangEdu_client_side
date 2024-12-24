import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AllTutorsPage from "../pages/AllTutorsPage";
import AddTutorialsPage from "../pages/AddTutorialsPage";
import MyTutorialsPage from "../pages/MyTutorialsPage";
import MyBookedTutorsPage from "../pages/MyBookedTutorsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
import PrivateRoute from "./PrivateRoute";
import UpdateTutorialPage from "../pages/UpdateTutorialPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "/find-tutors/:category",
                element: <AllTutorsPage></AllTutorsPage>
            },
            {
                path: "/add-tutorials",
                element: <PrivateRoute><AddTutorialsPage></AddTutorialsPage></PrivateRoute>
            },
            {
                path: "/my-tutorials",
                element: <PrivateRoute><MyTutorialsPage></MyTutorialsPage></PrivateRoute>
            },
            {
                path: "/my-booked-tutors",
                element: <PrivateRoute>
                    <MyBookedTutorsPage></MyBookedTutorsPage>
                </PrivateRoute>
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/registration",
                element: <RegistrationPage></RegistrationPage>
            },
            {
                path: "/tutor/:details",
                element: <PrivateRoute>
                    <DetailsPage></DetailsPage>
                </PrivateRoute>
            },
            {
                path: "/update-tutorial/:tutorialId",
                element: <PrivateRoute>
                    <UpdateTutorialPage></UpdateTutorialPage>
                </PrivateRoute>
            },
        ]
    }
])

export default router;