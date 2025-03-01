import style from './header.module.scss';
import { Link } from "react-router-dom";
import LoginRegistre from '../../Features/Auth/login-registerForm';
import Basket from '../Basket/basket';
import { useState } from 'react';
import WomanMenu from '../../Features/Products/womanMenu';
import ManMenu from '../../Features/Products/manMenu';
import profilIcon from '../../icons/profilIcon.svg';
import shopIcon from '../../icons/shoppingСart.svg'

const Header = () => {
    const [isOpenBasket, setOpenBasket] = useState(false);
    const OpenBasket = () => setOpenBasket(prev => !prev)

    const [isOpenForm, setOpenForm] = useState(false);
    const OnCLoseForm = () => setOpenForm(false);

    const [isOnLogin, setOnLogin] = useState(false);
    const handleLogout = () => setOnLogin(true);

    const [isHoverForMenu, setHoverForMenu] = useState('');
    const onHoverItemShow = (menuType:string) => {
        setHoverForMenu(menuType);
    }

    const onHoverItemHiden = () => {
        setHoverForMenu('');
    }

    return (<>
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.logo}><Link to='/'>MyHouse</Link></div>
                    <ul className={style.listMenu}>
                        <li onMouseEnter={() => onHoverItemShow('woman')} onMouseLeave={onHoverItemHiden} className={style.listItem}><Link to='/woman'>Woman</Link>
                            {
                                isHoverForMenu === 'woman' && (<>
                                    <WomanMenu></WomanMenu>
                                </>)
                            }
                        </li>
                        <li onMouseEnter={() => onHoverItemShow('man')} onMouseLeave={onHoverItemHiden} className={style.listItem}><Link to='/man'>Man</Link>
                            {
                                isHoverForMenu ===  'man' && (<>
                                    <ManMenu></ManMenu>
                                </>)
                            }
                        </li>
                        <li onMouseEnter={() => onHoverItemShow('electronics')} onMouseLeave={onHoverItemHiden} className={style.listItem}><Link to='/electronics'>Jewelery</Link>
                            {
                                isHoverForMenu === 'electronics' && (<>
                                   
                                </>)
                            }
                        </li>
                    </ul>
                    <div className={style.wrapperRegisterLogin}>
                        <span className={style.showCounter}></span>
                        <img onClick={() => OpenBasket()} className={style.shoppingСard} src={shopIcon} alt="shoppingСard-icon" />
                        {
                            !isOnLogin ? (<>
                                <button onClick={() => setOpenForm(!isOpenForm)} type="button" className="btn btn-primary profileButton" data-toggle="modal" data-target="#exampleModalCenter">
                                    <img className={style.profileIcon} src={profilIcon} alt="profilIcon" />
                                    Profile
                                </button>
                            </>) : (<>
                                <button onClick={() => setOnLogin(false)} type="button" className="btn btn-link">Log Out</button>
                            </>)
                        }
                    </div>
                </div>
            </div>
            <Basket isState={isOpenBasket} onOpen={OpenBasket} onClose={OpenBasket}></Basket>
        </header>
        <LoginRegistre stateForm={isOpenForm} isLoginSeccuses={handleLogout} onClose={OnCLoseForm}/>
    </>)
}

export default Header;