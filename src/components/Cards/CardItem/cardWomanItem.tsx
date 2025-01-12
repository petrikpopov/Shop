import { useState } from 'react';
import style from './cardItem.module.scss';

interface IWomman {
    image:string,
    title:string,
    description:string,
    price:number
}

const WomanItem = ({image, title, description, price}:IWomman) => {
    const [isExpander, setIsExpander] = useState(false);

    const showTogleDescription = (e:React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpander(!isExpander);
    }

    return (<>
        <div className={style.cardItem}>
            <img className={style.cardItem__image} src={image} alt={title} />
            <p className={style.cardItem__title}>{title}</p>
            {
               isExpander ? description : description.length >= 120 ? `${description.slice(0, 120)}...` : description
            }
            {
                description.length >= 120 && (<>
                    <button className={style.cardItem__togleDescription} onClick={showTogleDescription}>
                        {
                            isExpander ? 'Скрыть' : 'Показать'
                        }
                    </button>
                </>)
            }
            <div className={style.cardItem__wrapperPriceBy}>
                <span className={style.cardItem__price}>Price: {price}$</span>
            </div>
        </div>
    </>)
}

export default WomanItem;