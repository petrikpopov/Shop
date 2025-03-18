import style from "./basket.module.scss";
import { useBasketContext } from "../Context/basketContext";
import clsx from "clsx";

type BasketProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Basket = ({ isOpen, onClose }: BasketProps) => {
  const { basket, removeFromBasket } = useBasketContext();

  return (
    <div
      className={clsx(style.mainWrapper, { [style.active]: isOpen })}
      onClick={onClose}
    >
      <div
        className={style.wrappperBasket}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {basket.length === 0 ? (
          <p>Карзина сейчас пустая!</p>
        ) : (
          basket.map((el) => (
            <div key={el.id} className={style.wrapperItem}>
              <img className={style.image} src={el.image} alt={el.title} />
              <span className={style.title}>{el.title}</span>
              <span className={style.price}>Price: {el.price}$</span>
              <button
                className={style.removeButton}
                onClick={() => removeFromBasket(el.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
