import { useLocation } from "react-router-dom";
import { BasketProvider } from "../Context/BasketContext";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import GoToBack from "../goToBack";
import AddTovar from "../AddToBasket/buttonAddToBasket";
import style from './cardsDetails.module.scss';

const CardsDetails = () => {

    const location = useLocation();
    const { el } = location.state;

    return (
        <BasketProvider>
            <Header></Header>
            <div>
                <GoToBack></GoToBack>
                <div className={style.wrapperDetails}>
                    <div className={style.image}><img src={el.image} alt={el.title}/></div>
                    <div className={style.content}>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                        <p>{el.category}</p>
                        <span>Price: ${el.price}</span>
                        <span>Rating: {el.rating.rate || ''} ({el.rating.count || ''} reviews)</span>
                        <AddTovar id={el.id} image={el.image} title={el.title} category={el.category} description={el.description} price={el.price} />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </BasketProvider>
    );
};

export default CardsDetails;
