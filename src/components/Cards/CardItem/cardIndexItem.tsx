import { useState } from 'react';
import style from './cardItem.module.scss'

type IndexProductCardProps = {
    id:number
    image:string;
    title:string;
    category:string;
    description:string;
    price:number;
}

const IndexProductCard = ({image,title, category, description, price}:IndexProductCardProps) => {

    const [isExpander, setIsExpander] = useState(false);

    const showTogleDescription = (e:React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpander(prev => !prev);
    }

    return (
        <div className={style.cardItem}>
            <img className={style.image} src={image} alt={title} />
            <span className={style.title}>{title}</span>
            <span className={style.category}>Category: {category}</span>
            <span className={style.description}>
                {
                    isExpander ? description : description.length > 120 ? `${description.slice(0, 120)}...` : description
                }
                {
                    description.length > 120 && (
                        <>
                            <button className={style.togleDescription} onClick={showTogleDescription}>
                                {
                                    isExpander ? 'Скрыть' : 'Показать'
                                }
                            </button>
                        </>
                    )
                }
            </span>
            <div className={style.wrapperPrice}>
                <span className={style.price}>Price: {price}$</span>
            </div>
        </div>
    )
}

export default IndexProductCard;