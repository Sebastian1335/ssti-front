import { Navigate, Route, Routes } from "react-router-dom";
import { CuniPage } from "../pages/CuniPage";
import { useSelector } from "react-redux";
import { AdminPage } from "../pages/AdminPage";

export const CuniRoutes = () => {
    const { rol } = useSelector((state) => state.auth);
    return (
        <Routes>
            {rol === "ADMIN" ? (
                <>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/*" element={<Navigate to={"/admin"} />} />
                </>
            ) : (
                <>
                    <Route path="/" element={<CuniPage />} />
                    <Route path="/*" element={<Navigate to={"/"} />} />
                </>
            )}
        </Routes>
    );
};
