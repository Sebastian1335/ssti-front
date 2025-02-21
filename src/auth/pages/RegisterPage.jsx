import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";
import "../auth.css";
import { useNavigate } from "react-router-dom";
import { startSignIn } from "../../store/auth/thunks";
const formData = {
    email: "",
    password: "",
    displayName: "",
    direccion: "",
    numeroCel: "",
};

const formValidations = {
    email: [
        (value) => value.includes("@"),
        "El email debe de tener una arroba",
    ],
    password: [
        (value) => value.length >= 5,
        "El password debe de tener más de 5 letras",
    ],
    displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};
export const RegisterPage = () => {
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector((state) => state.auth);
    const isCheckingAuthentication = useMemo(() => status === "checking", [status])

    const {
        formState,
        displayName,
        email,
        password,
        direccion,
        numeroCel,
        onInputChange,
        isFormValid,
        emailValid,
        passwordValid,
        displayNameValid,
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        if (!isFormValid) return;
        dispatch(startSignIn(formState));
    };
    const navigate = useNavigate();
    return (
        <AuthLayout title="Registro">
            <form className="auth-form">
                <input
                    type="text"
                    placeholder="Nombre"
                    name="displayName"
                    value={displayName}
                    onChange={onInputChange}
                    error={!!displayNameValid }
                    required
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    error={!!emailValid }
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    error={!!passwordValid }
                    required
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    name="direccion"
                    value={direccion}
                    onChange={onInputChange}
                    required
                />
                <input
                    type="tel"
                    placeholder="Número de celular"
                    name="numeroCel"
                    value={numeroCel}
                    onChange={onInputChange}
                    required
                />
                <button type="submit" onClick={onSubmit}>Registrarse</button>
            </form>
            <button
                className="switch-btn"
                onClick={() => navigate("auth/login")}
            >
                ¿Ya tienes una cuenta? Inicia sesión
            </button>
        </AuthLayout>
    );
};
