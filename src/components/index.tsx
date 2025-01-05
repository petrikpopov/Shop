import { useEffect, useState } from "react"
import CardItem from "./cardIndexItem";
import Header from "./header"
import style from './cardItem.module.scss';
import { Riple } from "react-loading-indicators";
import loader from './loader.module.scss';
import Footer from "./Footer/footer";
import { BasketProvider } from "../BasketContext";

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
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((data: Product[]) => {
            setResult(data);
            isLoading(false);
        });
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
                        <CardItem key={key} id={el.id} image={el.image} title={el.title} category={el.category} description={el.description} price={el.price}></CardItem>
                    ))}
                </div>
            </main>
            <Footer></Footer>
        </BasketProvider>
    </>)
}

export default IndexPage