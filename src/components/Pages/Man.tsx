import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { BasketProvider } from "../Context/BasketContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../Loader/Loader";
import { Link } from "react-router-dom";
import { MenProductCard } from "../Cards/CardItem/CardManItem";
import style from "../Cards/CardItem/CardItem.module.scss";
import { ProductData } from "../../types/Product/ProductTypes";

export const ManPage = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get<ProductData[]>(
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
