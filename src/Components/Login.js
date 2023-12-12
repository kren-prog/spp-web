import React, { useState } from 'react'
import { Form, Container, Button, Card, Image, InputGroup } from "react-bootstrap";
import { KeyFill, PersonFill, Eye, EyeSlash } from "react-bootstrap-icons";
import svgI from "../assets/images/astronaut.svg";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = React.useState(false);
    const [showEye, setShowEye] = React.useState(false);
    const authContext = React.useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        navigate('/maestros-pages/basicos-unidades');
        authContext.updateUser(username);
    };

    const handleChange = (event) => {
        if (event.target.value !== "") {
            setShowEye(true);
            setPassword(event.target.value)
        } else {
            setShowEye(false);
        }
    }

    const onMouseDown = () => {
        setShowPassword(true)
    }

    const onMouseUp = () => {
        setShowPassword(false)
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://www.ingesoftware.net:8015/api/IsUsuarios/login', {
                username: username,
                password: password,
            });

            if (response.status === 200) {
                const token = response.data.data; // aca viene el token -_-
                // Guarda el token en el almacenamiento local (localStorage)
                localStorage.setItem('token', token);
                // Redirecciona o realiza otras acciones después del inicio de sesión
                navigate('/maestros-pages/basicos-unidades');
                authContext.updateUser(username);
            } else {
                // Maneja errores de autenticación
                console.error('Error de autenticación');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <Container className="">

            <div className='row' style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               minHeight: "75vh"
            }}>
                <div className="col-12 col-sm-10 col-lg-6 col-xl-4">

                    <Card className="text-center mx-auto bg-light">
                        <Image
                            className="mx-auto mt-2"
                            height={171}
                            width={150}
                            src={svgI}
                        />
                        <Card.Body className="pt-0">
                            <Card.Header className="bg-warning text-white">
                                <span>Bienvenido</span>
                            </Card.Header>
                            <Form >
                                <InputGroup className="my-3">
                                    <InputGroup.Text id="basic-addon1"><PersonFill /></InputGroup.Text>
                                    <Form.Control
                                        className="shadow-none"
                                        placeholder="Usuario"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        autoFocus
                                    />
                                </InputGroup>

                                <InputGroup className="justify-content-end">
                                    <InputGroup >
                                        <InputGroup.Text id="basic-addon2"><KeyFill /> </InputGroup.Text>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            className="shadow-none pr-4"
                                            placeholder="Contraseña"
                                            onChange={handleChange}
                                        />
                                        <Button
                                            variant="white"
                                            className="my-1 mr-1 px-0 btn-sm bg-white shadow-none "

                                            onMouseDown={onMouseDown}
                                            onMouseUp={onMouseUp}
                                            onMouseLeave={onMouseUp}
                                            onTouchStart={onMouseDown}
                                            onTouchEnd={onMouseUp}>
                                            {showEye ? showPassword ? <EyeSlash /> : <Eye /> : null}
                                        </Button>

                                    </InputGroup>


                                </InputGroup>


                                <Button onClick={handleLogin} variant="primary" className='w-75 mt-2'>Iniciar sesion</Button>
                            </Form>
                        </Card.Body>
                    </Card>

                </div>

            </div>

        </Container>
    )
}

export default Login



