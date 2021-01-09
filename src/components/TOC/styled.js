import styled from "styled-components"
import { Link } from "gatsby"

export const TOC = styled.ul`
  position: fixed;
  left: calc(50% + 500px);
  top: 210px;
  max-height: 70vh;
  width: 310px;
  display: flex;

  li {
    line-height: 1.25;
    margin-top: 0;
  }
`
export const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`

export const TOCLink = styled(Link)``
