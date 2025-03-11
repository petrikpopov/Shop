import { Link } from "react-router-dom";
import style from "./categories.module.scss";

type WomanMenuCategoryRout = {
  name: string;
  route: string;
};

type WomanMenuCategories = {
  categories: WomanMenuCategoryRout[];
};

const data: WomanMenuCategories = {
  categories: [
    { name: "Платья", route: "/woman/dres" },
    { name: "Юбки", route: "/woman/skirts/" },
    { name: "Блузки и рубашки", route: "/woman/blouses-shirts/" },
    { name: "Джинсы и брюки", route: "/woman/jeans-pants/" },
    { name: "Футболки и топы", route: "/woman/t-shirts-tops/" },
    { name: "Куртки и пальто", route: "/woman/jackets-coats/" },
    { name: "Обувь", route: "/woman/shoes/" },
    { name: "Сумки и клатчи", route: "/woman/bags-clutches/" },
    { name: "Аксессуары", route: "/woman/accessories/" },
    { name: "Украшения", route: "/woman/jewelry/" },
    { name: "Спортивная одежда", route: "/woman/sportswear/" },
    { name: "Домашняя одежда", route: "/woman/homewear/" },
    { name: "Купальники", route: "/woman/swimwear/" },
    { name: "Косметика и парфюмерия", route: "/woman/cosmetics-perfumes/" },
  ],
};

export const WomanMenu = () => {
  return (
    <div className={style.wrappperDdropDownBlock}>
      {data.categories.map((el, index) => (
        <Link key={index} className={style.item} to={el.route}>
          {el.name}
        </Link>
      ))}
    </div>
  );
};
