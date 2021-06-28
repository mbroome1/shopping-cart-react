import React from 'react';
import './../styles/cart.css';

function Cart(props) {
    const handleRemoveFromCart = function(e){
        const id = e.target.parentElement.id;

        if (id){
            props.handleRemoveFromCart(id);
        }
    }
    const handleIncrementQty = function(e){
        const id = e.target.parentElement.id;
        if (id) {
            props.handleIncrementQty(id);
        }
    }
    const handleDecrementQty = function(e){
        const id = e.target.parentElement.id;
        if (id) {
            props.handleDecrementQty(id);
        }
    }
    return (
        <div>
            <h1>Cart</h1>
            {props.cartCount === 0 ? <p>You have nothing in your cart.</p> : <p className="cart-count">Items: {props.cartCount}</p>}
            <ul>
            {
                props.cart.map((item) => {
                    return (
                        <li key={item.id} id={item.id}>
                            <img src={item.image} />
                            <span className="cart-stock">{item.stock}</span> <span className="cart-description">{item.description}</span> <span className="cart-size">{item.size}</span> <span className="cart-price">${item.price.toFixed(2)}</span>
                            <button onClick={handleDecrementQty} disabled={item.qty<2}>-1</button>
                            <span className="cart-qty">{item.qty}</span>
                            <button onClick={handleIncrementQty}>+1</button>
                            <button onClick={handleRemoveFromCart}>remove</button>
                        </li>
                    )
                })
            }

            </ul>
        </div>
    )
}
export default Cart;