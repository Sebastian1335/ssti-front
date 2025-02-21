import axios from "axios";
import { useEffect, useState } from "react";
import './adminpage.css'
import { NavBar } from "../components/NavBar";
export const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const jwt = localStorage.getItem("token")
    useEffect(() => {
        async function getUsers() {
            
            try {
                const {data} = await axios.get("http://localhost:3000/api/auth/getUsers", {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
                setUsers(data)
            } catch (error) {
                console.log("error al obtener usuarios")
            }
        }
        getUsers()
    
    }, [])
    
    return (
        <div className="admin-container">
            <NavBar/>
            <div className="admin-box">
                <h1 className="admin-title">Lista de Usuarios</h1>
                <div className="admin-table-container">

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>contraseña</th>
                            <th>Rol</th>
                            <th>direccion</th>
                            <th>celular</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nombre}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.rol}</td>
                                <td>{user.direccion}</td>
                                <td>{user.numeroCel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};
