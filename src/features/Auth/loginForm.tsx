import style from './loginRegister.module.scss';
import { useState } from "react";
import { useUserContext } from "../../components/Context/UserContext";
import { UserProvider } from '../../components/Context/UserContext';

const Login = () => {

    const { loginUser } = useUserContext();
    const [formData, setFormData] = useState(
        { login: '', password: '' }
    );

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
            alert('Введите email и пароль!');
            return;
        }

        const success = loginUser(login, password);
        if (success) {
            alert('Вы успешно вошли!');
        } else {
            alert('Неверный email или пароль!');
        }
    };

    return (
        <UserProvider>
            <form onSubmit={handleSubmit} method='POST' className={style.wrapperForm__wrapperIputs}>
                <div className={style.wrapperForm__wrapperIputs__login}>
                    <label>Enter your Login</label>
                    <input type="text" name='login' value={formData.login} placeholder="Login" onChange={handleChange}/>
                </div>
                <div className={style.wrapperForm__wrapperIputs__password}>
                    <label>Enter your Password</label>
                    <input type="password" name='password' value={formData.password} placeholder="Password" onChange={handleChange}/>
                </div>
                <button type="submit" className={style.wrapperForm__btn}>Login</button>
            </form>
        </UserProvider>
    )
}

export default Login;