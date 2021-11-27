import React from "react";
import { PriceContainer } from "./styles";
interface IProps {
  price: number;
}
const Price: React.FC<IProps> = (props) => {
  return (
    <PriceContainer>
      R${props.price.toFixed(2).replace(".", ",")}
    </PriceContainer>
  );
};

export default Price;
