import React from 'react'
import ReactPaginate from "react-paginate";
import "../assets/styles/paginate.css";

function BasicPaginate({totalPages, handlePageClick}) {
  return (
    <ReactPaginate
                    previousLabel={"Anterior"}
                    nextLabel={"Siguiente"}
                    breakLabel={"..."}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
  )
}

export default BasicPaginate