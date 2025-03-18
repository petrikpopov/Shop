import { Link } from "react-router-dom";
import style from "./Categories.module.scss";

type ManMenuCategoryRout = {
  id: number;
  name: string;
  route: string;
};

type ManMenuCategories = {
  categories: ManMenuCategoryRout[];
};

const data: ManMenuCategories = {
  categories: [
    { id: 1, name: "Костюмы", route: "man/suits" },
    { id: 2, name: "Рубашки", route: "man/shirts" },
    { id: 3, name: "Джинсы", route: "man/jeans" },
    { id: 4, name: "Куртки", route: "man/jackets" },
    { id: 5, name: "Футболки", route: "man/t-shirts" },
    { id: 6, name: "Обувь", route: "man/shoes" },
    { id: 7, name: "Спортивная одежда", route: "man/sportswear" },
    { id: 8, name: "Часы и аксессуары", route: "man/watches-accessories" },
    { id: 9, name: "Рюкзаки", route: "man/backpacks" },
  ],
};


export const ManMenu = () => {
  return (
    <div className={style.wrappperDdropDownBlock}>
      {data.categories.map((el) => (
        <Link key={el.id} className={style.item} to={el.route}>
          <span>{el.name}</span>
        </Link>
      ))}
    </div>
  );
};
