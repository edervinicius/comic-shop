import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #333;
  padding: 10px;
  color: #fff;
  h1 {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 18px;
    img {
      width: 150px;
      margin-right: 10px;
    }
  }
`;
export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 20px;
`;
export const ProductImage = styled.div`
  background: #ddd;
  img {
    max-width: 100%;
  }
`;
export const ProductInfo = styled.div`
  background: #fff;
  padding: 30px;
  h1 {
    font-size: 24px;
    margin: 0 0 20px 0;
  }
  .rare::before {
    content: "Item Raro";
    border-radius: 5px;
    color: #fff;
    padding: 5px;
    width: 40px;
    height: 40px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: radial-gradient(
        ellipse farthest-corner at right bottom,
        #fedb37 0%,
        #fdb931 8%,
        #9f7928 30%,
        #8a6e2f 40%,
        transparent 80%
      ),
      radial-gradient(
        ellipse farthest-corner at left top,
        #ffffff 0%,
        #ffffac 8%,
        #d1b464 25%,
        #5d4a1f 62.5%,
        #5d4a1f 100%
      );
  }
  .description {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 1px;
    padding: 0 0 20px;
  }
  .price {
    font-size: 24px;
    font-weight: bold;
    padding: 0 0 20px;
  }
`;
export const BreadCrumbs = styled.div`
  padding: 10px 0;
  .bcInner {
    padding: 10px 10px;
    display: inline-block;
    background: #fff;
    font-size: 12px;
    border-radius: 5px;
    a {
      text-decoration: underline;
    }
  }
`;
