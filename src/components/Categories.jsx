import { useNavigate } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();

    const tutors = [
        { icon: "🏫", title: "English tutors",  },
        { icon: "🏰", title: "Spanish tutors", },
        { icon: "🗼", title: "French tutors", },
        { icon: "🏢", title: "German tutors", },
        { icon: "🎭", title: "Italian tutors", },
        { icon: "🖌️", title: "Chinese tutors", },
        { icon: "🕌", title: "Arabic tutors", },
        { icon: "🏯", title: "Japanese tutors", },
        { icon: "🎻", title: "Portuguese tutors", },
    ];

    const handleCategory = (category) => {
        navigate(`/find-tutors/${category}`);
    }

    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tutors.map((tutor, index) => (
                    <div
                        onClick={() => handleCategory(tutor.title.split(' ')[0])}
                        key={index}
                        className="flex items-center justify-between bg-rose-100 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="text-2xl">{tutor.icon}</div>
                            <div>
                                <p className="text-lg font-semibold text-gray-900">
                                    {tutor.title}
                                    {/* {tutor.title.split(' ')[0]} */}
                                </p>
                            </div>
                        </div>
                        <div className="text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;