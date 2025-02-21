import { useDispatch } from "react-redux";
import "./NavBar.css";
import { logout } from "../../store/auth/authSlice";

export const NavBar = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Cuni</div>
            <button className="logout-btn" onClick={onLogout}>Cerrar sesión</button>
        </nav>
    );
};
