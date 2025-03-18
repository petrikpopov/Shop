import { Link } from "react-router-dom";
import style from "../dropDownMenuStyle/dropDownMenu.module.scss";

type ChildrenMenuCategoryRout = {
  id: number;
  name: string;
  route: string;
};

type ChildrenMenuCategories = {
  categories: ChildrenMenuCategoryRout[];
};

const data: ChildrenMenuCategories = {
  categories: [
    { id: 1, name: "Игрушки", route: "children/toys" },
    { id: 2, name: "Школьная форма", route: "children/school-uniform" },
    { id: 3, name: "Спортивная одежда", route: "children/sportswear" },
    { id: 4, name: "Обувь", route: "children/shoes" },
    { id: 5, name: "Шапки и перчатки", route: "children/hats-gloves" },
    { id: 6, name: "Куртки", route: "children/jackets" },
    { id: 7, name: "Книги", route: "children/books" },
    { id: 8, name: "Рюкзаки", route: "children/backpacks" },
    { id: 9, name: "Пижамы", route: "children/pajamas" },
  ],
};

export const ChildrenMenu = () => {
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
