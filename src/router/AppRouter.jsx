import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CuniRoutes } from "../cuni/routes/CuniRoutes"
import { useCheckAuth } from "../hooks/useCheckAuth"

export const AppRouter = () => {
    const status = useCheckAuth()
    if (status === 'checking'){
        return (
            <>
                <h1>Cargando...</h1>
            </>
        )
    }

    return (
        <Routes>
            {
                status === 'authenticated' ?
                <Route path="/*" element={<CuniRoutes/>}/>
                :
                <Route path="/auth/*" element={<AuthRoutes/>}/>
            }
            <Route path="/*" element={<Navigate to={'/auth/login'}/>}/>
        </Routes>
    )
}