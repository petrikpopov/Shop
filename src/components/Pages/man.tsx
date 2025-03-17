import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { BasketProvider } from "../Context/basketContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../Loader/loader";
import { Link } from "react-router-dom";
import { MenProductCard } from "../Cards/CardItem/cardManItem";
import style from "../Cards/CardItem/cardItem.module.scss";

type RatingProduct = {
  rate: number;
  count: number;
};

type ManProductsData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingProduct;
};

export const ManPage = () => {
  const [data, setData] = useState<ManProductsData[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get<ManProductsData[]>(
        "https://fakestoreapi.com/products/category/men's%20clothing",
      )
      .then((response) => {
        setData(response.data);
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
              <MenProductCard
                image={el.image}
                title={el.title}
                description={el.description}
                price={el.price}
              />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </BasketProvider>
  );
};
