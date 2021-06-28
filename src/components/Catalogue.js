import React from './Catalogue';
import ProductList from './ProductList';
import Cart from './Cart';
import Total from './Total';

export default function Catalogue(props) {
    return (
        <div>
            <h1>Catalogue</h1>
            <ProductList products={props.products} cart={props.cart} handleAddToCart={props.handleAddToCart} />
            <Cart 
                cart={props.cart} 
                cartCount={props.cartCount} 
                handleRemoveFromCart={props.handleRemoveFromCart} 
                handleIncrementQty={props.handleIncrementQty} 
                handleDecrementQty={props.handleDecrementQty} 
                />
            <Total cartTotal={props.cartTotal} />
  
        </div>
    )
}

