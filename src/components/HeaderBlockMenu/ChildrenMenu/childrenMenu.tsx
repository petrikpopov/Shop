import { Link } from 'react-router-dom'
import style from '../dropDownMenuStyle/dropDownMenu.module.scss'

interface IChildrenCategories {
    categories:string[]
}
const ChildrenMenu = () => {
    const data:IChildrenCategories = {
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
    return (<>
        <div className={style.wrappperDdropDownBlock}>
            {
               data.categories.map((el, key) => (
                <Link className={style.wrappperDdropDownBlock__item} to={el}><span key={key}>{el}</span></Link>
               ))
            }
        </div>
    </>)
}

export default ChildrenMenu;