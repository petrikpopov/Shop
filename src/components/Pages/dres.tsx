import { useParams } from "react-router-dom";
import { Header } from "../Header/header";
import { BasketProvider } from "../Context/basketContext";
import { Footer } from "../Footer/footer";

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
