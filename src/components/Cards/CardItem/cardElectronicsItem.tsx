import { useState } from 'react';
import style from './cardItem.module.scss';
import AddTovar from '../../AddToBasket/buttonAddToBasket';

interface IElectronic {
    id:number
    image:string,
    title:string,
    category:string;
    description:string,
    price:number
}

const ElectronicsItem = ({id, image, title, category, description, price}:IElectronic) => {

    const [isExpander, setIsExpander] = useState(false);

    const showTogleDescription = () => {
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
                <AddTovar id={id} image={image} title={title} category={category} description={description} price={price}></AddTovar>
            </div>
        </div>
    </>)
}

export default ElectronicsItem;