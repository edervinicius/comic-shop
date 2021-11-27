import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #333;
  padding: 10px 40px;
  color: #fff;
  display: flex;
  align-items: center;
  h1 {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 28px;
    a {
      display: flex;
      justify-content: left;
      align-items: center;
      img {
        width: 120px;
        margin-right: 10px;
      }
    }
  }
  .cart-header {
    margin-left: auto;
  }
`;
