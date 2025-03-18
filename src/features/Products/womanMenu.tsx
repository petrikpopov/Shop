import { Link } from "react-router-dom";
import style from "./categories.module.scss";

type WomanMenuCategoryRout = {
  id:number;
  name: string;
  route: string;
};

type WomanMenuCategories = {
  categories: WomanMenuCategoryRout[];
};

const data: WomanMenuCategories = {
  categories: [
    {id: 1, name: "Платья", route: "/woman/dres" },
    {id: 2, name: "Юбки", route: "/woman/skirts/" },
    {id: 3, name: "Блузки и рубашки", route: "/woman/blouses-shirts/" },
    {id: 4, name: "Джинсы и брюки", route: "/woman/jeans-pants/" },
    {id: 5, name: "Футболки и топы", route: "/woman/t-shirts-tops/" },
    {id: 6, name: "Куртки и пальто", route: "/woman/jackets-coats/" },
    {id: 7, name: "Обувь", route: "/woman/shoes/" },
    {id: 8, name: "Сумки и клатчи", route: "/woman/bags-clutches/" },
    {id: 9, name: "Аксессуары", route: "/woman/accessories/" },
    {id: 10, name: "Украшения", route: "/woman/jewelry/" },
    {id: 11, name: "Спортивная одежда", route: "/woman/sportswear/" },
    {id: 12, name: "Домашняя одежда", route: "/woman/homewear/" },
    {id: 13, name: "Купальники", route: "/woman/swimwear/" },
    {id: 14, name: "Косметика и парфюмерия", route: "/woman/cosmetics-perfumes/" },
  ],
};

export const WomanMenu = () => {
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
