import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
import { toast } from "react-toastify";
import ReactPlayer from 'react-player/youtube'

const Videos = () => {
    const server_url = import.meta.env.VITE_server_url;

    const fetchVideos = async () => {
        const { data } = await axios.get(`${server_url}/get-videos`);
        return data;
    };

    const { data: videos, isLoading, error } = useQuery({ queryKey: ["videos"], queryFn: fetchVideos });

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(error);
        return
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto pt-5">
            {
                videos.map((video) => {
                    return (
                        <div key={video._id} className="card shadow-xl bg-green-300 text-black font-bold">
                            <figure>
                                <ReactPlayer url={video.youTubeUrl} controls={true} />
                            </figure>
                            <div className="card-body">
                                <p>{video.description}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{video.tutorName}</div>
                                    <div className="badge badge-outline">{video.language}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Videos;