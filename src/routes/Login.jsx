import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('gabito@mail.com');
  const [password, setPassword] = useState('123123.');

  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  // const handleClickLogin = () => {
  //   setUser(true);
  //   navigate('/');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`procesando: ${email} - ${password}`);
    try {
      await loginUser(email, password);
      console.log('Sesion iniciada');
    } catch (error) {
      //para saber los errores
      console.log(error.code);
      // alert('Este email ya está registrado');
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </>
  );
};

export default Login;