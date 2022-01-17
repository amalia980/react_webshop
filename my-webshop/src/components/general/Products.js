import products from "../../services/productService";
import { useState, useEffect } from "react";
import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {

    const [prods, setProds] = useState([]);

    useEffect(() => {
        setProds(products)
    }, []);

    return (
        <>
            <div>
                {prods.map((prods) => (
                        <ProductItem key={prods.id} product={prods}/>
                ))}
            </div>
        </>
    )
}

export default Products;