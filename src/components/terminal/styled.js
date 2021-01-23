import styled from "styled-components"
import { Link } from "gatsby"

export const TerminalWrapper = styled.div`
  margin-top: 2rem;
  max-width: 900px;
  width: 900px;
  height: 300px;
  top: 210px;
  max-height: 300px;
  display: flex;
  background-color: var(--component);
  /* border: 0.1px solid #000; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px 5px 5px 5px;
`

export const TerminalMenu = styled.div`
  width: 100%;
  height: 25px;
  background-color: var(--menuBg);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px 5px 0px 0px;
`

export const TOCLink = styled(Link)``
