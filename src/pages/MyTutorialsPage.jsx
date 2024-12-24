import { useContext } from "react";
import { GlobalContext } from "../provider/AuthProvider";
import axios from "axios";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import defaultImage from "../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyTutorialsPage = () => {

    const server_url = import.meta.env.VITE_server_url;

    const navigate = useNavigate();

    const { user } = useContext(GlobalContext);

    const fetchMyTutorials = async () => {
        const { data } = await axios.get(`${server_url}/my-tutorials/${user.email}`);
        return data;
    };

    const { data: myTutorials, isLoading, error, refetch, isFetching} = useQuery({ queryKey: ["myTutorials"], queryFn: fetchMyTutorials });
    if (isLoading || isFetching) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error.message);
        return
    }

    const handleUpdate = (tutorialId) => {
        navigate(`/update-tutorial/${tutorialId}`);
    }

    const handleDelete = async (tutorialId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`${server_url}/delete-tutorial/${tutorialId}?email=${user.email}`);
                    toast.success("Successfully deleted tutorial.");
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }
                catch (error) {
                    console.error('Error updating tutorial, ', error);
                    toast.error(error);
                }

            }
        });
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
                                                        src={mt.image}
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
                                        <button
                                            onClick={() => handleUpdate(mt._id)}
                                            className="btn btn-primary">Update</button>

                                        <button
                                            onClick={() => handleDelete(mt._id)}
                                            className="btn btn-error">Delete</button>
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