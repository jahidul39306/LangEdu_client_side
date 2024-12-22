import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import welcome from "../assets/welcome.json";

const HomePage = () => {
    return (
        <div>
            {/* banner section */}
            <div data-aos="slide-up" className="pt-5 lg:min-h-screen flex flex-col gap-5 justify-center items-center w-full bg-cover bg-center bg-[url('https://i.ibb.co.com/K70Grmg/joanna-kosinska-1-CMo-Fs-Pfso-unsplash.jpg')] bg-no-repeat">
                <h1 className="text-lg md:text-4xl lg:text-6xl text-black font-bold text-center">Welcome to,<br></br> One of the best <br></br>Language Eduction platform</h1>
                <Link to='/registration' className="btn md:text-2xl text-rose-400 border border-rose-400 shadow-lg">Join Us</Link>
                <Lottie animationData={welcome} />
            </div>

        </div>
    );
};

export default HomePage;