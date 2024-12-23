/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import defaultImage from "../assets/avatar.jpg";

const TutorCard = ({ tutor }) => {
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/tutor/${tutor._id}`)
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
                    <span className="text-black  font-bold">★</span>
                    <p className="ml-1 font-semibold">5</p>
                    <p className="ml-2 text-gray-500">({tutor.review})</p>
                </div>
                <p className="font-bold text-lg">$ {tutor.price}</p>
            </div>

            {/* Description */}
            <p className="text-black text-lg mb-4 flex-grow">
                {tutor.description}
            </p>

            {/* Button */}
            <button
            onClick={handleDetails} 
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg">
                Details
            </button>
        </div>
    );
};

export default TutorCard;
