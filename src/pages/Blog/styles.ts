import styled from "styled-components";

export const ContainerDefault = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 768px) {
    & {
      display: grid;
      grid-template-columns: 1fr 3fr 2fr;
      grid-template-rows: auto 1fr auto;
    }
  }

  header {
    grid-column: span 3;
    padding-bottom: 0px;
    text-align: center;
    font-size: 1.4em;
    background-color: #fff;
    color: white;
  }

  main {
    flex: 1;
    padding: 20px;
  }

  nav {
    padding: 20px;
  }

  aside {
    margin-right: 40px;
  }

  footer {
    grid-column: span 3;
    padding: 30px;
    text-align: center;
    font-size: 1.4em;
    color: white;
  }

  h1 {
    margin-bottom: 1em;
    font-size: 1.3em;
    font-weight: bold;
  }
`;
