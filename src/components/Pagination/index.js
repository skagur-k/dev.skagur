import React from "react"
import * as Styled from "./styled"

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <Styled.PaginationWrapper isOnePage={numPages === 1}>
    {!isFirst && (
      <Styled.PaginationLink to={prevPage} className="previous">
        Previous Page
      </Styled.PaginationLink>
    )}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast && (
      <Styled.PaginationLink to={nextPage} className="next">
        Next Page
      </Styled.PaginationLink>
    )}
  </Styled.PaginationWrapper>
)

export default Pagination
