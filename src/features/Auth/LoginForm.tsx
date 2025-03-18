import style from "./LoginRegister.module.scss";
import { useState } from "react";
import { useUserContext } from "../../components/Context/UserContext";
import { UserProvider } from "../../components/Context/UserContext";

export const Login = () => {
  const { loginUser } = useUserContext();
  const [formData, setFormData] = useState({ login: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { login, password } = formData;

    if (!login || !password) {
      alert("Введите email и пароль!");
      return;
    }

    const success = loginUser(login, password);
    if (success) {
      alert(`Вы успешно вошли как: ${login}`);
    } else {
      alert("Неверный email или пароль!");
    }
  };

  return (
    <UserProvider>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className={style.wrapperIputs}
      >
        <div className={style.login}>
          <label>Enter your Login</label>
          <input
            type="text"
            name="login"
            value={formData.login}
            placeholder="Login"
            onChange={handleChange}
          />
        </div>
        <div className={style.password}>
          <label>Enter your Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={style.btn}>
          Login
        </button>
      </form>
    </UserProvider>
  );
};
