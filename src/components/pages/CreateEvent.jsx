import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const CreateEvent = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImg] = useState('');
    const navigate = useNavigate();

    const { getAccessTokenSilently } = useAuth0();

    const saveProject = async (e) => {
        console.log("entra save")
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);

        e.preventDefault();

        try {
            console.log("entra try1")
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                },
            });
            await axios.post(
                `${import.meta.env.VITE_API_SERVER_URL}/create`, formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            navigate('/events')
            console.log("entra try2")
        }
        catch (error) {
            console.error(error);
        }

    }

    const handleImageChange = (e) => {
        console.log(e.target.files)
        const file = e.target.files[0];
        setImg(file);
    };

    return (
        <div className="create-update-form">
            <div className="text-center">Create New Event</div>
            <form>
                <div className="form-group mb-2">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        placeholder="Write event title"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Image</label>
                    <input
                        type="file"
                        placeholder="Add event image"
                        name="image"
                        className="form-control"
                        defaultValue={image}
                        onChange={handleImageChange}
                    />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        placeholder="Write event description"
                        name="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="d-flex">
                    <button className="btn btn-outline-success m-2" onClick={(e) => saveProject(e)}>Save</button>
                    <Link to='/projects' className="btn btn-outline-danger m-2">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default CreateEvent