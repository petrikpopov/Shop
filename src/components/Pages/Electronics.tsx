import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import style from "../Cards/CardItem/CardItem.module.scss";
import { Footer } from "../Footer/Footer";
import { BasketProvider } from "../Context/BasketContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { ElectronicsProductCard } from "../Cards/CardItem/CardElectronicsItem";
import { ProductData } from "../../types/Product/ProductTypes";

export const ElectronicsPage = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<ProductData[]>("https://fakestoreapi.com/products")
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

  const filterDataElectronik = data.filter(
    (elements) => elements.category === "jewelery",
  );

  return (
    <BasketProvider>
      <Header />
      <main>
        <div className={style.cardItemWrapper}>
          {filterDataElectronik.map((el) => (
            <Link key={el.id} to={`/card/${el.title}`}>
              <ElectronicsProductCard
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
