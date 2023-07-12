/****************************************
 -------------- COMPONENTS --------------
 ****************************************/
 import SpinnerDefault from './SpinnerDefault';
 /****************************************
  ----------------- HOCs -----------------
  ****************************************/
 import WithFullScreenCenterContent from './WithFullScreenCenterContent';
/****************************************
 ----------------- REACT ----------------
 ****************************************/
 import { Suspense, lazy } from 'react';
/****************************************
 -------------- PROP TYPES --------------
 ****************************************/
 import PropTypes from 'prop-types';
 SuspenseDefault.propTypes = {
  path: PropTypes.any.isRequired
 };
/****************************************
 ---------- FUNCTION COMPONENT ----------
 ****************************************/
function SuspenseDefault({
  path
}) {
  const LazyComponent = lazy(() => path);
  const SpinnerCenteredFullScreen = WithFullScreenCenterContent(<SpinnerDefault/>);
  return (
    <Suspense fallback={ <SpinnerCenteredFullScreen/> }>
      <LazyComponent/>
    </Suspense>
  );
} export default SuspenseDefault;