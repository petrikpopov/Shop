import { useNavigate } from "react-router-dom"

const GoToBack = () => {
    const routHistory = useNavigate()

    const goToBack = () => {
        routHistory(-1);
    }

    return (<>
        <button onClick={goToBack}>Вернутся назад</button>
    </>)
}

export default GoToBack;