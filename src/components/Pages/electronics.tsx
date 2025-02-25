import { useEffect, useState } from "react"
import Header from "../Header/header";
import Loader from "../Loader/loader";
import style from '../Cards/CardItem/cardItem.module.scss'
import Footer from "../Footer/footer";
import { BasketProvider } from "../Context/BasketContext";
import axios from "axios";
import { Link } from "react-router-dom";
import ElectronicsItem from "../Cards/CardItem/cardElectronicsItem";

type RatingProduct = {
    rate:number,
    count:number
}

type ElectronicProductsData = {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
    rating:RatingProduct
}

const ElectronicsPage = () => {
    const [data, setData] = useState<ElectronicProductsData[]>([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        axios.get<ElectronicProductsData[]>("https://fakestoreapi.com/products")
        .then(response => {
            setData(response.data)
        }).finally(() => {
            setLoad(false);
        });
    },[])

    if(load) {
        return (
            <Loader/>
        )
    }

    const filterDataElectronik = data.filter((elements) => elements.category === 'jewelery');

    return (
        <BasketProvider>
            <Header></Header>
            <main>
                <div className={style.cardItemWrapper}>
                    {
                        filterDataElectronik.map((el) => (
                            <Link key={el.id} to={`/card/${el.title}`}>
                                <ElectronicsItem id={el.id} image={el.image} title={el.title} category={el.category} description={el.description} price={el.price}></ElectronicsItem>
                            </Link>
                        ))
                    }
                </div>
            </main>
            <Footer></Footer>
        </BasketProvider>
    )
}

export default ElectronicsPage;