import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "not-authenticated",
        id: null,
        rol: null,
        email: null,
        displayName: null,
        nivel: null,
        exp: null,
        racha: null,
        monedas: null,
        direccion: null,
        numeroCel: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = "authenticated";
            state.id = payload.id
            state.rol = payload.rol
            state.email = payload.email
            state.displayName = payload.nombre
            state.nivel = payload.nivel
            state.exp = payload.exp
            state.racha = payload.racha
            state.monedas = payload.monedas
            state.direccion = payload.direccion
            state.numeroCel = payload.numeroCel
            state.errorMessage = payload.errorMessage
        },
        logout: (state, {payload}) => {
            state.status = "not-authenticated";
            state.id = null
            state.rol = null
            state.email = null
            state.displayName = null
            state.nivel = null
            state.exp = null
            state.racha = null
            state.monedas = null
            state.direccion = null
            state.numeroCel = null
            state.errorMessage = 'Logeo exitoso'

            localStorage.removeItem("token")
        },
        checkingCredentials: (state, action) => {
            state.status = 'checking';
        },
    }

})

export const {login, logout, checkingCredentials} = authSlice.actions