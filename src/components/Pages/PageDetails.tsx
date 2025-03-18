import { useLocation } from "react-router-dom";
import { BasketProvider } from "../Context/BasketContext";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { GoToBackButton } from "../GoToBackButton";
import { AddToBasketButton } from "../AddToBasketButton/AddToBasketButton";
import style from "../Cards/CardItem/CardsDetails.module.scss";
import { LocationState } from "../../types/Product/ProductTypes";

export const CardsDetails = () => {
  const location = useLocation();
  const { el }:LocationState = location.state;
 
  return (
    <BasketProvider>
      <Header />
      <div>
        <GoToBackButton />
        <div className={style.wrapperDetails}>
          <div className={style.image}>
            <img src={el.image} alt={el.title} />
          </div>
          <div className={style.content}>
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <p>{el.category}</p>
            <span>Price: ${el.price}</span>
            <span>
              Rating: {el.rating.rate || ""} ({el.rating.count || ""} reviews)
            </span>
            <AddToBasketButton
              id={el.id}
              image={el.image}
              title={el.title}
              category={el.category}
              description={el.description}
              price={el.price}
            />
          </div>
        </div>
      </div>
      <Footer />
    </BasketProvider>
  );
};
