import { useEffect, useState } from "react"
import CardItem from "../Cards/CardItem/cardIndexItem";
import Header from "../Header/header";
import style from '../Cards/CardItem/cardItem.module.scss'
import { Riple } from "react-loading-indicators";
import loader from '../Loader/loader.module.scss';
import Footer from "../Footer/footer";
import { BasketProvider } from "../Context/BasketContext";
import axios from "axios";
import { Link } from "react-router-dom";

interface Product {
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
    const [result, setResult] = useState<Product[]>([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        axios.get<Product[]>('https://fakestoreapi.com/products').then(response => {
            setResult(response.data);
            isLoading(false);
        })
    },[]);

    if(loading) {
        return <div className={loader.wrapperLoader}><Riple color="#32cd32" size="medium" text="Loading" textColor="" style={{position:'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%)' }}/></div>
    }

    console.log(result);
    return (<>
        <BasketProvider>
            <Header></Header>
            <main>
                <div className={style.cardItemWrapper}>
                    {result.map((el, key) => (
                        <Link key={key} to={`/card/${el.title}`} state={{el}}><CardItem key={key} id={el.id} image={el.image} title={el.title} category={el.category} description={el.description} price={el.price}></CardItem></Link>
                    ))}
                </div>
            </main>
            <Footer></Footer>
        </BasketProvider>
    </>)
}

export default IndexPage