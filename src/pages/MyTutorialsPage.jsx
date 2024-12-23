import { useContext } from "react";
import { GlobalContext } from "../provider/AuthProvider";
import axios from "axios";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import defaultImage from "../assets/avatar.jpg";

const MyTutorialsPage = () => {

    const server_url = import.meta.env.VITE_server_url;

    const { user } = useContext(GlobalContext);

    const fetchMyTutorials = async () => {
        const { data } = await axios.get(`${server_url}/my-tutorials/${user.email}`);
        return data;
    };

    const { data: myTutorials, isLoading, error } = useQuery({ queryKey: ["myTutorials"], queryFn: fetchMyTutorials });
    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error.message);
        return
    }

    return (
        <div className="overflow-x-auto max-w-[90%] mx-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>5 Star Review</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myTutorials.map((mt) => {
                            return (
                                <tr key={mt._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={mt.image }
                                                        onError={(e) => {
                                                            e.target.src = defaultImage;
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{mt.name}</div>
                                                <div className="text-sm opacity-50">{mt.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {mt.language}
                                    </td>
                                    <td>{mt.price}</td>
                                    <td>{mt.description}</td>
                                    <td>{mt.review}</td>
                                    <td className="space-x-3">
                                        <button className="btn btn-primary">Update</button>
                                        <button className="btn btn-error">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyTutorialsPage;