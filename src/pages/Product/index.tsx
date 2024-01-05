import React, { useState, useEffect } from "react";
import {
  ProductWrapper,
  ProductImage,
  ProductInfo,
  BreadCrumbs,
} from "./styles";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import md5 from "md5";
import { Link, useNavigate } from "react-router-dom";
import Price from "../../components/Price";

const Product: React.FC = () => {
  const { REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY } = process.env;
  const navigate = useNavigate();
  const { id } = useParams();
  const [rare, setRare] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const searchComic = async () => {
    console.log("searchComic");
    const ts = new Date().getTime();
    const hash = REACT_APP_PRIVATE_KEY
      ? md5(ts + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY)
      : "";
    let url = `/comics/${id}?ts=${ts}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${hash}`;
    api
      .get(url)
      .then((response) => {
        if (response.data.data.results.length > 0) {
          const res = response.data.data.results[0];
          setTitle(res.title);
          setTitle(res.title);
          setPrice(res.prices[0].price);
          setImage(res.thumbnail.path + "." + res.thumbnail.extension);
          setDescription(res.description);
        }
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };
  const buyProduct = () => {
    let cart =
      localStorage.getItem("cart") !== undefined &&
      localStorage.getItem("cart") !== null
        ? JSON.parse(localStorage.getItem("cart")!)
        : [];
    let addProduct = true;

    cart?.map((item: { id: string; quantity: number }) => {
      if (item.id === id) {
        item.quantity += 1;
        addProduct = false;
      }
    });
    if (addProduct) {
      cart.push({
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: 1,
        rare: rare,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart", { replace: true });
  };
  useEffect(() => {
    setRare(localStorage.getItem("rare") === id);
    searchComic();
  }, [rare, id]);
  return (
    <>
      <BreadCrumbs>
        <div className="bcInner">
          <Link to="/">Home</Link>
        </div>
      </BreadCrumbs>
      <ProductWrapper>
        <ProductImage>
          <img src={image} alt={title} />
        </ProductImage>
        <ProductInfo>
          <h1 className={rare ? "rare" : ""}>{title}</h1>
          <div className="description">
            <p>{description}</p>
          </div>
          {price && (
            <div className="price">
              <Price price={parseInt(price)} />
            </div>
          )}
          <button className="btn btn-success btn-lg" onClick={buyProduct}>
            Comprar
          </button>
        </ProductInfo>
      </ProductWrapper>
    </>
  );
};

export default Product;
