import { useEffect, useState } from "react"
import Header from "../Header/header";
import { Riple } from "react-loading-indicators";
import loader from '../Loader/loader.module.scss'
import style from '../Cards/CardItem/cardItem.module.scss'
import Footer from "../Footer/footer";
import { BasketProvider } from "../Context/BasketContext";
import axios from "axios";
import { Link } from "react-router-dom";
import ElectronicsItem from "../Cards/CardItem/cardElectronicsItem";

interface IRating {
    rate:number,
    count:number
}

interface IElectronics {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
    rating:IRating
}

const ElectronicsPage = () => {
    const [data, setData] = useState<IElectronics[]>([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        axios.get<IElectronics[]>("https://fakestoreapi.com/products")
        .then(response => {
            setData(response.data)
            setLoad(false);
        });
    },[])

    if(load) {
        return <div className={loader.wrapperLoader}><Riple color="#32cd32" size="medium" text="Loading" textColor="" style={{position:'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%)' }}/></div>
    }

    const filterDataElectronik = data.filter((elements) => elements.category === 'jewelery');

    return (<>
        <BasketProvider>
            <Header></Header>
            <main>
                <div className={style.cardItemWrapper}>
                    {
                        filterDataElectronik.map((el, key) => (
                            <Link key={key} to={`/card/${el.title}`}>
                                <ElectronicsItem id={el.id} image={el.image} title={el.title} category={el.category} description={el.description} price={el.price}></ElectronicsItem>
                            </Link>
                        ))
                    }
                </div>
            </main>
            <Footer></Footer>
        </BasketProvider>
    </>)
}

export default ElectronicsPage;