import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/profile")}
            className=""
        >
            Perfil
        </button>
    );
};

export default ProfileButton;