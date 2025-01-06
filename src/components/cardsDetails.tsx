import { useLocation } from "react-router-dom";
import { BasketProvider } from "../BasketContext";
import Header from "./header";
import Footer from "./Footer/footer";
import GoToBack from "./goToBack";

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
            </div>
            <Footer></Footer>
        </BasketProvider>
    );
};

export default CardsDetail;
