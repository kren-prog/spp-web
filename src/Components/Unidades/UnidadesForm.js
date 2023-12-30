import React from 'react'
import { useForm } from 'react-hook-form';
import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

function UnidadesForm({ initialValues, onSubmit, isEditable }) {
    // watch permite acceder a los valores del form antes del submit o a un valor en especifico
    const { handleSubmit, register, watch, formState: { errors, isSubmitting } } = useForm({
        defaultValues: initialValues,
    });
    console.log(watch('usaDecimal'));
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row">

                <div className="col">
                    <div className='form-group'>
                        <label htmlFor='codUnidad' >Codigo Unidad </label>
                        <input type='text' className='form-control'
                            {...register('codUnidad', {
                                required: 'El campo \'Codigo\' es requerido',
                                minLength: { value: 1, message: 'El campo \'Codigo\' debe tener al menos 1 caracter' },
                                maxLength: { value: 3, message: 'El campo \'Codigo\' no debe exceder los 3 caracteres' },
                            })}
                            disabled={!isEditable}
                        />
                        {errors.codUnidad && <p className='text-danger'>{errors.codUnidad.message}</p>}
                    </div>
                </div>

                <div className="col">
                    <div className='form-group'>
                        <label>Magnitud</label>
                        <input type='text' className='form-control'
                            {...register('magnitud', {
                                minLength: { value: 1, message: 'El campo \'Magnitud\' debe tener al menos 1 caracter' },
                                maxLength: { value: 3, message: 'El campo \'Magnitud\' no debe exceder los 3 caracteres' },
                            })}
                        />
                        {errors.magnitud && <p className='text-danger'>{errors.magnitud.message}</p>}
                    </div>
                </div>

                <div className="col">
                    <div className='form-check mt-4'>
                        <label className='form-check-label'>Usa Decimal</label>
                        <input className='form-check-input'
                            type="checkbox"
                            {...register('usaDecimal', {
                                validate: value => value === 'true' || value === 'false' ? 'El campo \'Usa Decimal\' debe ser verdadero o falso.' : true,
                            })}
                        />
                        {errors.usaDecimal && <p className='text-danger'>{errors.usaDecimal.message}</p>}
                    </div>
                </div>

            </div>

            <div className='form-group'>
                <label>Descripcion </label>
                <input type='text' className='form-control'
                    {...register('desUnidad', {
                        required: 'El campo \'Descripcion\' es requerido',
                        maxLength: { value: 20, message: 'El campo \'Descripcion\' no debe exceder los 20 caracteres' },
                    })}
                />
                {errors.desUnidad && <p className='text-danger'>{errors.desUnidad.message}</p>}
            </div>

            <div className='text-center'>
                <Button variant="success" className='btn btn-sm m-2 fw-bold' type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Guardar'} <BookmarkStarFill color="white" size={18} title="Save" />
                </Button>
            </div>

        </form>
    )
}

export default UnidadesForm