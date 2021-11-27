import React, { useState, useEffect } from "react";
import { ComicsGrid, SearchWrapper, SearchField } from "./styles";
import api from "../../services/api";
import md5 from "md5";
import Comic from "../../components/Comic";
import { useNavigate } from "react-router-dom";

interface Comics {
  id: number;
  title: string;
  images: [
    {
      path: string;
      extension: string;
    }
  ];
  prices: [{ price: string }];
  thumbnail: { path: string; extension: string };
}

const Home: React.FC = () => {
  const { REACT_APP_PUBLIC_KEY, REACT_APP_PRIVATE_KEY } = process.env;
  const navigate = useNavigate();
  const [comics, setComics] = useState<Comics[]>([]);
  const [rares, setRares] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const clearSearch = () => {
    setSearchQuery("");
    searchComics();
  };
  const searchComics = async () => {
    const ts = new Date().getTime();
    const hash = REACT_APP_PUBLIC_KEY
      ? md5(ts + REACT_APP_PUBLIC_KEY + REACT_APP_PRIVATE_KEY)
      : "";

    let url =
      searchQuery === ""
        ? `comics?ts=${ts}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${hash}&limit=30&format=comic&formatType=comic`
        : `comics?ts=${ts}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${hash}&limit=30&format=comic&formatType=comic&titleStartsWith=${searchQuery}`;
    api
      .get(url)
      .then((response) => {
        if (response.data.status === 200) {
          if (response.data.data.results.length > 0) {
            localStorage.setItem("rare", "");
            let rare = (response.data.data.results.length * 10) / 100;
            setRares(rare);
            setComics(response.data.data.results);
          } else {
            setComics([]);
          }
        }
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSearchQuery(formData.get("sq") as string);
    searchComics();
  };
  const viewProduct = (id: number, rare: boolean) => {
    if (rare) localStorage.setItem("rare", id.toString());
    navigate(`/product/${id}`);
    //`/produto/${comic.id}`
  };
  useEffect(() => {
    searchComics();
  }, [comics]);
  return (
    <>
      <SearchWrapper>
        <h3>Encontre sua HQ</h3>
        <SearchField>
          <form onSubmit={handleFormSubmit}>
            <input
              type="search"
              placeholder="Buscar pelo título"
              name="sq"
              defaultValue={searchQuery}
            />
            <button className="btn btn-primary">Buscar</button>
            <button onClick={(e) => clearSearch()} className="btn btn-dark">
              Limpar
            </button>
          </form>
        </SearchField>
      </SearchWrapper>
      <ComicsGrid>
        {comics?.map((comic, index) => (
          <div
            key={comic.id}
            onClick={(e) => viewProduct(comic.id, index < rares)}
          >
            <Comic
              rare={index < rares}
              title={comic.title}
              img={
                comic.thumbnail.path
                  ? comic.thumbnail.path + "." + comic.thumbnail.extension
                  : ""
              }
              price={comic.prices[0].price}
            />
          </div>
        ))}
      </ComicsGrid>
    </>
  );
};

export default Home;
