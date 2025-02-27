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
            <div className={`${style.mainWrapper} ${stateForm ? style.active : ''}`}  onClick={onClose}>
                <div className={style.wrapperForm} onClick={(e) => {e.stopPropagation()}}>
                    <div className={style.typeOperationClose}>
                        <div className={style.typeOperation}>
                            <span onClick={() => setAction('Sign In')} className={`${style.signIn} ${action === 'Sign In' ? style.activeButton : ''}`}>Sign In</span>
                            <span onClick={() => setAction('Sign Up')} className={`${style.signUp} ${action === 'Sign Up' ? style.activeButton : ''}`}>Sign Up</span>
                        </div>
                        <div className={style.close}>
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
            </div>
        </UserProvider>
    )
}

export default LoginRegistre;