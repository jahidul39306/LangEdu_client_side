import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const AllTutorsPage = () => {
    const server_url = import.meta.env.VITE_server_url;

    const fetchTutorials = async () => {
        const { data } = await axios.get(`${server_url}/get-tutorials`);
        return data;
    };

    const { data: tutorials, isLoading, error } = useQuery({ queryKey: ["tutorials"], queryFn: fetchTutorials });
    console.log(tutorials);
    return (
        <div>
            {/* {data.length} */}
        </div>
    );
};

export default AllTutorsPage;