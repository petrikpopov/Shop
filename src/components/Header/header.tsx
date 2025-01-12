import style from './header.module.scss';
import { Link } from "react-router-dom";
import LoginRegistre from '../../features/Auth/login-registerForm';
import Basket from '../Basket/basket';
import { useState } from 'react';
import WomanMenu from '../../features/Products/womanMenu';
import ManMenu from '../../features/Products/manMenu';
import profilIcon from '../../icons/profilIcon.svg';
import shopIcon from '../../icons/shoppingСart.svg';

const Header = () => {
    const [openBasket, isOpenBasket] = useState(false);

    const OpenBasket = () => isOpenBasket(!openBasket)

    const [openForm, isOpenForm] = useState(false);

    const OnCLoseForm = () => isOpenForm(false);

    // const [openFiletr, isOpenFilter] = useState(false)

    // const OpenFilter = () => isOpenFilter(!openFiletr);

    const [onLogin, setOnLogin] = useState(false);

    const handleLogout = () => setOnLogin(true);

    const [hoverForMenu, setHoverForMenu] = useState('');

    const onHoverItemShow = (menuType:string) => {
        setHoverForMenu(menuType);
    }

    const onHoverItemHiden = () => {
        setHoverForMenu('');
    }

    return (<>
        <header className={style.myHeader}>
            <div className={style.container}>
                <div className={style.wrapperContentHeader}>
                    <div className={style.logo}><Link to='/'>MyHouse</Link></div>
                    <ul className={style.listMenu}>
                        <li onMouseEnter={() => onHoverItemShow('woman')} onMouseLeave={onHoverItemHiden} className={style.listItem}><Link to='/woman'>Woman</Link>
                            {
                                hoverForMenu === 'woman' && (<>
                                    <WomanMenu></WomanMenu>
                                </>)
                            }
                        </li>
                        <li onMouseEnter={() => onHoverItemShow('man')} onMouseLeave={onHoverItemHiden} className={style.listItem}><Link to='/man'>Man</Link>
                            {
                                hoverForMenu ===  'man' && (<>
                                    <ManMenu></ManMenu>
                                </>)
                            }
                        </li>
                        <li onMouseEnter={() => onHoverItemShow('electronics')} onMouseLeave={onHoverItemHiden} className={style.listItem}><Link to='/electronics'>Jewelery</Link>
                            {
                                hoverForMenu === 'electronics' && (<>
                                   
                                </>)
                            }
                        </li>
                    </ul>
                    <div className={style.wrapperRegisterLogin}>
                        <span className={style.showCounter}></span>
                        <img onClick={() => OpenBasket()} className={style.wrapperRegisterLogin__shoppingСart} src={shopIcon} alt="shoppingСart-icon" />
                        {
                            !onLogin ? (<>
                                <button onClick={() => isOpenForm(!openForm)} type="button" className="btn btn-primary profileButton" data-toggle="modal" data-target="#exampleModalCenter">
                                    <img className={style.wrapperRegisterLogin__profileIcon} src={profilIcon} alt="profilIcon" />
                                    Profile
                                </button>
                            </>) : (<>
                                <button onClick={() => setOnLogin(false)} type="button" className="btn btn-link">Log Out</button>
                            </>)
                        }
                    </div>
                </div>
            </div>
            <Basket isState={openBasket} onOpen={OpenBasket}></Basket>
        </header>
        {/* <button onClick={OpenFilter}>
            {
                !openFiletr ? 'Open filter' : 'Close filter'
            }
        </button>
        <br />
        {
            openFiletr && (<>
                <input type="range" />
            </>)
        } */}
        <LoginRegistre stateForm={openForm} isLoginSeccuses={handleLogout} onClose={OnCLoseForm}/>
    </>)
}

export default Header;