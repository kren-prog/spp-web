import { BookmarkStarFill } from 'react-bootstrap-icons';
import { Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function TiposForm({ initialValues, onSubmit, isEdit }) {

  const { handleSubmit, register, watch, formState: { errors, isSubmitting } } = useForm({
    defaultValues: initialValues,
  });

  return (

      <form onSubmit={handleSubmit(onSubmit)}>

        <Row>

          <Col>
            <div className='form-group'>
              <label>CodTipoGenerico</label>
              <input type='text' className='form-control'
                {...register('codTipoGenerico', {
                  required: 'El campo \'CodTipoGenerico\' es requerido',
                  maxLength: { value: 3, message: 'El campo \'CodTipoGenerico\' no debe exceder los 3 caracteres' },
                })}
                disabled={isEdit}
              />
              {errors.codTipoGenerico && <p className='text-danger'>{errors.codTipoGenerico.message}</p>}
            </div>
          </Col>

          <Col>
            <div className='form-group'>
              <label>CodTipoCadena</label>
              <input type='text' className='form-control'
                {...register('codTipoCadena', {
                  required: 'El campo \'CodTipoCadena\' es requerido',
                  maxLength: { value: 3, message: 'El campo \'CodTipoCadena\' no debe exceder los 3 caracteres' },
                })}
                disabled={isEdit}
              />
              {errors.codTipoCadena && <p className='text-danger'>{errors.codTipoCadena.message}</p>}
            </div>
          </Col>

          <Col>
            <div className='form-group'>
              <label>CodTipoEntero</label>
              <input type='number' className='form-control' {...register('codTipoEntero', {
                  required: 'El campo \'CodTipoEntero\' es requerido'})} disabled={isEdit}/>
              {errors.codTipoEntero && <p className='text-danger'>{errors.codTipoEntero.message}</p>}
            </div>
          </Col>

        </Row>

        <Row>

          <Col>
            <div className='form-group'>
              <label>AtributoC1</label>
              <input
                type="text" className='form-control'
                {...register('atributoC1', { maxLength: { value: 3, message: 'El campo \'AtributoC1\' no debe exceder los 3 caracteres' } })}
              />
              {errors.atributoC1 && <p className='text-danger'>{errors.atributoC1.message}</p>}
            </div>
          </Col>

          <Col>
            <div className='form-group'>
              <label>AtributoC2</label>
              <input
                type="text" className='form-control'
                {...register('atributoC2', { maxLength: { value: 3, message: 'El campo \'AtributoC2\' no debe exceder los 3 caracteres' } })}
              />
              {errors.atributoC2 && <p className='text-danger'>{errors.atributoC2.message}</p>}
            </div>
          </Col>

          <Col>
            <div className='form-group'>
              <label>AtributoC3</label>
              <input
                type="text" className='form-control'
                {...register('atributoC3', { maxLength: { value: 3, message: 'El campo \'AtributoC3\' no debe exceder los 3 caracteres' } })}
              />
              {errors.atributoC3 && <p className='text-danger'>{errors.atributoC3.message}</p>}
            </div>
          </Col>

          <Col>
            <div className='form-group'>
              <label>AtributoC4</label>
              <input
                type="text" className='form-control'
                {...register('atributoC4', { maxLength: { value: 3, message: 'El campo \'AtributoC4\' no debe exceder los 3 caracteres' } })}
              />
              {errors.atributoC4 && <p className='text-danger'>{errors.atributoC4.message}</p>}
            </div>
          </Col>

        </Row>

        <Row>

          <Col>
            <div className='form-group'>
              <label>AtributoN1</label>
              <input
                type="number" className='form-control'
                {...register('atributoN1')}
              />
              {errors.atributoN1 && <p className='text-danger'>{errors.atributoN1.message}</p>}
            </div>
          </Col>

          <Col>
            <div className='form-group'>
              <label>AtributoN2</label>
              <input
                type="number" className='form-control'
                {...register('atributoN2')}
              />
              {errors.atributoN2 && <p className='text-danger'>{errors.atributoN2.message}</p>}
            </div>
          </Col>

          <Col>
            <div className='form-group'>
              <label>AtributoN3</label>
              <input
                type="number" className='form-control'
                {...register('atributoN3')}
              />
              {errors.atributoN3 && <p className='text-danger'>{errors.atributoN3.message}</p>}
            </div>
          </Col>

          <Col>
            <div className='form-group'>
              <label>AtributoN4</label>
              <input
                type="number" className='form-control'
                {...register('atributoN4')}
              />
              {errors.atributoN4 && <p className='text-danger'>{errors.atributoN4.message}</p>}
            </div>
          </Col>

        </Row>

        <div className='form-group'>
          <label>Descripcion</label>
          <input
            type="text" className='form-control'
            {...register('descripcion', {
              maxLength: { value: 40, message: 'El campo \'Descripcion\' no debe exceder los 40 caracteres' },
            })}
          />
          {errors.descripcion && <p className='text-danger'>{errors.descripcion.message}</p>}
        </div>

        <div className='form-group'>
          <label>DescripcionAtributos</label>
          <input
            type="text" className='form-control'
            {...register('descripcionAtributos', {
              maxLength: { value: 200, message: 'El campo \'DescripcionAtributos\' no debe exceder los 200 caracteres' },
            })}
          />
          {errors.descripcionAtributos && <p className='text-danger'>{errors.descripcionAtributos.message}</p>}
        </div>

        <div className='form-group'>
          <label>Secuencia</label>
          <input
            type="number" className='form-control'
            {...register('secuencia')}
          />
          {errors.secuencia && <p className='text-danger'>{errors.secuencia.message}</p>}
        </div>

        <div className='form-group'>
          <label>SwModificaUsuario</label>
          <input
            type="number" className='form-control'
            {...register('swModificaUsuario')}
          />
          {errors.swModificaUsuario && <p className='text-danger'>{errors.swModificaUsuario.message}</p>}
        </div>

        <div className='text-center'>
          <Button variant="success" className='btn btn-sm m-2 fw-bold' type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Guardar'} <BookmarkStarFill color="white" size={18} title="Save" />
          </Button>
        </div>

      </form>
    
  );
}

export default TiposForm;