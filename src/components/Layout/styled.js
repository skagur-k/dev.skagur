import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: ${({ theme }) => theme.media.large};
  margin: 0 auto;
  padding: 0rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const LayoutContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 0 2rem 0;
  margin: 0 auto;

  flex-grow: 1;
`
