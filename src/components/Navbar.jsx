import { Link, NavLink } from "react-router-dom";
// import { RxAvatar } from "react-icons/rx";


const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 text-md">
                        <NavLink to='/' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>Home</NavLink>
                        <NavLink to='/find-tutors' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>Find tutors</NavLink>
                        <NavLink to='/add-tutorials' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>Add Tutorials</NavLink>
                        <NavLink to='/my-tutorials' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>My Tutorials</NavLink>
                        <NavLink to='/my-booked-tutors' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>My booked tutors</NavLink>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-lg md:text-2xl lg:text-4xl text-rose-400">LangEdu</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-10">
                    <NavLink to='/' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>Home</NavLink>
                    <NavLink to='/find-tutors' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>Find tutors</NavLink>
                    <NavLink to='/add-tutorials' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>Add Tutorials</NavLink>
                    <NavLink to='/my-tutorials' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>My Tutorials</NavLink>
                    <NavLink to='/my-booked-tutors' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>My booked tutors</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2 md:gap-5 text-xs md:text-sm">
                <div className="flex gap-5 items-center">
                    <NavLink to='/login' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>Login</NavLink>
                    <NavLink to='/registration' className={({ isActive }) => (isActive ? "text-rose-300 font-bold" : "")}>Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;