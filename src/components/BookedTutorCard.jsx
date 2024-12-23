/* eslint-disable react/prop-types */
import defaultImage from "../assets/avatar.jpg";

const BookedTutorCard = ({tutor}) => {

    const handleReview = () => {
        // navigate(`/tutor/${tutor._id}`)
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