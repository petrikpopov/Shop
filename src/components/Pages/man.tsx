import Header from '../Header/header';
import Footer from '../Footer/footer';
import { BasketProvider } from '../Context/BasketContext';
import { useEffect, useState } from "react";
import axios from "axios";
import { Riple } from "react-loading-indicators";
import load from '../Loader/loader.module.scss'
import { Link } from "react-router-dom";
import ManItem from '../Cards/CardItem/cardManItem';
import style from '../Cards/CardItem/cardItem.module.scss'

interface IRating {
    rate:number,
    count:number
}

interface IMan {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
    rating:IRating
}

const ManPage = () => {
    const [data, setData] = useState<IMan[]>([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        axios.get<IMan[]>("https://fakestoreapi.com/products/category/men's%20clothing")
        .then(response => {
            setData(response.data);
            setLoader(false);
        });
    },[])

    if(loader) {
        return <div className={load.wrapperLoader}><Riple color="#32cd32" size="medium" text="Loading" textColor="" style={{position:'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%)' }}/></div>
    }

    return (<>
        <BasketProvider>
            <Header></Header>
            <main>
                <div className={style.cardItemWrapper}>
                    {
                        data.map((el, key) => (
                            <Link key={key} to={`/card/${el.title}`} state={{el}}>
                                <ManItem image={el.image} title={el.title} description={el.description} price={el.price}></ManItem>
                            </Link>
                        ))
                    }
                </div>
            </main>
            <Footer></Footer>
        </BasketProvider>
    </>)
}

export default ManPage;