import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { BasketProvider } from "../Context/BasketContext";
import { useEffect, useState } from "react";
import { WomanProductCard } from "../Cards/CardItem/cardWomanItem";
import style from "../Cards/CardItem/cardItem.module.scss";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { Loader } from "../Loader/loader";

type RatingProduct = {
  rate: number;
  count: number;
};

type WomanProductsData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingProduct;
};

export const WomanPage = () => {
  const [data, setWomanClothes] = useState<WomanProductsData[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<WomanProductsData[]>(
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
    return <Loader />;
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
