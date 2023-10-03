import { useAuth0 } from "@auth0/auth0-react";

const RegisterButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            className=""
            onClick={() =>
                loginWithRedirect({
                    appState: {
                        returnTo: "/profile",
                    },
                    authorizationParams: {
                        screen_hint: "signup",
                    },
                })
            }
        >
            Sign up
        </button>
    );
};

export default RegisterButton;