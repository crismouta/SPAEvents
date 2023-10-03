import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import ProfileButton from "./ProfileButton";

const Header = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            <div className="">
                <div className="">
                    <header className="">
                        
                        <nav className="">
                            <Link
                                to="/"
                                className=""
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/about"
                                className=""
                            >
                                About
                            </Link>
                            <Link
                                to="/admin"
                                className=""
                            >
                                Admin View
                            </Link>
                            <Link
                                to="/events"
                                className=""
                            >
                                Events
                            </Link>
                        </nav>
                        {/* nav - end */}
                        {/* buttons - start */}
                        <div className="">
                            {isAuthenticated ? (
                                <>
                                    <LogoutButton />
                                    <ProfileButton />
                                </>
                            ) : (
                                <>
                                    <LoginButton />
                                    <RegisterButton />
                                </>
                            )}
                        </div>
                
                    </header>
                </div>
            </div>
        </>
    );
};

export default Header;