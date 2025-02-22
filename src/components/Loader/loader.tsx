import { Riple } from "react-loading-indicators";
import loader from '../Loader/loader.module.scss';

const Loader = () => {
    return (
        <div className={loader.wrapperLoader}>
            <Riple color="#32cd32" size="medium" text="Loading" textColor="" style={{position:'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%)' }}/>
        </div>
    )
}

export default Loader;