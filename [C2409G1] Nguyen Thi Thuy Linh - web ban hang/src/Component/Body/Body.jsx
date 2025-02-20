import { useState } from "react";
import { products } from "../../data/products";
import NavbarCenterComponent from "../NavbarCenterComponent";
import ProductList from "../ProductList";

function Body () {

    const [selectedCategory, setSelectedCategory] = useState('All')
     
       
    
        const categories = [...new Set(products.map((product) => product.category))];
    
        const handleSelectCategory = (category) => {
            setSelectedCategory(category)
        }
        
    
        const filteredProducts = selectedCategory === 'All'
            ? products
            : products.filter((product) => product.category === selectedCategory);


    return (
        <>
            <h3 style={{
                            textAlign: "center", 
                            marginTop: "70px", 
                            marginBottom:"50px"
                            }}>
                                Sản phẩm nổi bật
                        </h3>
            
                        <NavbarCenterComponent categories={categories} onSelectCategory={handleSelectCategory} />
                        <ProductList productsProp={filteredProducts} />
        </>
    )
}
export default Body