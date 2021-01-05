import React from "react"
import { NavWrapper, NavList, NavItem } from "./styled"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/blog">Blog</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
      </NavList>
    </NavWrapper>
  )
}

export default Navbar
