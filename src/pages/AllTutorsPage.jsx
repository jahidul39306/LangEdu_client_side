import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import TutorCard from "../components/TutorCard";
import { toast } from "react-toastify";
import Loading from "../components/Loading";


const AllTutorsPage = () => {
    const server_url = import.meta.env.VITE_server_url;

    const fetchTutorials = async () => {
        const { data } = await axios.get(`${server_url}/get-tutorials`);
        return data;
    };

    const { data: tutorials, isLoading, error } = useQuery({ queryKey: ["tutorials"], queryFn: fetchTutorials });
    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error);
        return
    }
    return (
        <div className="container mx-auto">
            <div className="grid grid-cls-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    tutorials.map((t) => <TutorCard key={t._id} tutor={t}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default AllTutorsPage;