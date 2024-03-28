import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Usa getAuth() para obtener la instancia de autenticación utilizando la configuración de Firebase inicializada.
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Utiliza signInWithEmailAndPassword con la instancia de autenticación, el email y la contraseña.
      await signInWithEmailAndPassword(auth, email, password);
      // Si el inicio de sesión es exitoso, puedes redirigir al usuario o manejar la sesión como prefieras.
      navigate("/homepage");
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      // Maneja errores aquí, como mostrar un mensaje al usuario.
    }
  };

  return (
    <Box
      bgImage={
        "https://images.unsplash.com/photo-1599552993611-9e6d0ef728ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      h={"100vh"}
      display={"flex"}
      alignItems={"center"}
    >
      <Container bg={"white"} opacity={"1"} p={5} borderRadius={"6px"}>
        <Stack spacing={1}>
          <FormControl>
            <Heading>La Lolilla </Heading>
          </FormControl>{" "}
          <FormControl>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
