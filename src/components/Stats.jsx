/* eslint-disable react/prop-types */
const Stats = ({ stats }) => {

    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 text-center">
                <div className="flex flex-col items-center border border-rose-400 p-5 md:p-10 rounded-lg bg-rose-200 shadow-lg">
                    <p className="text-xl md:text-3xl font-bold text-pink-800">{stats.tutorsCount}</p>
                    <p className="text-lg md:text-2xl font-bold text-black">Experienced tutors</p>
                </div>

                <div className="flex flex-col items-center border border-rose-400 p-5 md:p-10 rounded-lg bg-rose-200 shadow-lg">
                    <p className="text-xl md:text-3xl font-bold text-pink-800">{stats.totalReviews}</p>
                    <p className="text-lg md:text-2xl font-bold text-black">5-star tutor reviews</p>
                </div>

                <div className="flex flex-col items-center border border-rose-400 p-5 md:p-10 rounded-lg bg-rose-200 shadow-lg">
                    <p className="text-xl md:text-3xl font-bold text-pink-800">{stats.totalLanguage}</p>
                    <p className="text-lg md:text-2xl font-bold text-black">total languages</p>
                </div>

                <div className="flex flex-col items-center border border-rose-400 p-5 md:p-10 rounded-lg bg-rose-200 shadow-lg">
                    <p className="text-xl md:text-3xl font-bold text-pink-800">{stats.usersCount}</p>
                    <p className="text-lg md:text-2xl font-bold text-black">Number of active users</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;