/* eslint-disable react/prop-types */
import axios from "axios";
import defaultImage from "../assets/avatar.jpg";
import { useContext } from "react";
import { GlobalContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const BookedTutorCard = ({ tutor }) => {

    const server_url = import.meta.env.VITE_server_url;

    const { user } = useContext(GlobalContext);

    const handleReview = async () => {
        try {
            await axios.patch(`${server_url}/add-review/${user.email}`, { tutorId: tutor.tutorId })
            toast.success("Successfully reviewed the tutor.");
        }
        catch (error) {
            console.error('Error adding review, ', error);
            toast.error(error.message);
        }
    }

    return (
        <div className="border rounded-lg shadow-lg p-4 bg-rose-300 text-black flex flex-col">
            {/* Profile Header */}
            <div className="flex items-center mb-4">
                <img
                    src={tutor.image || defaultImage}
                    alt="Tutor"
                    className="w-16 h-16 rounded-full border-2 border-gray-300"
                    onError={(e) => {
                        e.target.src = defaultImage;
                    }}
                />
                <div className="ml-4">
                    <h2 className="font-bold text-2xl">{tutor.name}</h2>
                </div>
            </div>

            {/* Language */}
            <p className="text-black mb-2 font-bold">🌍 {tutor.language}</p>


            {/* Reviews and Price */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-lg">
                    <p className="ml-1 font-semibold">{tutor.tutorName}</p>
                </div>
                <p className="font-bold text-lg">$ {tutor.price}</p>
            </div>

            {/* Button */}
            <button
                onClick={handleReview}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg">
                Review
            </button>
        </div>
    );
};

export default BookedTutorCard;