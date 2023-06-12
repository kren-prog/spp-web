import HeaderNavbar from "../Components/headerNavbar";
import BasicTable from "../Components/basicTable";
import PlaintextExample from "../Components/tipos";
import BasicModal from "../Components/modal";
import "react-bootstrap-submenu/dist/index.css";

function App() {
  return (
    <>
      <HeaderNavbar />
      <div className="body flex-grow-1 px-3 mt-4">
        <PlaintextExample/>
        <BasicModal/>
        <BasicTable></BasicTable>
      </div>
    </>

  );
}

export default App;
