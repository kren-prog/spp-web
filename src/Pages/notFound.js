import React from 'react'
import { Image, Container } from "react-bootstrap";
import notFound404 from "../assets/images/404.svg";

function NotFound() {
    return (
        <Container className='d-flex justify-content-center'>
            <Image
                className="m-lg-auto"
                src={notFound404}
                height={500}
            />
        </Container>
    )
}

export default NotFound