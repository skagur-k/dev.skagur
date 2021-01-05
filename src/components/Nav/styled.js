import styled from "@emotion/styled"

export const NavWrapper = styled.nav``

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

export const NavItem = styled.li`
  font-size: 0.9rem;
  margin-right: 1.3rem;
  margin-left: 0rem;

  & > a {
    color: #999999;
    text-decoration: none;

    &.active {
      color: cadetblue;
      text-decoration: underline;
    }

    &:hover {
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
