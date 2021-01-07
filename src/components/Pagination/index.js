import React from "react"
import * as Styled from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <Styled.PaginationWrapper>
    <Styled.PaginationLink to={prevPage}> Previous Page </Styled.PaginationLink>
    <p>
      {currentPage} of {numPages}
    </p>
    <Styled.PaginationLink to={nextPage}> Next Page </Styled.PaginationLink>
  </Styled.PaginationWrapper>
)

export default Pagination
