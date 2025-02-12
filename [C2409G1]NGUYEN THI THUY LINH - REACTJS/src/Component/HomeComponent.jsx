import { useNavigate } from "react-router-dom";
import BaiVietComponent from "./BaiVietComponent";

function HomeComponent () {
        const navigate = useNavigate();
        const handleButtonOnClick = () => {
            navigate('/about');
        };


    return (
        <>
        <h1>Home Page</h1>
        <BaiVietComponent />
        <button onClick={handleButtonOnClick}>Go to about</button>

        </>
    )
}
export default HomeComponent