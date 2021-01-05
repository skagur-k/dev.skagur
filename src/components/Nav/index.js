import React from "react"
import { NavWrapper, NavList, NavItem } from "./styled"
import { Link } from "gatsby"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Navbar = () => {
  const { menuLinks } = useSiteMetadata()
  console.log(menuLinks)
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

// const Navbar = () => {
//   const { menuLinks } = useSiteMetadata()
//   return (
//     <NavWrapper>
//       <NavList>
//         <NavItem>
//           <Link to="/">Home</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/blog">Blog</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/about">About</Link>
//         </NavItem>
//       </NavList>
//     </NavWrapper>
//   )
// }

export default Navbar
