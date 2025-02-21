import { AuthLayout } from "../layout/AuthLayout";
import "../auth.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { startLoginWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispath = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { email, password, onInputChange } = useForm(formData);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        dispath(startLoginWithEmailPassword({ email, password }));
    };

    const isAthenticating = useMemo(() => status === 'checking', [status])

    return (
        <AuthLayout title="Iniciar Sesión">
            <form className="auth-form">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    required
                />
                <button onClick={onSubmit} type="submit">Ingresar</button>
            </form>
            <button
                disabled = {isAthenticating}
                className="switch-btn"
                onClick={() => navigate("/auth/register")}
            >
                No tienes una cuenta? Regístrate
            </button>
        </AuthLayout>
    );
};
