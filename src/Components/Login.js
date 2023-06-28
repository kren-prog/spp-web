import React from 'react'
import { Form, Container, Button, Card, Image, InputGroup, FormControl } from "react-bootstrap";
import { KeyFill, PersonFill, Eye, EyeSlash } from "react-bootstrap-icons";
import svgI from "../assets/images/astronaut.svg";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [showEye, setShowEye] = React.useState(false);

    const login = (e) => {
        e.preventDefault();
        navigate('/maestros-pages/configuracion-tipos');
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
        <Container className="d-flex my-3">
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
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                               
                            />
                        </InputGroup>

                        <InputGroup className="justify-content-end">
                            <InputGroup >
                                <InputGroup.Text id="basic-addon2"><KeyFill /> </InputGroup.Text>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    className="shadow-none pr-4"
                                    placeholder="Password"
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


                        <Button type="submit" variant="primary" className='w-75 mt-2'>Login</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login


{/* 
    <InputGroup className="my-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <PersonFill />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl className="shadow-none" placeholder="Username" />
                    </InputGroup>

<InputGroup className="my-3">
<InputGroup.Prepend>
    <InputGroup.Text>
        <PersonFill />
    </InputGroup.Text>
</InputGroup.Prepend>
<FormControl className="shadow-none" placeholder="Username" />
</InputGroup>



<InputGroup className="justify-content-end">
<InputGroup.Prepend>
    <InputGroup.Text>
        <KeyFill />
    </InputGroup.Text>
</InputGroup.Prepend>
<Button
    variant="white"
    className="my-1 mr-1 px-0 btn-sm bg-white shadow-none position-absolute"
    style={{ zIndex: 4 }}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onMouseLeave={onMouseUp}
    onTouchStart={onMouseDown}
    onTouchEnd={onMouseUp}>
    {showEye ? showPassword ? <EyeSlash /> : <Eye /> : null}
</Button>
<FormControl
    type={showPassword ? "text" : "password"}
    className="shadow-none pr-4"
    placeholder="Password"
    onChange={handleChange}
/>
</InputGroup> 

*/}
