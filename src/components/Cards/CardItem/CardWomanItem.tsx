import style from "./CardItem.module.scss";
import { ToggleDescription } from "./ToggleDescriptionBlock";

type WomanProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
};

export const WomanProductCard = ({
  image,
  title,
  description,
  price,
}: WomanProductCardProps) => {
  return (
    <div className={style.cardItem}>
      <img className={style.image} src={image} alt={title} />
      <p className={style.title}>{title}</p>
      <span className={style.description}>
        <ToggleDescription description={description} />
      </span>
      <div className={style.wrapperPrice}>
        <span className={style.price}>Price: {price}$</span>
      </div>
    </div>
  );
};
