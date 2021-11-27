import styled from "styled-components";

export const ComicContainer = styled.div`
  padding: 10px;
  display: inline-block;
  width: 200px;
  .raro::before {
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
    position: absolute;
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
  .cover {
    margin: 0 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 290px;
    overflow-y: hidden;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .title {
    h2 {
      font-weight: bold;
      font-size: 14px;
    }
  }
  .price {
    padding: 10px 0;
    font-weight: bold;
    font-size: 16px;
  }
`;
