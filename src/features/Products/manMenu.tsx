import { Link } from 'react-router-dom'
import style from './Categories.module.scss'

type ManMenuCategories = {
    categories: string[]
}

const data:ManMenuCategories = {
    categories: [
        "Костюмы",
        "Рубашки",
        "Джинсы",
        "Куртки",
        "Футболки",
        "Обувь",
        "Свитера",
        "Спортивная одежда",
        "Часы и аксессуары",
        "Рюкзаки"
    ]
}

const ManMenu = () => {
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

export default ManMenu;