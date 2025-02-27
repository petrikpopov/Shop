
import style from './basket.module.scss';
import { useBasketContext } from '../Context/BasketContext';

type basketProps = {
    isState: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const Basket = ({isState, onClose}:basketProps) => {
    const {basket, removeFromBasket} = useBasketContext();

    return (
        <div className={`${style.mainWrapper} ${isState ? style.active : ''}`} onClick={onClose}>
            <div className={style.wrappperBasket} onClick={(e) => {e.stopPropagation()}}>
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
        </div>    
    )
}

export default Basket;