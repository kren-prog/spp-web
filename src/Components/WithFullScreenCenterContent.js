/****************************************
 ------------------ HOC -----------------
 ****************************************/
const WithFullScreenCenterContent = ( NewComponent ) => {
  function WrappedComponent() {
    return (
      <div className={`
        position-absolute d-flex
        w-100 h-100 top-0 start-0
        justify-content-center align-items-center`}>
        { NewComponent }
      </div>
    );
  } return WrappedComponent;
}; export default WithFullScreenCenterContent;
/****************************************
 -------------- PROP TYPES --------------
 ****************************************/
//  import PropTypes from 'prop-types';
//  WithFullScreenCenterContent.propTypes = {
//   NewComponent: PropTypes.element
//  };
 WithFullScreenCenterContent.displayName = 'WithFullScreenCenterContent';