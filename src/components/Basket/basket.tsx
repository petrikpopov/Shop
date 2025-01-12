
import style from './basket.module.scss';
import { useBasket } from '../Context/BasketContext';

interface IBasket {
    isState: boolean;
    onOpen: () => void;
}

const Basket = ({isState}:IBasket) => {
    const {basket, removeFromBasket} = useBasket();

    return (
        <>
            {isState && (<>
                <div className={style.wrappperBasket}>
                    {
                        basket.length === 0 ? (<p>Карзина сейчас пустая!</p>) : (basket.map((el) => (
                            <div className={style.wrapperTovarItem}>
                                <img className={style.wrapperTovarItem__image} src={el.image} alt={el.title} />
                                <span className={style.wrapperTovarItem__title}>{el.title}</span>
                                <span className={style.wrapperTovarItem__price}>Price: {el.price}$</span>
                                <button className={style.wrapperTovarItem__removeButton} onClick={() => removeFromBasket(el.id)}>Delete</button>
                            </div>
                        )))
                    }
                </div>
            </>)}
        </>    
    )
}

export default Basket;