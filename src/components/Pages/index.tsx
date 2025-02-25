import { useEffect, useState } from "react"
import CardItem from "../Cards/CardItem/cardIndexItem";
import Header from "../Header/header";
import style from '../Cards/CardItem/cardItem.module.scss'
import Footer from "../Footer/footer";
import { BasketProvider } from "../Context/BasketContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";

type ProductData = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
}

const IndexPage = () => {
    const [result, setResult] = useState<ProductData[]>([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        axios.get<ProductData[]>('https://fakestoreapi.com/products').then(response => {
            setResult(response.data);
        }).finally(() => {
            isLoading(false);
        })
    },[]);

    if(loading) {
        return (
            <Loader/>
        )
    }

    return (
        <BasketProvider>
            <Header></Header>
            <main>
                <div className={style.cardItemWrapper}>
                    {result.map((el) => (
                        <Link key={el.id} to={`/card/${el.title}`} state={{el}}>
                            <CardItem id={el.id} image={el.image} title={el.title} category={el.category} description={el.description} price={el.price}></CardItem>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer></Footer>
        </BasketProvider>
    )
}

export default IndexPage