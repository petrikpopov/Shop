import { useState } from 'react';
import style from './loginRegister.module.scss';

interface IFormRegisterProps {
    stateForm:boolean;
    onClose: () => void;
    isLoginSeccuses: () => void;
}

interface IUser {
    email:string;
    login:string;
    password:string;
}

const LoginRegistre = ({stateForm, isLoginSeccuses, onClose}:IFormRegisterProps) => {

    const [action, setAction] = useState('Sign Up');

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

        if (action === "Sign Up") {
            if(!email || !login || !password) {
                alert("Пользователь не зарегестрирован - заполните поля!");
                return
            }
            else {
                alert("Пользователь зарегестрирован!");
            }
        } else if (action === "Sign In") {
            const user = userData.find((user) => user.login === login && user.password === password);
            if(user) {
                alert(`Welcome dear, ${user.login}!`);
                isLoginSeccuses();
            } else {
                alert(`Invalid email or password.!`);
                return;
            }
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


        onClose();
    }

    console.log(userData);
    
    return (<>
        {stateForm && (
            <>
                <div className={style.overlay}></div>
                <div className={style.wrapperForm}>
                    <div className={style.wrapperForm__typeOperationClose}>
                        <div className={style.wrapperForm__typeOperationClose__typeOperation}>
                            <span onClick={() => setAction('Sign In')} className={`${style.wrapperForm__typeOperationClose__typeOperation__signIn} ${action === 'Sign In' ? style.activeButton : ''}`}>Sign In</span>
                            <span onClick={() => setAction('Sign Up')} className={`${style.wrapperForm__typeOperationClose__typeOperation__signUp} ${action === 'Sign Up' ? style.activeButton : ''}`}>Sign Up</span>
                        </div>
                        <div className={style.wrapperForm__close}>
                            <button onClick={onClose} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                    </div>
                    {
                        action === 'Sign Up' ? (<>
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
                                <button type="submit" className={style.wrapperForm__btn}>{action}</button>
                            </form>
                        </>) : action === 'Sign In' ? (<>
                            <form onSubmit={handleSubmit} method='POST' className={style.wrapperForm__wrapperIputs}>
                                <div className={style.wrapperForm__wrapperIputs__login}>
                                    <label>Enter your Login</label>
                                    <input type="text" name='login' value={formData.login} placeholder="Login" onChange={handleChange}/>
                                </div>
                                <div className={style.wrapperForm__wrapperIputs__password}>
                                    <label>Enter your Password</label>
                                    <input type="password" name='password' value={formData.password} placeholder="Password" onChange={handleChange}/>
                                </div>
                                <button type="submit" className={style.wrapperForm__btn}>{action}</button>
                            </form>
                        </>) : ''
                    }
                </div>
            </>
        )}
    </>)
}

export default LoginRegistre;