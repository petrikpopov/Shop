import { useLocation } from "react-router-dom";
import { BasketProvider } from "../BasketContext";
import Header from "./header";
import Footer from "./Footer/footer";
import GoToBack from "./goToBack";
import AddTovar from "./buttonAddToBasket";

const CardsDetail = () => {

    const location = useLocation();
    const { el } = location.state;

    return (
        <BasketProvider>
            <Header></Header>
            <div>
                <GoToBack></GoToBack>
                <div>
                    <img src={el.image} alt={el.title} />
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                    <p>{el.category}</p>
                    <span>Price: ${el.price}</span>
                    <span>Rating: {el.rating.rate || ''} ({el.rating.count || ''} reviews)</span>
                </div>
                <AddTovar id={el.id} image={el.image} title={el.title} category={el.category} description={el.description} price={el.price} />
            </div>
            <Footer></Footer>
        </BasketProvider>
    );
};

export default CardsDetail;
