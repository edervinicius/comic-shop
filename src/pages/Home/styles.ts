import styled from "styled-components";

export const ComicsGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export const SearchWrapper = styled.div`
  padding: 20px;
  max-width: 600px;
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
    grid-template-columns: 50% 10% 20% 20%;
    gap: 5px;
  }
`;
