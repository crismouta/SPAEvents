import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from "jwt-decode";

const Admin = () => {
    const { getAccessTokenSilently } = useAuth0();

    const callApi = async () => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                },
            });

            console.log("token: " + token);
            var decodedHeader = jwt_decode(token, { header: true });
            console.log(decodedHeader);

            const response = await axios.get(
                `${import.meta.env.VITE_API_SERVER_URL}/create`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log(response);

            const responseData = response.data;

            alert(responseData.message);
        } catch (error) {
            alert(error);
            console.error(error);
        }
    };

    return (
        <div className="">
            <h1 className="">Vista Administrador.</h1>
            <div className="">
                Esta es la vista del administrador, prueba llamando a una api exclusiva
                para usuarios administradores.
            </div>
            <button
                onClick={callApi}
                className=""
            >
                Call Admin API
            </button>
        </div>
    )

}

export default Admin;