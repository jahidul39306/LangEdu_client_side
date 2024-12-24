import Lottie from "lottie-react";
import welcome from "../assets/welcome.json";
import Stats from "../components/Stats";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Videos from "../components/Videos";

const HomePage = () => {
    const server_url = import.meta.env.VITE_server_url;

    const fetchStats = async () => {
        const { data } = await axios.get(`${server_url}/get-stats`);
        return data;
    };


    const { data: stats, isFetching, error } = useQuery({ queryKey: ["stats"], queryFn: fetchStats });
    if (isFetching) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error);
        return
    }
    return (
        <div className="space-y-8 md:space-y-20">
            {/* banner section */}
            <div data-aos="slide-up" className="pt-5 lg:min-h-screen flex flex-col gap-5 justify-center items-center w-full bg-cover bg-center bg-[url('https://i.ibb.co.com/K70Grmg/joanna-kosinska-1-CMo-Fs-Pfso-unsplash.jpg')] bg-no-repeat">
                <h1 className="text-lg md:text-4xl lg:text-6xl text-black font-bold text-center">Welcome to,<br></br> One of the best <br></br>Language Eduction platform</h1>
                <Lottie animationData={welcome} />
            </div>

            {/* stats section */}
            <div>
                <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold text-rose-400 md:mb-7">Some of our stats</h1>
                <Stats stats={stats}></Stats>
            </div>

            {/* catgories section */}
            <div>
                <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold text-rose-400 md:mb-7">Language categories</h1>
                <Categories></Categories>
            </div>

            {/* slider section*/}
            <div>
                <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold md:mb-7">Find the right tutor for you.</h1>
                <Slider></Slider>
            </div>

            {/* videos section */}
            <div>
                <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold md:mb-7">Explore our classes</h1>
                <Videos></Videos>
            </div>
        </div>
    );
};

export default HomePage;