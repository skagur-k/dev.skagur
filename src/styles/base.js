import styled from "styled-components"
import mediaQuery from "../styles/mediaQuery"

export const BaseContent = styled.section`
  max-width: 99.2rem;
  padding: 0 1.6rem;
  margin: 0 auto;

  h1 {
    ${props => props.theme.H1_Headline}
    margin-bottom: 1.6rem;

    /* ${mediaQuery.lessThan("header")`
      font-size: 4rem;
    `} */
  }

  h2 {
    ${props => props.theme.H2_Headline}
    margin-top: 4rem;
    margin-bottom: 2.4rem;
  }

  h3 {
    ${props => props.theme.H3_Headline}
    margin-top: 3.2rem;
    margin-bottom: 2.4rem;
  }

  p {
    ${props => props.theme.General_Body1}
    margin-bottom: 2.4rem;
  }

  em {
    font-style: italic;
    font-size: 2rem;
  }

  ul,
  ol {
    ${props => props.theme.General_Body1}
    padding-left: 2.4rem;
    margin-bottom: 2.4rem;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto 2.4rem auto;
  }

  hr {
    border: 1px solid var(--primary_light);
    margin-top: 6.8rem;
    margin-bottom: 1.6rem;
  }

  strong {
    font-weight: semibold;
  }
`
