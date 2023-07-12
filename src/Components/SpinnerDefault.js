/****************************************
 ------------ REACT BOOTSTRAP -----------
 ****************************************/
import Spinner from 'react-bootstrap/Spinner';
/****************************************
 -------------- PROP TYPES --------------
 ****************************************/
 import PropTypes from 'prop-types';
 SpinnerDefault.propTypes = {
  small: PropTypes.bool
 };
/****************************************
 ---------- FUNCTION COMPONENT ----------
 ****************************************/
function SpinnerDefault({
  small
}) {
  return (
    <Spinner size={ !!small && 'sm' } animation='border' variant='secondary'/>
  );
} export default SpinnerDefault;