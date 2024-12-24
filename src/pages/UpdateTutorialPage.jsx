import { useContext, useState } from "react";
import { GlobalContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import useAxiosSecure from "../hooks/useAxiosSecure";


const UpdateTutorialPage = () => {

    const [err, setErr] = useState('');

    const { user } = useContext(GlobalContext);
    const navigate = useNavigate();


    const params = useParams();
    const tutorialId = params.tutorialId;

    const axiosSecure = useAxiosSecure();

    const fetchDetails = async () => {
        const { data } = await axiosSecure.get(`/get-tutor/${tutorialId}?email=${user.email}`);
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



    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const review = Number(form.review.value);
        const description = form.description.value;

        if (language === 'None') {
            toast.error('Please, select a language.');
            setErr('Please, select a language.');
            return
        }

        const tutorial = {
            name: user.displayName,
            email: user.email,
            image,
            language,
            price,
            description,
            review,
        }
        try {
            await axiosSecure.put(`/update-tutorial/${tutor._id}`, tutorial);
            toast.success("Successfully updated tutorial.");
            navigate('/my-tutorials');
        }
        catch (error) {
            console.error('Error updating tutorial, ', error);
            toast.error(error);
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="card-body max-w-3xl grid grid-cols-1 md:grid-cols-2 bg-green-100 rounded-xl shadow-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Email</span>
                    </label>
                    <input name="userEmail" type="email" placeholder="Email" className="input input-bordered" readOnly defaultValue={user.email} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Username</span>
                    </label>
                    <input name="userName" type="text" placeholder="Username" className="input input-bordered" readOnly defaultValue={user.displayName} />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Image URL (optional)</span>
                    </label>
                    <input name="image" type="text" placeholder="Image URL" className="input input-bordered" defaultValue={tutor.image}/>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Language</span>
                    </label>
                    <select defaultValue={tutor.language} name="language" className="select select-info w-full border-none">
                        <option value='None'>Select language</option>
                        <option value='English'>English</option>
                        <option value='Spanish'>Spanish</option>
                        <option value='French'>French</option>
                        <option value='German'>German</option>
                        <option value='Italian'>Italian</option>
                        <option value='Chinese'>Chinese</option>
                        <option value='Arabic'>Arabic</option>
                        <option value='Japanese'>Japanese</option>
                        <option value='Portuguese'>Portuguese</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Price</span>
                    </label>
                    <input name="price" type="number" placeholder="Price" className="input input-bordered" required min='0' step="0.01" defaultValue={tutor.price}/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Review (optional)</span>
                    </label>
                    <input name="review" type="number" placeholder="Review" className="input input-bordered" defaultValue={tutor.review} step="1" readOnly/>
                </div>


                <div className="md:col-span-2">
                    <label className="label">
                        <span className="label-text text-black">Description</span>
                    </label>
                    <textarea defaultValue={tutor.description} name="description" className="textarea textarea-primary w-full resize-none textarea-lg" placeholder="Description" required></textarea>
                </div>

                {/* error */}
                {
                    err && <p className="text-lg text-red-500 p-2 md:col-span-2">{err}</p>
                }

                <div className="form-control mt-6 md:col-span-2">
                    <button className="btn bg-green-500 text-black">Update tutorial</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTutorialPage;