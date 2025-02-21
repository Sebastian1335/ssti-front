import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth/authSlice";
import axios from "axios";

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                dispatch(logout());
                return;
            }

            try {
                const { data } = await axios.get("http://localhost:3000/api/auth/check", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                dispatch(login(data));

            } catch (error) {
                console.error("Error verificando token:", error);
                dispatch(logout());
            }
        };

        verifyToken();
    }, [dispatch]);
    console.log(status)
    return status;
};
