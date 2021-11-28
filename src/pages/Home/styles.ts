import styled from "styled-components";

export const ComicsGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  div {
    flex: 0 1 calc(20% - 8px);
    @media only screen and (max-width: 768px) {
      flex: 0 1 calc(50% - 8px);
    }
  }
`;
export const SearchWrapper = styled.div`
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
  h3 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;
export const SearchField = styled.div`
  form {
    display: grid;
    gap: 5px;
    grid-template-columns: 70% 30%;
    div {
      display: grid;
      gap: 5px;
    }
    .inputs {
      grid-template-columns: 70% 30%;
      padding: 0 5px 0 0;
    }
    .buttons {
      grid-template-columns: 50% 50%;
    }
    @media only screen and (max-width: 768px) {
      display: block;
      .inputs {
        margin: 0 0 10px 0;
      }
    }
  }
`;
