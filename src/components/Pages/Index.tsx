import { useEffect, useState } from "react";
import { IndexProductCard } from "../Cards/CardItem/CardIndexItem";
import { Header } from "../Header/Header";
import style from "../Cards/CardItem/CardItem.module.scss";
import { Footer } from "../Footer/Footer";
import { BasketProvider } from "../Context/BasketContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { ProductData } from "../../types/Product/ProductTypes";

export const IndexPage = () => {
  const [data, setResult] = useState<ProductData[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<ProductData[]>("https://fakestoreapi.com/products")
      .then((response) => {
        setResult(response.data);
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
              <IndexProductCard
                id={el.id}
                image={el.image}
                title={el.title}
                category={el.category}
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
