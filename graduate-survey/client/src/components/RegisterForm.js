import React, { useContext, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { authContext } from "../context/authContext"; // Убедитесь, что путь правильный
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { signUp, error } = useContext(authContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleValues = () => {
    if (!email || !password) {
      alert("заполните поля!");
      return;
    }
    signUp(email, password, navigate);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="70vh">
      <Typography variant="h3" component="h2">
        Зарегистрироваться
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
        Зарегистрироваться
      </Button>
      <Typography color="black" variant="p" component="h2">
        Уже есть аккаунт?
      </Typography>
      <Typography
        onClick={() => navigate("/login")}
        variant="p"
        color="green"
        style={{ cursor: "pointer" }}
        component="h2"
      >
        Авторизоваться
      </Typography>
    </Box>
  );
};

export default RegisterForm;
