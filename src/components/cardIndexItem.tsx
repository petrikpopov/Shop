import { useState } from 'react';
import style from './cardItem.module.scss'

interface ICard {
    id:number
    image:string;
    title:string;
    category:string;
    description:string;
    price:number;
}

const CardItem = ({image,title, category, description, price}:ICard) => {

    const [isExpander, setIsExpander] = useState(false);

    const showTogleDescription = () => {
        setIsExpander(!isExpander);
    }

    return (<>
        <div className={style.cardItem}>
            <img className={style.cardItem__image} src={image} alt={title} />
            <span className={style.cardItem__title}>{title}</span>
            <span className={style.cardItem__category}>Category: {category}</span>
            <span className={style.cardItem__description}>
                {
                    isExpander ? description : description.length > 120 ? `${description.slice(0, 120)}...` : description
                }
                {
                    description.length > 120 && (
                        <>
                            <button className={style.cardItem__togleDescription} onClick={showTogleDescription}>
                                {
                                    isExpander ? 'Скрыть' : 'Показать'
                                }
                            </button>
                        </>
                    )
                }
            </span>
            <div className={style.cardItem__wrapperPriceBy}>
                <span className={style.cardItem__price}>Price: {price}$</span>
            </div>
        </div>
    </>)
}

export default CardItem;