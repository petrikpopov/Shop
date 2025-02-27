import { useState } from 'react';
import style from './loginRegister.module.scss';
import Login from './loginForm';
import Register from './registerForm';
import { UserProvider } from '../../components/Context/UserContext';

interface IFormRegisterProps {
    stateForm:boolean;
    onClose: () => void;
    isLoginSeccuses: () => void;
}

const LoginRegistre = ({stateForm, /*isLoginSeccuses*/ onClose}:IFormRegisterProps) => {

    const [action, setAction] = useState('Sign Up');
    
    return (
        <UserProvider>
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
                                <Login></Login>
                            </>) : ''
                        }
                    </div>
                </>
            )}
        </UserProvider>
    )
}

export default LoginRegistre;