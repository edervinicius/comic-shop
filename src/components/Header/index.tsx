import React from "react";
import { HeaderContainer } from "./styles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>
        <Link to="/">
          <img src={logo} alt="Agenzia Comics" /> Comics
        </Link>
      </h1>
      <div className="cart-header">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span> Carrinho</span>
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
