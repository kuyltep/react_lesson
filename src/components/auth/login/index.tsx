import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: 3,
          fontFamily: "Popins",
        }}
        variant="h2"
        component="h2"
      >
        Авторизация
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: 3,
          fontFamily: "Popins",
        }}
        variant="body1"
      >
        Введите ваш логин и пароль
      </Typography>
      <TextField
        sx={{
          marginBottom: 3,
        }}
        fullWidth={true}
        label="Email"
        variant="outlined"
        placeholder="Введите ваш Email"
      />
      <TextField
        sx={{
          marginBottom: 3,
        }}
        type="password"
        fullWidth={true}
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
      />
      <Button
        sx={{
          fontFamily: "Popins",
          width: "60%",
          marginBottom: 3,
        }}
        variant="contained"
      >
        ВОЙТИ
      </Button>
      <Typography variant="body1" sx={{ fontFamily: "Popins" }}>
        У вас нет аккаунта? <span className="insitingText">Регистрация</span>
      </Typography>
    </>
  );
};

export default LoginPage;
