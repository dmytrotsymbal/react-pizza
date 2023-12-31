import "../scss/components/__pagination.scss";
import ReactPaginate from "react-paginate";
const Pagination = ({ setPage }) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => {
        setPage(e.selected + 1);
      }}
      pageRangeDisplayed={8}
      pageCount={4} //mockapi can`t return the amount of pages
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
export default Pagination;
