import React from "react"
import { NavWrapper, NavList, NavItem } from "./styled"
import { Link } from "gatsby"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Navbar = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <NavWrapper>
      <NavList>
        {menuLinks.map(link => (
          <NavItem key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  )
}

export default Navbar
