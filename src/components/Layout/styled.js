import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: ${({ theme }) => theme.media.large};
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const LayoutContentWrapper = styled.div`
  padding: 1rem 0rem 0rem;
  margin: 0rem 0rem 0rem;
  flex-grow: 1;
`
