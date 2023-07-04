import React from 'react';
// Boton que se encarga de abrir el modal
function useForm() {
   // Modal

   const [show, setShow] = React.useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   // SearchBar

   const [searchTerm, setSearchTerm] = React.useState('');
   const handleSearch = (e) => {
       setSearchTerm(e.target.value);
   };

   //ItemsPerPage

   const screenHeight = window.innerHeight;
   const numberOfRows = Math.floor(screenHeight / 50) - 5;
   const [itemsPerPage, setItemsPerPage] = React.useState(numberOfRows);
   const handleChangeItems = (e) => {
       setItemsPerPage(e.target.value);
   };

   // pagina

   // sweet alert
   const [alertResponse, setAlertResponse] = React.useState(null);

   const handleAlertResponse = (response) => {
       setAlertResponse(response);
   };
    return {
        show,
        handleClose,
        handleShow,
        searchTerm,
        handleSearch,
        screenHeight,
        numberOfRows,
        itemsPerPage,
        handleChangeItems,
        alertResponse,
        handleAlertResponse
    }
}

export { useForm };