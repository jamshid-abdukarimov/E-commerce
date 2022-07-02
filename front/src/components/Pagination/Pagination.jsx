import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAction } from "../../redux/reducers/productsReducer";

const Pagination = ({ pagesCount }) => {
  const { currentPage } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const pages = [];
  if (!pagesCount) {
    pages.push(1);
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
  return (
    <nav className="mb-4">
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={() => dispatch(setCurrentPageAction(currentPage - 1))}
            disabled={currentPage === 1}
            className="page-link"
          >
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li className="page-item" key={page}>
            <button
              onClick={() => dispatch(setCurrentPageAction(page))}
              className={`page-link ${page === currentPage ? "active" : ""}`}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={() => dispatch(setCurrentPageAction(currentPage + 1))}
            disabled={currentPage === pagesCount}
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
