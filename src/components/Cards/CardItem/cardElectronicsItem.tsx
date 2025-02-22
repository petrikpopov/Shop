import { useState } from 'react';
import style from './cardItem.module.scss';
import AddTovar from '../../AddToBasket/buttonAddToBasket';

type ElectronicsProductCardProps = {
    id:number
    image:string,
    title:string,
    category:string;
    description:string,
    price:number
}

const ElectronicsProductCard = ({id, image, title, category, description, price}:ElectronicsProductCardProps) => {

    const [isExpander, setIsExpander] = useState(false);

    const showTogleDescription = () => {
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
            <div className={style.wrapperPriceBy}>
                <span className={style.price}>Price: {price}$</span>
                <AddTovar id={id} image={image} title={title} category={category} description={description} price={price}></AddTovar>
            </div>
        </div>
    )
}

export default ElectronicsProductCard;