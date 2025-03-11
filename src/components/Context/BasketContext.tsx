import { createContext, useContext, useState, ReactNode } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface ICard {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
}

interface BasketContextType {
  basket: ICard[];
  addToBasket: (item: ICard) => void;
  removeFromBasket: (id: number) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasketContext = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasketContext must be used within a BasketProvider");
  }
  return context;
};

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<ICard[]>([]);
  const [showAnimationForToavr, setShowAnimationForToavr] = useState(false);

  const addToBasket = (item: ICard) => {
    const isNotInBasket = basket.find(
      (basketItem) => basketItem.id === item.id,
    );
    if (!isNotInBasket) {
      setBasket((prev) => [...prev, item]);
      setShowAnimationForToavr(true);
      setTimeout(() => {
        setShowAnimationForToavr(false);
      }, 2500);
    } else {
      alert("Товар уже в корзине!");
    }
  };

  const removeFromBasket = (id: number) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
      {showAnimationForToavr && (
        <DotLottieReact
          src="https://lottie.host/45e971b7-cc4f-4fe9-b1a4-1239eeba6b6e/0sryept4TU.lottie"
          autoplay={true}
          loop={false}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 200,
            height: 200,
            zIndex: 1000,
          }}
        />
      )}
    </BasketContext.Provider>
  );
};
