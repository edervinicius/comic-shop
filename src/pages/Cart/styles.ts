import styled from "styled-components";

export const EmptyCart = styled.div`
  padding: 40px;
  border-radius: 5px;
  font-size: 16px;
  background: #fff;
  color: #555;
  font-weight: bold;
  a {
    text-decoration: underline;
  }
`;
export const FinishBtns = styled.div`
  padding: 20px 0px;
  text-align: right;
  * {
    margin-left: 10px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const CartWrapper = styled.table`
  background: #fff;
  width: 100%;
  border-top: #aaa solid 1px;
  border-right: #aaa solid 1px;
  padding: 0;
  @media only screen and (max-width: 768px) {
    td:first-child,
    td:nth-child(4),
    td:nth-child(6) {
      display: none;
    }
  }
  td {
    text-align: center;
    padding: 5px;
    border: #aaa solid 1px;
    border-top: none;
    border-right: none;
    margin: 0;
    h3 {
      font-size: 14px;
    }
    .thumbnail {
      background: #fff;
      img {
        width: 100px;
        height: auto;
      }
    }
    input {
      text-align: center;
      background: #ddd;
    }
  }
  .quantity {
    width: 80px;
  }
`;
