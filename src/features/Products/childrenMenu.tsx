import { Link } from 'react-router-dom'
import style from '../dropDownMenuStyle/dropDownMenu.module.scss'

type ChildrenMenuCategories = {
    categories:string[]
}

const ChildrenMenu = () => {
    const data:ChildrenMenuCategories = {
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
            "Комбинезоны"
        ]
    }    
    return (
        <div className={style.wrappperDdropDownBlock}>
            {
               data.categories.map((el, key) => (
                <Link className={style.item} to={el}><span key={key}>{el}</span></Link>
               ))
            }
        </div>
    )
}

export default ChildrenMenu;