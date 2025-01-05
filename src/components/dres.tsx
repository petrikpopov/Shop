import { useParams } from "react-router-dom";

const DresPage = () => {
    const { category } = useParams();

    const decodedCategory = decodeURIComponent(category!); // Декодируем, если нужно

    console.log(decodedCategory); // Выводим декодированное значение

    return (
        <div>
            <h1>Это страница {decodedCategory}!</h1>
        </div>
    );
};

export default DresPage;
