import { Link } from 'react-router-dom'
import style from './Categories.module.scss'

interface IManCategories {
    categories: string[]
}

const ManMenu = () => {
    const data:IManCategories = {
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

export default ManMenu;