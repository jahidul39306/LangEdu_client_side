import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../provider/AuthProvider";



const DetailsPage = () => {

    const navigate = useNavigate();

    const defaultImage = "https://i.ibb.co.com/c6SK6Py/tutor-3.jpg";

    const { user } = useContext(GlobalContext);

    const params = useParams();
    const id = params.details;

    const server_url = import.meta.env.VITE_server_url;

    const fetchDetails = async () => {
        const { data } = await axios.get(`${server_url}/get-tutor/${id}?email=${user.email}`);
        return data;
    };

    const { data: tutor, isLoading, error } = useQuery({ queryKey: ["tutorDetails"], queryFn: fetchDetails });

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error);
        return
    }

    const handleBookTutor = async () => {
        try {
            const newBook = {
                tutorId: tutor._id,
                image: tutor.image,
                language: tutor.language,
                price: tutor.price,
                tutorEmail: tutor.email,
                tutorName: tutor.name,
            };
            await axios.post(`${server_url}/add-to-book/${user.email}`, newBook);
            toast.success("Successfully booked the tutor.");
            navigate('/my-booked-tutors');
        }
        catch (error) {
            console.error('Error adding to booked tutor, ', error);
            toast.error(error);
        }

    }

    return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-emerald-400 border-2 border-emerald-800 rounded-lg shadow-lg mt-10">
            <div>
                <img
                    className="w-full md:w-[400px] rounded-l-lg"
                    src={tutor.image || defaultImage} alt=""
                    onError={(e) => {
                        e.target.src = defaultImage;
                    }}
                />
            </div>
            <div className="font-bold text-black space-y-2 md:space-y-5 p-5 md:p-10 ">
                <h1 className="text-3xl md:text-5xl">{tutor.name}</h1>
                <p>{tutor.description}</p>
                <ul className="text-lg md:text-2xl list-disc list-inside">
                    <li>Price: ${tutor.price}</li>
                    <li>Review: 5 ({tutor.review})</li>
                    <li>Language: {tutor.language}</li>
                    <li>Tutor Email: {tutor.email}</li>
                </ul>
                <button
                    onClick={handleBookTutor}
                    className="btn w-full bg-black text-white border-none">Book Tutor</button>

            </div>
        </div>
    );
};

export default DetailsPage;