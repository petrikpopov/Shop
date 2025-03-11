import style from "./addToBasketButton.module.scss";
import { useBasketContext } from "../Context/BasketContext";

type СardProps = {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
};

export const AddToBasketButton = ({
  id,
  image,
  title,
  category,
  description,
  price,
}: СardProps) => {
  const { addToBasket } = useBasketContext();

  return (
    <button
      onClick={() =>
        addToBasket({ id, image, title, category, description, price })
      }
      className={style.buttonBY}
    >
      By
    </button>
  );
};
