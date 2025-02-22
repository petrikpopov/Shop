
import style from './basket.module.scss';
import { useBasketContext } from '../Context/BasketContext';

type basketProps = {
    isState: boolean;
    onOpen: () => void;
}

const Basket = ({isState}:basketProps) => {
    const {basket, removeFromBasket} = useBasketContext();

    return (
        <>
            {isState && (
                <div className={style.wrappperBasket}>
                    {
                        basket.length === 0 ? (<p>Карзина сейчас пустая!</p>) : (basket.map((el) => (
                            <div className={style.wrapperItem}>
                                <img className={style.image} src={el.image} alt={el.title} />
                                <span className={style.title}>{el.title}</span>
                                <span className={style.price}>Price: {el.price}$</span>
                                <button className={style.removeButton} onClick={() => removeFromBasket(el.id)}>Delete</button>
                            </div>
                        )))
                    }
                </div>
            )}
        </>    
    )
}

export default Basket;