import React from "react"
import * as Styled from "./styled"
import useSiteMetadata from "../../hooks/useSiteMetadata"
// import * as Go from "react-icons/go"

const Terminal = () => {
  const { menuLinks } = useSiteMetadata()

  return (
    <Styled.TerminalWrapper>
      <Styled.TerminalMenu>
        <Styled.Menulist>
          <Styled.MenuClose />
          <Styled.MenuMin />
          <Styled.MenuMax />
        </Styled.Menulist>
        <Styled.MenuTitle>skagur@dev-log</Styled.MenuTitle>
      </Styled.TerminalMenu>
      <Styled.TabsList>
        {menuLinks.map(link => (
          <Styled.Tab to={link.link} key={link.name} activeClassName="active">
            ~/{link.name}
          </Styled.Tab>
        ))}
      </Styled.TabsList>
      <Styled.Console></Styled.Console>
    </Styled.TerminalWrapper>
  )
}

export default Terminal
