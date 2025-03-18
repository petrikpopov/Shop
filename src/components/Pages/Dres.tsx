import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { BasketProvider } from "../Context/BasketContext";
import { Footer } from "../Footer/Footer";

export const DresPage = () => {
  const { category } = useParams();

  return (
    <BasketProvider>
      <Header />
      <main>
        <h1>Это страница {category}!</h1>
      </main>
      <Footer />
    </BasketProvider>
  );
};
