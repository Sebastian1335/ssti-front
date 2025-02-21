import axios from "axios"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startSignIn = (registerObj) => {
    return async(dispatch) => {
        
        const body = {
            email: registerObj.email,
            name: registerObj.displayName,
            password: registerObj.password,
            direccion: registerObj.direccion,
            numeroCel: registerObj.numeroCel,
        }
        dispatch(checkingCredentials())
        try {
            const {data} = await axios.post("http://localhost:3000/api/auth/register", body, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            localStorage.setItem("token", data.token);
            // console.log(data.user)
            dispatch(login(data.user))
            
        } catch (error) {
            dispatch(logout({errorMessage: "Error al registrar"}))
        }

    }
}

export const startLogout = () => {
    return async(dispatch) => {
        dispatch(logout({}))
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        try {
            const {data} = await axios.post("http://localhost:3000/api/auth/login", {email, password}, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            localStorage.setItem("token", data.token);
            // console.log(data.user)
            dispatch(login(data.user))   
        } catch (error) {
            dispatch(logout({errorMessage: "Error al registrar"}))
        }
    }
}