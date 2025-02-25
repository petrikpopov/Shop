import { useState } from "react";
import style from './loginRegister.module.scss';

interface IUser {
    email:string;
    login:string;
    password:string;
}

const Register = () => {

    const [userData , setUserData] = useState<IUser[]>([]);

    const [formData, setFormData] = useState<IUser>({
        email:'',
        login:'',
        password:'',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));    
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        const {email, login, password} = formData;

        if(!email || !login || !password) {
            alert("Пользователь не зарегестрирован - заполните поля!");
            return
        }
        else {
            alert("Пользователь зарегестрирован!");
        }

        setFormData({
            email:'',
            login:'',
            password:'',
        })

        setUserData((prevData) => ([
            ...prevData,
            {email, login, password}
        ]));
    }

    console.log(userData);
    
    return (
        <form onSubmit={handleSubmit} method='POST' className={style.wrapperForm__wrapperIputs}>
            <div className={style.wrapperForm__wrapperIputs__email}>
                <label>Enter your Email</label>
                <input type="email" name='email' value={formData.email} required placeholder="Email" onChange={handleChange}/>
            </div>
            <div className={style.wrapperForm__wrapperIputs__login}>
                <label>Enter your Login</label>
                <input type="text" name='login' value={formData.login} placeholder="Login" onChange={handleChange}/>
            </div>
            <div className={style.wrapperForm__wrapperIputs__password}>
                <label>Enter your Password</label>
                <input type="password" name='password' value={formData.password} placeholder="Password" onChange={handleChange}/>
            </div>
            <button type="submit" className={style.wrapperForm__btn}>Registrations</button>
        </form>
    )
}

export default Register;