import React from 'react'
import ColorForm from '../../../Components/ColorForm'

function ConfiguracionColor() {


    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className="w-50">
                    <ColorForm iniColor={'#FC2A27'}/>
                    <ColorForm iniColor={'#27FCE5'}/>
                    <ColorForm iniColor={'#8827FC'}/>
                    <ColorForm iniColor={'#FECD06'}/>
                    <ColorForm iniColor={'#4CB305'}/>
                    <ColorForm iniColor={'#3150FD'}/>
                </div>
            </div>
        </>

    )
}

export default ConfiguracionColor