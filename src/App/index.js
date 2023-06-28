import HeaderNavbar from "../Components/HeaderNavbar";
import "react-bootstrap-submenu/dist/index.css";
import AppRoutes from "./AppRoutes";
import "../assets/styles/table.css";

function App() {
  return (
    <>
    
        <HeaderNavbar />
      
      <div className="body flex-grow-1 px-3 mt-4">

        <AppRoutes />
      </div>
    </>

  );
}

export default App;
