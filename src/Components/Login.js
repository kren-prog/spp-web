import React from 'react'
import { Form, Container, Button, Card, Image, InputGroup } from "react-bootstrap";
import { KeyFill, PersonFill, Eye, EyeSlash } from "react-bootstrap-icons";
import svgI from "../assets/images/astronaut.svg";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login() {
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [showEye, setShowEye] = React.useState(false);
    const authContext = React.useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        navigate('/maestros-pages/configuracion-tipos');
        authContext.updateUser(name);
    };

    const handleChange = (event) => {
        if (event.target.value !== "") {
            setShowEye(true)
        } else {
            setShowEye(false)
        }
    }

    const onMouseDown = () => {
        setShowPassword(true)
    }

    const onMouseUp = () => {
        setShowPassword(false)
    }

    return (
        <Container className="">

            <div className='row' style={{
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "min-height": "75vh"
            }}>
                <div class="col-12 col-sm-10 col-lg-6 col-xl-4">

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
                            <Form onSubmit={login}>
                                <InputGroup className="my-3">
                                    <InputGroup.Text id="basic-addon1"><PersonFill /></InputGroup.Text>
                                    <Form.Control
                                        className="shadow-none"
                                        placeholder="Usuario"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
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


                                <Button type="submit" variant="primary" className='w-75 mt-2'>Iniciar sesion</Button>
                            </Form>
                        </Card.Body>
                    </Card>

                </div>

            </div>

        </Container>
    )
}

export default Login



