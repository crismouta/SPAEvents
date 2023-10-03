import { Auth0Provider } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

function Auth0ProviderWithNavigate({ children }) {
    

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
    const redirectUri = window.location.origin;

    const onRedirectCallback = (appState) => {
        <Navigate to={appState?.returnTo || window.location.pathname} />
        /* navigate(appState?.returnTo || window.location.pathname); */
    };

    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                audience: audience,
                redirect_uri: window.location.origin,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            
            {children}
        </Auth0Provider>
    );

}

Auth0ProviderWithNavigate.propTypes = {
    children: PropTypes.object
};

export default Auth0ProviderWithNavigate;