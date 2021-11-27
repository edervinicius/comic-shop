import React from "react";
import { ComicContainer } from "./styles";

interface Props {
  img: string;
  title: string;
  price: string;
  rare: boolean;
}

const Comic: React.FC<Props> = ({ img, title, price, rare }) => {
  return (
    <ComicContainer>
      <div className={rare ? "raro" : ""}>
        <div className="cover">
          <img src={img} alt="" />
        </div>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <p className="price">${price}</p>
      </div>
    </ComicContainer>
  );
};
export default Comic;
