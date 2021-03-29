import styled from "styled-components";

export const ContainerDefault = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 768px) {
    & {
      display: grid;
      grid-template-columns: minmax(200px, 0.7fr) 1fr minmax(100px, 0.5fr);
      grid-template-rows: auto 1fr auto;
    }
  }

  header {
    grid-column: span 3;
    padding: 30px;
    text-align: center;
    font-size: 1.4em;
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
    padding: 20px;
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
