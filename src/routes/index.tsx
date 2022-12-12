import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";
import AuthProvider from '../components/AuthProvider';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider><Dashboard /></AuthProvider>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
])