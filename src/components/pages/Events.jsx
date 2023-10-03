import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Events = () => {
    const { user, getAccessTokenSilently } = useAuth0();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const updateEventList = async () => {
            try {
                const token = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                    },
                });
                const response = await axios.get(
                    `${import.meta.env.VITE_API_SERVER_URL}/events`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }

                );
                setEvents(response.data);
                console.error(response.data);

            }
            catch (error) {
                console.error(error);
            }
        };
        updateEventList()
    }, [getAccessTokenSilently]);

    const isAdmin = () => {
        if (user['https://apiprueba/roles'][0] == "admin") {
            return true
        }
        return false
    }
    console.log(isAdmin())

    return (
        <div className=''>
            {isAdmin() && (
                <div className=''>
                    <Link to='/create-event' className=''>Create New Event</Link>
                </div>
            )}
            <div className=''>
                {
                    events.map((event) =>
                        <div className="" key={event.id}>
                            <img src={event.image} className="imagen" alt="..." />
                            <div className="">
                                <h5 className="">Title: {event.title}</h5>
                                <p className="">{event.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Events;