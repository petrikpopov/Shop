import style from './addToBasketButton.module.scss'
import { useBasketContext } from '../Context/BasketContext';

type cardProps = {
    id:number
    image:string;
    title:string;
    category:string;
    description:string;
    price:number;
}

const AddToBasketButton = ({id, image, title, category, description, price}:cardProps) => {

    const {addToBasket} = useBasketContext();

    return (<button onClick={() => addToBasket({id,image,title, category, description, price})} className={style.buttonBY}>By</button>)
}

export default AddToBasketButton;