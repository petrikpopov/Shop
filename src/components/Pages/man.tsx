import Header from '../Header/header';
import Footer from '../Footer/footer';
import { BasketProvider } from '../Context/BasketContext';
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/loader";
import { Link } from "react-router-dom";
import ManItem from '../Cards/CardItem/cardManItem';
import style from '../Cards/CardItem/cardItem.module.scss'

type RatingProduct = {
    rate:number,
    count:number
}

type ManProductsData = {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
    rating:RatingProduct
}

const ManPage = () => {
    const [data, setData] = useState<ManProductsData[]>([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        axios.get<ManProductsData[]>("https://fakestoreapi.com/products/category/men's%20clothing")
        .then(response => {
            setData(response.data);
        }).finally(() => {
            setLoader(false);
        });
    },[])

    if(loader) {
        return (
            <Loader/>
        )
    }

    return (
        <BasketProvider>
            <Header></Header>
            <main>
                <div className={style.cardItemWrapper}>
                    {
                        data.map((el) => (
                            <Link key={el.id} to={`/card/${el.title}`} state={{el}}>
                                <ManItem image={el.image} title={el.title} description={el.description} price={el.price}></ManItem>
                            </Link>
                        ))
                    }
                </div>
            </main>
            <Footer></Footer>
        </BasketProvider>
    )
}

export default ManPage;