import { useEffect, useState } from "react";
import { IndexProductCard } from "../Cards/CardItem/cardIndexItem";
import { Header } from "../Header/header";
import style from "../Cards/CardItem/cardItem.module.scss";
import { Footer } from "../Footer/footer";
import { BasketProvider } from "../Context/basketContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/loader";
import { ProductData } from "../../types/Product/productTypes";

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
