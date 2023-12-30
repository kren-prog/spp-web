import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BookmarkStarFill } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';

function ConversionForm({ initialValues, onSubmit }) {

  const { handleSubmit, register, watch, setValue, formState: { errors, isSubmitting } } = useForm({
    defaultValues: initialValues,
  });

  const usaSql = watch("usaSqlFactor");

  React.useEffect(() => {
    // Limpiar el campo Arg1 cuando usaSqlFactor cambie a false
    if (!usaSql) {
      setValue('arg1', '');
      setValue('arg2', '');
      setValue('arg3', '');
    }
  }, [usaSql, setValue]);

  return (
    <>
   
      <form onSubmit={handleSubmit(onSubmit)}>

        <Row>
          <Col>
            <div className="form-group">
              <label>CodUnidadOrigen</label>
              <input
                type="text"
                name="codUnidadOrigen"
                className="form-control"
                {...register('codUnidadOrigen', { maxLength: 3, pattern: /^[A-Za-z0-9]*$/ })}
              />
              {errors.codUnidadOrigen && <p className="text-danger">{errors.codUnidadOrigen.message}</p>}
            </div>
          </Col>
          <Col>
            <div className="form-group">
              <label>CodUnidadDestino</label>
              <input
                type="text"
                name="codUnidadDestino"
                className="form-control"
                {...register('codUnidadDestino', { maxLength: 3, pattern: /^[A-Za-z0-9]*$/ })}
              />
              {errors.codUnidadDestino && <p className="text-danger">{errors.codUnidadDestino.message}</p>}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="form-group">
              <label>Factor de conversion</label>
              <input
                type="number"
                step="0.0000000001"
                name="factor"
                className="form-control"
                {...register('factor')}
              />
              {errors.factor && <p className="text-danger">{errors.factor.message}</p>}
            </div>
          </Col>
          <div className="col">
            <div className='form-check mt-4'>
              <label className='form-check-label'>Usa sql factor</label>
              <input className='form-check-input'
                type="checkbox"
                {...register('usaSqlFactor')}
              />
              {errors.usaSqlFactor && <p className='text-danger'>{errors.usaSqlFactor.message}</p>}
            </div>
          </div>
        </Row>

        <div className="form-group">
          <label>Arg1</label>
          <input
            type="text"
            name="arg1"
            className="form-control"
            {...register('arg1', { maxLength: 255 })}
            disabled={!usaSql}
          />
          {errors.arg1 && <p className="text-danger">{errors.arg1.message}</p>}
        </div>

        <div className="form-group">
          <label>Arg2</label>
          <input
            type="text"
            name="arg2"
            className="form-control"
            {...register('arg2', { maxLength: 100 })}
            disabled={!usaSql}
          />
          {errors.arg2 && <p className="text-danger">{errors.arg2.message}</p>}
        </div>

        <div className="form-group">
          <label>Arg3</label>
          <input
            type="text"
            name="arg3"
            className="form-control"
            {...register('arg3', { maxLength: 100 })}
            disabled={!usaSql}
          />
          {errors.arg3 && <p className="text-danger">{errors.arg3.message}</p>}
        </div>

        <div className="form-group">
          <label>Sql factor</label>
          <textarea
            type="text"
            name="sqlFactor"
            className="form-control"
            {...register('sqlFactor', { maxLength: 300 })}
            disabled={!usaSql}
          />
          {errors.sqlFactor && <p className="text-danger">{errors.sqlFactor.message}</p>}
        </div>



        <div className='text-center'>
          <Button variant="success" className='btn btn-sm m-2 fw-bold' type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Guardar'} <BookmarkStarFill color="white" size={18} title="Save" />
          </Button>
        </div>

      </form>

    </>
  )
}

export default ConversionForm