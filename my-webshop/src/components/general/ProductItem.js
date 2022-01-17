import React from "react";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

const ProductItem = (props) => {

    const {product} = props;

    const {basket, setBasket} = useContext(BasketContext);

    const addToBasket = () => {
        const same = basket.filter(item => item === product)
        Object.assign(product, {
            qty: same.length + 1, 
        })
        setBasket([...basket, product])
    }

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default ProductItem;