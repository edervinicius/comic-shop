import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartWrapper, EmptyCart, FinishBtns } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Price from "../../components/Price";

interface ICart {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  rare: boolean;
}

const Cart: React.FC = () => {
  const CartContent = () => {
    if (cartProd.length === 0) {
      return (
        <EmptyCart>
          Seu carrinho está vazio, <Link to="/">voltar para loja</Link>
        </EmptyCart>
      );
    } else {
      return (
        <>
          <CartWrapper>
            <tbody>
              {cartProd.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="thumbnail">
                      <img src={item.image} alt="" />
                    </div>
                  </td>
                  <td>
                    <h3>
                      {item.title}
                      {item.rare}
                    </h3>
                  </td>
                  <td>
                    <Price price={item.price} />
                  </td>
                  <td className="quantity">
                    <input
                      type="number"
                      min="1"
                      defaultValue={item.quantity}
                      onChange={(e) =>
                        updateProdQty(index, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <Price price={item.price * item.quantity} />
                  </td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={(e) => removeProd(index)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                      <span> Remover</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </CartWrapper>
          <FinishBtns>
            <Link to="/">Continuar comprando</Link>
            <Link to="/checkout" className="btn btn-success btn-lg">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> Finalizar</span>
            </Link>
          </FinishBtns>
        </>
      );
    }
  };

  const [cartProd, setCart] = useState<ICart[]>(() => {
    return localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];
  });
  const updateProdQty = (index: number, qty: number) => {
    const newCart = [...cartProd];
    newCart[index].quantity = qty;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const removeProd = (index: number) => {
    const newCart = [...cartProd];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <>
      <h1 className="page-title">Carrinho</h1>
      <CartContent />
    </>
  );
};

export default Cart;
