import React, { useContext, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { authContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const { login, error } = useContext(authContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleValues() {
        if (!email || !password) {
            alert("заполните поля!");
            return;
        }
        login(email, password, navigate);
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="70vh">
            <Typography variant="h3" component="h2">
                Авторизоваться
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: "40%", margin: "10px" }}
                id="outlined-basic"
                label="Почта"
                variant="outlined"
            />
            <TextField
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ width: "40%", margin: "10px" }}
                id="standard-password-input"
                label="Пароль"
                variant="outlined"
                type="password"
                autoComplete="current-password"
            />
            <Button variant="contained" color="success" style={{ width: "40%", margin: "10px" }} onClick={handleValues}>
                Войти
            </Button>
            <Typography color="black" variant="p" component="h2">
                Нет аккаунта?
            </Typography>
            <Typography
                onClick={() => navigate("/register")}
                variant="p"
                color="green"
                style={{ cursor: "pointer" }}
                component="h2"
            >
                Зарегистрироваться
            </Typography>
        </Box>
    );
};

export default LoginForm;
