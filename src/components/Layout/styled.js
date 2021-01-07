import styled from "@emotion/styled"

export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1270px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const LayoutContentWrapper = styled.div`
  padding: 0rem 0rem 0rem 0rem;
  margin: 2rem 2rem 1rem;
  /* display: none; */

  flex-grow: 1;
  & > h1 {
    font-size: 1.5rem;
  }
  & > p {
    font-size: 0.9rem;
  }
`
