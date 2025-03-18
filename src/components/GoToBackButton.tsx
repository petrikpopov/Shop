import { useNavigate } from "react-router-dom";

export const GoToBackButton = () => {
  const routHistory = useNavigate();

  const goToBack = () => {
    routHistory(-1);
  };

  return <button onClick={goToBack}>Вернутся назад</button>;
};
