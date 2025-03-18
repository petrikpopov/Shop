import { useLocation } from "react-router-dom";
import { BasketProvider } from "../Context/basketContext";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { GoToBackButton } from "../goToBackButton";
import { AddToBasketButton } from "../AddToBasketButton/AddToBasketButton";
import style from "../Cards/CardItem/cardsDetails.module.scss";
import { LocationState } from "../../types/Product/productTypes";

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
