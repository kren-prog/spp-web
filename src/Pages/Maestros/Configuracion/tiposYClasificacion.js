import React from 'react'
import BasicTable from "../../../Components/basicTable";
import PlaintextExample from "../../../Components/tipos";
import BasicModal from '../../../Components/modal';


function TiposYClasificacion() {
    return (
        <>
            <PlaintextExample />
            <BasicModal/>
            <BasicTable></BasicTable>
        </>
    )
}

export default TiposYClasificacion;