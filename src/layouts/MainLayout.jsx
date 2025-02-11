import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <header className="sticky top-0 z-50 py-2 shadow-lg bg-white text-black">
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen">
                <Outlet></Outlet>
            </main>
            <footer className="bg-green-300 mt-20">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;