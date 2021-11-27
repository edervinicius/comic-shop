import React, { useState, useEffect } from "react";
import { CheckoutWrapper } from "./styles";
import coupon from "../../services/coupon";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTags } from "@fortawesome/free-solid-svg-icons";
import Price from "../../components/Price";

interface ICart {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  rare: boolean;
}
const Checkout: React.FC = () => {
  const MySwal = withReactContent(Swal);

  const navigate = useNavigate();
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubTotal] = useState(0);
  const [cartProd, setCart] = useState<ICart[]>(() => {
    return localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];
  });
  const calcTotal = () => {
    let commonsum = 0;
    let raresum = 0;
    cartProd.forEach((item) => {
      console.log(item.rare);
      commonsum += !item.rare ? item.price * item.quantity : 0;
      raresum += item.rare ? item.price * item.quantity : 0;
    });
    const sumtotal = commonsum + raresum;
    console.log("discountType", discountType);
    if (discountType === "common") {
      const discValue = (commonsum * discountPercentage) / 100;
      setSubTotal(sumtotal);
      setDiscount(discValue);
      setTotal(sumtotal - discValue);
    } else {
      const discValue = (sumtotal * discountPercentage) / 100;
      setSubTotal(sumtotal);
      setDiscount(discValue);
      setTotal(sumtotal - discValue);
    }
  };
  const handleCoupon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const couponCode = formData.get("coupon");
    coupon
      .get(`/${couponCode}`)
      .then((response) => {
        if (response) {
          setDiscountPercentage(response.data.discount);
          setDiscountType(response.data.type);
          calcTotal();
          const israre = response.data.type === "rare" ? "Raro" : "Comum";

          MySwal.fire({
            icon: "success",
            title: "Cupom aplicado",
            text: "Você ativou um cumpo " + israre,
          }).then(() => {});
        }
      })
      .catch((err) => {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Esse código não existe!",
        }).then(() => {});
      });
  };
  const finish = () => {
    MySwal.fire({
      icon: "success",
      title: "Compra finalizada",
      text: "Parabens pela compra",
    }).then(() => {
      localStorage.removeItem("rare");
      localStorage.removeItem("cart");
      navigate("/");
    });
  };
  useEffect(() => {
    calcTotal();
  }, [discount, discountPercentage, discountType]);
  return (
    <>
      <h1 className="page-title">Finalizar Compra</h1>
      <CheckoutWrapper>
        <form onSubmit={handleCoupon}>
          <input type="text" name="coupon" placeholder="Cupom de desconto" />
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faTags} />
            <span> Usar cupom</span>
          </button>
        </form>
        <div className="recipt">
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Subtotal</b>
                </td>
                <td>
                  <Price price={subtotal} />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Desconto</b>
                </td>
                <td>
                  <Price price={discount} />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td>
                  <Price price={total} />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success" onClick={(e) => finish()}>
            <FontAwesomeIcon icon={faCreditCard} />
            <span> Pagamento</span>
          </button>
        </div>
      </CheckoutWrapper>
    </>
  );
};

export default Checkout;
