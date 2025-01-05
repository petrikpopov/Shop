import { Link } from "react-router-dom";
import style from '../dropDownMenuStyle/dropDownMenu.module.scss';

interface IWomanCategories {
    categories: string[];
}

const WomanMenu = () => {
    const data: IWomanCategories = {
        categories: [
            "Платья",
            "Юбки",
            "Блузки и рубашки",
            "Джинсы и брюки",
            "Футболки и топы",
            "Куртки и пальто",
            "Обувь",
            "Сумки и клатчи",
            "Аксессуары",
            "Украшения",
            "Спортивная одежда",
            "Домашняя одежда",
            "Купальники",
            "Косметика и парфюмерия",
        ],
    };

    return (
        <div className={style.wrappperDdropDownBlock}>
            {data.categories.map((el, index) => {
                const path = `/woman/${encodeURIComponent(el.replace(/\s+/g, '-').toLowerCase())}`;
                console.log(path)
                return (
                    <Link key={index} className={style.wrappperDdropDownBlock__item} to={path}>
                        {el}
                    </Link>
                );
            })}
        </div>
    );
};

export default WomanMenu;
