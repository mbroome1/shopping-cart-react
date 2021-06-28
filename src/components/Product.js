import React from 'react';
import "./../styles/product.css";
import { v4 as uuidv4 } from 'uuid';

export default function Product(props) {
    const handleAddToCart = function(e) {
        e.preventDefault();
        // e.target.elemen
        var size = e.target.elements.size.value;
        var qty = Number.parseInt(e.target.elements.qty.value);
        props.handleAddToCart(
            {
                id: uuidv4(),
                stock: props.product.stock, 
                description:props.product.description,
                price: props.product.price,
                size: size,
                qty: qty
            })
        // alert(`${props.product.stock}, qty: {}`);
    }
    return (
        <div className="product">
            <h1>{props.product.stock}</h1>
            
            <img src={props.product.image} alt='pic'/>
            <p>{props.product.description}</p>
            <p>${props.product.price.toFixed(2)}</p>
            <form onSubmit={handleAddToCart}>
                <div className="select-group">
                    <span>size:</span>
                    <select id="size">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <div className="select-group">
                    <span>qty:</span>
                    <select id="qty">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                </div>
                <button>Add to Cart</button>
            </form>
        </div>
            

    )
}
