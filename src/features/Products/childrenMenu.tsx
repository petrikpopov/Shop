import { Link } from "react-router-dom";
import style from "../dropDownMenuStyle/dropDownMenu.module.scss";

type ChildrenMenuCategories = {
  categories: string[];
};

const data: ChildrenMenuCategories = {
  categories: [
    "Игрушки",
    "Школьная форма",
    "Спортивная одежда",
    "Куртки",
    "Шапки и перчатки",
    "Обувь",
    "Книги",
    "Рюкзаки",
    "Пижамы",
    "Комбинезоны",
  ],
};

export const ChildrenMenu = () => {
  return (
    <div className={style.wrappperDdropDownBlock}>
      {data.categories.map((el, key) => (
        <Link className={style.item} to={el}>
          <span key={key}>{el}</span>
        </Link>
      ))}
    </div>
  );
};
