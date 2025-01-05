import Header from "./header";
import loader from './loader.module.scss';
import Footer from "./Footer/footer";
import { BasketProvider } from "../BasketContext";
import { useEffect, useState } from "react";
import WomanItem from "./cardWomanItem";
import style from './cardItem.module.scss'
import { Riple } from "react-loading-indicators";
import { Outlet } from "react-router-dom";

interface IRating {
    rate:number,
    count:number
}

interface IWomanClothes {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating: IRating
}

const WomanPage = () => {
    const [womanClothes, setWomanClothes] = useState<IWomanClothes[]>([]);
    const [loading, isLoading] = useState(true);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        .then(response => response.json())
        .then((data:IWomanClothes[]) => {
            setWomanClothes(data);
            isLoading(false);
        });
    },[])

    if(loading) {
        return <div className={loader.wrapperLoader}><Riple color="#32cd32" size="medium" text="Loading" textColor="" style={{position:'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%)' }}/></div>
    }

    return (<>
        <BasketProvider>
            <Header></Header>
            <main>
               <div className={style.cardItemWrapper}>
                    {womanClothes.map((item, key) => (
                        <WomanItem key={key} image={item.image} title={item.title} description={item.description} price={item.price}></WomanItem>
                    ))}
               </div>
               <Outlet/>
            </main>
            <Footer></Footer>
        </BasketProvider>
    </>)
}

export default WomanPage;