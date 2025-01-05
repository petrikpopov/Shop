import Header from "./header";
import Footer from "./Footer/footer";
import { BasketProvider } from "../BasketContext";

const ManPage = () => {

    return (<>
        <BasketProvider>
            <Header></Header>
            <main>
                <h1>Это страница для мужкого отдела!</h1>
            </main>
            <Footer></Footer>
        </BasketProvider>
    </>)
}

export default ManPage;