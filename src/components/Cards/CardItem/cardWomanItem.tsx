import { useState } from 'react';
import style from './cardItem.module.scss';

type WomanProductCardProps = {
    image:string,
    title:string,
    description:string,
    price:number
}

const WomanProductCard = ({image, title, description, price}:WomanProductCardProps) => {
    const [isExpander, setIsExpander] = useState(false);

    const showTogleDescription = (e:React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpander(!isExpander);
    }

    return (
        <div className={style.cardItem}>
            <img className={style.image} src={image} alt={title} />
            <p className={style.title}>{title}</p>
            {
               isExpander ? description : description.length >= 120 ? `${description.slice(0, 120)}...` : description
            }
            {
                description.length >= 120 && (<>
                    <button className={style.togleDescription} onClick={showTogleDescription}>
                        {
                            isExpander ? 'Скрыть' : 'Показать'
                        }
                    </button>
                </>)
            }
            <div className={style.wrapperPrice}>
                <span className={style.price}>Price: {price}$</span>
            </div>
        </div>
    )
}

export default WomanProductCard;