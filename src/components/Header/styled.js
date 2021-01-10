import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;

  padding: 1rem 1rem 1rem;
  height: 200px;
  top: 0;
`

export const HeaderTitle = styled.h1`
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  color: #111111;
  font-size: 1.5rem;
  margin: auto;
  & > a {
    color: #4a4a4a;
    text-decoration: none;
  }
`
