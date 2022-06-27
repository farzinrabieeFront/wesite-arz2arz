// import { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
// import Styles from "./Pagination.module.scss";
// import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
//
// const Pagination = ({
//   totalRecords = 0,
//   pageLimit = 5,
//   pageNeighbours = 1,
//   handleChangePage,
//   marginPagesDisplayed = 1,
// }) => {
//   const [totalPages, setTotalPages] = useState(0);
//   const [currentPages, setCurrentPages] = useState(1);
//   useEffect(() => {
//     setTotalPages(Math.ceil(totalRecords / pageLimit));
//   }, [totalRecords, pageLimit]);
//   useEffect(() => {
//     handleChangePage(currentPages)
//   }, [currentPages])
//   return (
//     <div
//       className={`${Styles.pagination} justify-content-center align-items-center d-flex `}
//     >
//       <ReactPaginate
//         previousLabel={<VscChevronRight className="yekan-Bold" size={25} />}
//         nextLabel={<VscChevronLeft className="yekan-Bold" size={25} />}
//         breakLabel={"..."}
//         pageClassName={"mx-1 text-center"}
//         breakClassName={"break-me mx-3"}
//         pageCount={totalPages}
//         marginPagesDisplayed={marginPagesDisplayed}
//         pageRangeDisplayed={pageNeighbours}
//         onPageChange={(data) =>setCurrentPages(data.selected + 1)}
//         // onPageChange={(data)=>handleChangePage(data.selected*pageLimit)}
//         containerClassName={`pagination px-3 m-0`}
//         subContainerClassName={"pages pagination "}
//         activeClassName={`${Styles.active} text-link yekan-ExtraBold size-4`}
//       />
//     </div>
//   );
// };
// export default Pagination;

import { useEffect, useState } from "react";
// import Styles from "./Pagination.module.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

const PaginationElement = ({
  totalRecords,
  pageLimit = 15,
  pageNeighbours = 2,
  onChangePage,
  marginPagesDisplayed = 1,
  pageNumber,
}) => {
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalRecords / pageLimit)
  );

  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit));
  }, [totalRecords, pageLimit]);

  return (
    <ReactPaginate
      previousLabel={
        <div className="center-content h-100">
          <MdChevronRight size={18} />
        </div>
      }
      nextLabel={
        <div className="center-content h-100">
          <MdChevronLeft size={18} />
        </div>
      }
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={totalPages}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageNeighbours}
      onPageChange={(data) => onChangePage(data.selected + 1)}
      containerClassName={"pagination center-content mt-5"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
      initialPage={pageNumber - 1}
    />
  );
};
PaginationElement.propTypes = {
  totalRecords: PropTypes.number,
  pageLimit: PropTypes.number,
  onChangePage: PropTypes.func,
  pageNeighbours: PropTypes.number,
};
export default PaginationElement;
