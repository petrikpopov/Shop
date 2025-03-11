// import { useState } from 'react';
import style from "./cardItem.module.scss";
import { ToggleDescription } from "./toggleDescriptionBlock";

type IndexProductCardProps = {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
};

export const IndexProductCard = ({
  image,
  title,
  category,
  description,
  price,
}: IndexProductCardProps) => {
  return (
    <div className={style.cardItem}>
      <img className={style.image} src={image} alt={title} />
      <span className={style.title}>{title}</span>
      <span className={style.category}>Category: {category}</span>
      <span className={style.description}>
        <ToggleDescription description={description} />
      </span>
      <div className={style.wrapperPrice}>
        <span className={style.price}>Price: {price}$</span>
      </div>
    </div>
  );
};
