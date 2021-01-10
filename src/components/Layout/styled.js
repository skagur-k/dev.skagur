import styled from "styled-components"
import theme from "../../styles/theme"

export const LayoutWrapper = styled.div``

export const LayoutContainer = styled.div`
  background: var(--body);
  transition: background 0.1s linear;
  margin: 0 auto;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const LayoutContentWrapper = styled.div`
  max-width: ${theme.media.large};
  width: 100%;
  padding: 0 2rem 0;
  margin: 0 auto;

  flex-grow: 1;
`
