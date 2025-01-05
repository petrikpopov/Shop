import style from '../styleHeader/header.module.scss';
import { Link } from "react-router-dom";
import LoginRegistre from './LoginRegister/login-registerForm';
import Basket from './Basket/basket';
import { useState } from 'react';
import WomanMenu from './HeaderBlockMenu/MenuForWoman/womanMenu';
import ManMenu from './HeaderBlockMenu/MenuForMan/manMenu';
import ChildrenMenu from './HeaderBlockMenu/ChildrenMenu/childrenMenu';


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
                        <li onMouseEnter={() => onHoverItemShow('children')} onMouseLeave={onHoverItemHiden} className={style.listItem}><Link to='/children'>Сhildren</Link>
                            {
                                hoverForMenu === 'children' && (<>
                                    <ChildrenMenu></ChildrenMenu>
                                </>)
                            }
                        </li>
                    </ul>
                    <div className={style.wrapperRegisterLogin}>
                        <span className={style.showCounter}></span>
                        <img onClick={() => OpenBasket()} className={style.wrapperRegisterLogin__shoppingСart} src="src/icons/shoppingСart.svg" alt="shoppingСart-icon" />
                        {
                            !onLogin ? (<>
                                <button onClick={() => isOpenForm(!openForm)} type="button" className="btn btn-primary profileButton" data-toggle="modal" data-target="#exampleModalCenter">
                                    <img className={style.wrapperRegisterLogin__profileIcon} src="src/icons/profilIcon.svg" alt="profilIcon" />
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