import { useParams } from "react-router-dom"

function ProductComponent () {
    const {id} = useParams();
    return (
        <>
            <div>
                Product ID: {id}
            </div>

            
        </>
    )
}
export default ProductComponent