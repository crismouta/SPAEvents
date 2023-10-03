import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import Auth0ProviderWithNavigate from './router/Auth0ProviderWithNavigate'
//import { Auth0Provider } from '@auth0/auth0-react'



/* const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE; */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0ProviderWithNavigate
      /* domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        redirect_uri: window.location.origin
      }}     */
    >
      <RouterProvider router={router} />
    </Auth0ProviderWithNavigate>
  </React.StrictMode>,
)
