import { Link } from "react-router-dom";
import style from './Categories.module.scss';

interface ICategoryRout {
    name:string,
    route:string
}

interface IWomanCategories {
    categories: ICategoryRout[];
}

const WomanMenu = () => {
    const data: IWomanCategories = {
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

    return (
        <div className={style.wrappperDdropDownBlock}>
            {data.categories.map((el, index) => {
                return (
                    <Link key={index} className={style.wrappperDdropDownBlock__item} to={el.route}>
                        {el.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default WomanMenu;
