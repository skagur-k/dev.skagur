import styled from "styled-components"

export const NavWrapper = styled.nav`
  z-index: 1000;
  margin-left: auto;
  position: sticky;
`

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`

export const NavItem = styled.li`
  font-size: 0.9rem;
  margin-right: 1.3rem;
  margin-left: 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;

  a {
    color: #999999;
    text-decoration: none;

    .active {
      color: cadetblue;
      text-decoration: underline;
    }

    :hover {
      color: #666666;
    }
  }
`

// const baseLinkStyles = css`
//   color: blue;
//   text-decoration: none;

//   &.active {
//     color: cadetblue;
//     text-decoration: underline;
//   }
// `
