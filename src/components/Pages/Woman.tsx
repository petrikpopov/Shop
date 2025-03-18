import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { BasketProvider } from "../Context/BasketContext";
import { useEffect, useState } from "react";
import { WomanProductCard } from "../Cards/CardItem/CardWomanItem";
import style from "../Cards/CardItem/CardItem.module.scss";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { Loader } from "../Loader/Loader";
import { ProductData } from "../../types/Product/ProductTypes";

export const WomanPage = () => {
  const [data, setWomanClothes] = useState<ProductData[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<ProductData[]>(
        "https://fakestoreapi.com/products/category/women's%20clothing",
      )
      .then((response) => {
        setWomanClothes(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <BasketProvider>
      <Header />
      <main>
        <div className={style.cardItemWrapper}>
          {data.map((el) => (
            <Link key={el.id} to={`/card/${el.title}`} state={{ el }}>
              <WomanProductCard
                image={el.image}
                title={el.title}
                description={el.description}
                price={el.price}
              />
            </Link>
          ))}
        </div>
        <Outlet />
      </main>
      <Footer />
    </BasketProvider>
  );
};
