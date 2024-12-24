import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import TutorCard from "../components/TutorCard";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { useState } from "react";


const AllTutorsPage = () => {
    const server_url = import.meta.env.VITE_server_url;

    const queryClient = useQueryClient();

    const params = useParams();
    const category = params?.category;
    // const [category, setCategory] = useState(params?.category);

    const fetchTutorials = async (category) => {
        if (category) {
            const { data } = await axios.get(`${server_url}/get-tutorials?category=${category}`);
            return data;
        }
        const { data } = await axios.get(`${server_url}/get-tutorials`);
        return data;
    };

    const { data: tutorials, isLoading, error } = useQuery({ queryKey: ["tutorials"], queryFn: () => fetchTutorials(category) });
    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error.message);
        return
    }

    const handleSearch = async (e) => {
        try {
            const data = await fetchTutorials(e.target.value);
            queryClient.setQueryData(["tutorials"], data);
        }
        catch (error) {
            console.error("Error fetching search results:", error);
        }
    }
    return (
        <div className="container mx-auto pt-10">
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search"
                    defaultValue={category}
                    className="input input-bordered input-info w-full max-w-xs" />
            </div>
            <div className="grid grid-cls-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    tutorials.map((t) => <TutorCard key={t._id} tutor={t}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default AllTutorsPage;