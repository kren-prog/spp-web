import React from 'react'
import { Row, Col } from 'react-bootstrap';
import DepartamentosForm from '../../../Components/DepartamentosMunicipios/DepartamentosForm';
import DepartamentosTable from '../../../Components/DepartamentosMunicipios/DepartamentosTable';
import MunicipiosTable from '../../../Components/DepartamentosMunicipios/MunicipiosTable';
import MunicipiosForm from '../../../Components/DepartamentosMunicipios/MunicipiosForm';


function DepartamentosMunicipios() {



    return (
        <>
            <Row>

                <Col>


                    <DepartamentosForm />
                    <DepartamentosTable />

                </Col>

                <Col>

                    <MunicipiosForm />
                    <MunicipiosTable />


                </Col>

            </Row>
        </>
    )
}

export default DepartamentosMunicipios