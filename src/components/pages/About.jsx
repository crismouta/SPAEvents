import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const About = () => {
    const { getAccessTokenSilently } = useAuth0();

    const callApi = async () => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                },
            });

            console.log("token: " + token);

            const response = await axios.get(
                `${import.meta.env.VITE_API_SERVER_URL}/events`,
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
            <h1 className="">Vista Cliente.</h1>
            <div className="">
                Esta es la vista del cliente, podes probar llamando a una api protegida.
            </div>
            <button
                onClick={callApi}
                className=""
            >
                Call Client API
            </button>
        </div>
    )

}

export default About;