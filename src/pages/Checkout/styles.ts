import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  form {
    padding: 20px;
    input {
      margin: 0 0 10px 0;
    }
  }
  .recipt {
    background: #fff;
    padding: 20px;
    table {
      width: 100%;
      td {
        padding: 5px;
      }
      margin: 0 0 10px 0;
    }
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 24px;
      margin: 20px 0;
    }
  }
`;
