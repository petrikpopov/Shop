import { useState } from "react";
import style from "./CardItem.module.scss";

type DescriptionProps = {
  description: string;
};

export const ToggleDescription = ({ description }: DescriptionProps) => {
  const [isExpander, setIsExpander] = useState(false);

  const showToggleDescription = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpander((prev) => !prev);
  };

  return (
    <>
      {isExpander
        ? description
        : description.length > 120
          ? `${description.slice(0, 120)}...`
          : description}
      {description.length > 120 && (
        <button
          className={style.toggleDescription}
          onClick={showToggleDescription}
        >
          {isExpander ? "Скрыть" : "Показать"}
        </button>
      )}
    </>
  );
};
