import style from './addToBasketButton.module.scss'
import { useBasket } from '../Context/BasketContext';

interface ICard {
    id:number
    image:string;
    title:string;
    category:string;
    description:string;
    price:number;
}

const AddTovar = ({id, image, title, category, description, price}:ICard) => {

    const {addToBasket} = useBasket();

    return (<>
        <button onClick={() => addToBasket({id,image,title, category, description, price})} className={style.buttonBY}>By</button>
    </>)
}

export default AddTovar;