import axios from "axios";
import BookedTutorCard from "../components/BookedTutorCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { useContext } from "react";
import { GlobalContext } from "../provider/AuthProvider";

const MyBookedTutorsPage = () => {
    const server_url = import.meta.env.VITE_server_url;

    const {user} = useContext(GlobalContext);

    const fetchBookedTutors = async () => {
        const { data } = await axios.get(`${server_url}/get-booked-tutors/${user.email}`);
        return data;
    };

    const { data: bookedTutors, isLoading, error } = useQuery({ queryKey: ["bookedTutors"], queryFn: fetchBookedTutors });
    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error.message);
        return
    }

    return (
        <div className="container mx-auto">
            <div className="grid grid-cls-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    bookedTutors.map((t) => <BookedTutorCard key={t._id} tutor={t}></BookedTutorCard>)
                }
            </div>
        </div>
    );
};

export default MyBookedTutorsPage;