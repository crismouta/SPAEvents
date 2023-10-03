import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            className=""
            onClick={() =>
                loginWithRedirect({
                    appState: {
                        returnTo: window.location.pathname,
                    },
                })
            }
        >
            Log In
        </button>
    );
};

export default LoginButton;