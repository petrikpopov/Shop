import { useState } from 'react';
import style from './loginRegister.module.scss';
// import Login from './loginForm';
import Register from './registerForm';

interface IFormRegisterProps {
    stateForm:boolean;
    onClose: () => void;
    isLoginSeccuses: () => void;
}

// interface IUser {
//     email:string;
//     login:string;
//     password:string;
// }

const LoginRegistre = ({stateForm, /*isLoginSeccuses*/ onClose}:IFormRegisterProps) => {

    const [action, setAction] = useState('Sign Up');
    
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
                        action === 'Sign Up' ? (
                            <Register></Register>
                        ) : action === 'Sign In' ? (<>
                            {/* <Login></Login> */}
                            {/* <form onSubmit={handleSubmit} method='POST' className={style.wrapperForm__wrapperIputs}>
                                <div className={style.wrapperForm__wrapperIputs__login}>
                                    <label>Enter your Login</label>
                                    <input type="text" name='login' value={formData.login} placeholder="Login" onChange={handleChange}/>
                                </div>
                                <div className={style.wrapperForm__wrapperIputs__password}>
                                    <label>Enter your Password</label>
                                    <input type="password" name='password' value={formData.password} placeholder="Password" onChange={handleChange}/>
                                </div>
                                <button type="submit" className={style.wrapperForm__btn}>{action}</button>
                            </form> */}
                        </>) : ''
                    }
                </div>
            </>
        )}
    </>)
}

export default LoginRegistre;