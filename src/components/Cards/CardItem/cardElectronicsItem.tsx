import { ToggleDescription } from "./toggleDescriptionBlock";
import style from "./cardItem.module.scss";
import { AddToBasketButton } from "../../AddToBasketButton/AddToBasketButton";

type ElectronicsProductCardProps = {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
};

export const ElectronicsProductCard = ({
  id,
  image,
  title,
  category,
  description,
  price,
}: ElectronicsProductCardProps) => {
  return (
    <div className={style.cardItem}>
      <img className={style.image} src={image} alt={title} />
      <p className={style.title}>{title}</p>
      <span className={style.description}>
        <ToggleDescription description={description} />
      </span>
      <div className={style.wrapperPriceBy}>
        <span className={style.price}>Price: {price}$</span>
        <AddToBasketButton
          id={id}
          image={image}
          title={title}
          category={category}
          description={description}
          price={price}
        />
      </div>
    </div>
  );
};
