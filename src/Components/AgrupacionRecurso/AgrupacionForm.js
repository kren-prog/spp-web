import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';

function AgrupacionForm({ initialValues, onSubmit, isEdit }) {

  const { handleSubmit, register, watch, formState: { errors, isSubmitting } } = useForm({
    defaultValues: initialValues,
  });

  console.log(watch('agrupacion'));

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div className='form-group'>
        <label>TipoRecurso</label>
        <input
          type="text" className='form-control'
          {...register('tipoRecurso', {
            required: 'El campo \'TipoRecurso\' es requerido',
            maxLength: { value: 3, message: 'El campo \'TipoRecurso\' no debe exceder los 3 caracteres' },
            pattern: {
              value: /^[A-Za-z0-9]*$/,
              message: 'El campo \'TipoRecurso\' puede contener hasta 3 caracteres alfanuméricos.',
            },
          })}
          disabled={isEdit}
        />
        {errors.tipoRecurso && <p className='text-danger'>{errors.tipoRecurso.message}</p>}
      </div>

      <div className='form-group'>
        <label>Agrupacion</label>
        <input
          type="text" className='form-control'
          {...register('agrupacion', {
            required: 'El campo \'Agrupacion\' es requerido',
            maxLength: { value: 20, message: 'El campo \'Agrupacion\' no debe exceder los 20 caracteres' } 
          })}
          disabled={isEdit}
        />
        {errors.agrupacion && <p className='text-danger'>{errors.agrupacion.message}</p>}
      </div>

      <div className='form-group'>
        <label>DesAgrupacion</label>
        <input
          type="text" className='form-control'
          {...register('desAgrupacion', {
            required: 'El campo \'DesAgrupacion\' es requerido',
            maxLength: { value: 40, message: 'El campo \'DesAgrupacion\' no debe exceder los 40 caracteres' },
          })}
        />
        {errors.desAgrupacion && <p className='text-danger'>{errors.desAgrupacion.message}</p>}
      </div>

      <Row>
        <Col>
          <div className='form-group'>
            <label>Rpm</label>
            <input
              type="number" className='form-control'
              {...register('rpm')}
            />
            {errors.rpm && <p className='text-danger'>{errors.rpm.message}</p>}
          </div>
        </Col>
        <Col>
          <div className='form-group'>
            <label>Mts</label>
            <input
              type="number" className='form-control'
              step="0.01"
              {...register('mts', {
                validate: (value) => {
                  const floatValue = parseFloat(value);
                  return !isNaN(floatValue) || 'El campo \'Mts\' debe tener un formato decimal (6,2).';
                },
              })}
            />
            {errors.mts && <p className='text-danger'>{errors.mts.message}</p>}
          </div>
        </Col>
        <Col>
          <div className='form-group'>
            <label>Carga Minima</label>
            <input
              type="number" className='form-control'
              {...register('cargaMinima')}
            />
            {errors.cargaMinima && <p className='text-danger'>{errors.cargaMinima.message}</p>}
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className='form-group'>
            <label>Produccion</label>
            <input
              type="number" className='form-control'
              step="0.0001"
              {...register('produccion', {
                validate: (value) => {
                  const floatValue = parseFloat(value);
                  return !isNaN(floatValue) || 'El campo \'Produccion\' debe tener un formato decimal (12,4).';
                },
              })}
            />
            {errors.produccion && <p className='text-danger'>{errors.produccion.message}</p>}
          </div>
        </Col>
        <Col>
          <div className='form-group'>
            <label>Eficiencia</label>
            <input
              type="number" className='form-control'
              step="0.01"
              {...register('eficiencia', {
                validate: (value) => {
                  const floatValue = parseFloat(value);
                  return !isNaN(floatValue) || 'El campo \'Eficiencia\' debe tener un formato decimal (6,2).';
                },
              })}
            />
            {errors.eficiencia && <p className='text-danger'> {errors.eficiencia.message}</p>}
          </div>
        </Col>
        <Col>
          <div className='form-group'>
            <label>TiempoEstandar</label>
            <input
              type="number" className='form-control'
              step="0.001"
              {...register('tiempoEstandar', {
                validate: (value) => {
                  const floatValue = parseFloat(value);
                  return !isNaN(floatValue) || 'El campo \'TiempoEstandar\' debe tener un formato decimal (8,3).';
                },
              })}
            />
            {errors.tiempoEstandar && <p className='text-danger'>{errors.tiempoEstandar.message}</p>}
          </div>
        </Col>
      </Row>

      <div className='text-center'>
        <Button variant="success" className='btn btn-sm m-2 fw-bold' type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Guardar'} <BookmarkStarFill color="white" size={18} title="Save" />
        </Button>
      </div>

    </form>

  )
}

export default AgrupacionForm