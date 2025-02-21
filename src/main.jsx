import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CuniApp } from "./CuniApp";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import './styles.css'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CuniApp />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
