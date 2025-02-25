import { useParams } from "react-router-dom";
import Header from "../Header/header";
import { BasketProvider } from "../Context/BasketContext";
import Footer from "../Footer/footer";

const DresPage = () => {
    const { category } = useParams();
   
    return (
        <BasketProvider>
            <Header></Header>
                <main>
                    <h1>Это страница {category}!</h1>
                </main>
            <Footer></Footer>
        </BasketProvider>
    );
};

export default DresPage;
