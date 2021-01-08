import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.nav`
  display: grid;
  grid-gap: 1.6rem;
  grid-auto-flow: column;
  justify-content: space-between;
  border-top: 2px solid var(--accent);
  padding-top: 0.8rem;
  color: var(--text);

  ${props => props.isOnePage && `justify-content: center;`}
`

export const PaginationLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s;

  &.previous:before {
    content: "\\003C";
    margin-right: 0.8rem;
  }

  &.next:after {
    content: "\\003E";
    margin-left: 0.8rem;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--accent);
    }
  }
`
