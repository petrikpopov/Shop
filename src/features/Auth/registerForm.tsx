import { useState } from "react";
import style from './loginRegister.module.scss';
import { useUserContext } from "../../components/Context/UserContext";
import { UserProvider } from "../../components/Context/UserContext";

const Register = () => {
    const { addUser } = useUserContext();

    const [formData, setFormData] = useState({
        email: '',
        login: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { email, login, password } = formData;

        const newUser = { email, login, password };

        if (!email || !login || !password) {
            alert("Пользователь не зарегистрирован - заполните поля!");
            return;
        }

        alert("Пользователь зарегистрирован!");

        addUser(newUser);

        setFormData({
            email: '',
            login: '',
            password: '',
        });
    };

    return (
        <UserProvider>
            <form onSubmit={handleSubmit} method="POST" className={style.wrapperForm__wrapperIputs}>
                <div className={style.wrapperForm__wrapperIputs__email}>
                    <label>Enter your Email</label>
                    <input type="email" name="email" value={formData.email} required placeholder="Email" onChange={handleChange} />
                </div>
                <div className={style.wrapperForm__wrapperIputs__login}>
                    <label>Enter your Login</label>
                    <input type="text" name="login" value={formData.login} placeholder="Login" onChange={handleChange} />
                </div>
                <div className={style.wrapperForm__wrapperIputs__password}>
                    <label>Enter your Password</label>
                    <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
                </div>
                <button type="submit" className={style.wrapperForm__btn}>Register</button>
            </form>
        </UserProvider>
    );
};

export default Register;
