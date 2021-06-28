
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Catalogue from './Catalogue';
import Checkout from './Checkout';
import "./../styles/app.css";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.getCartCount = this.getCartCount.bind(this);
    this.getCartTotal = this.getCartTotal.bind(this);
    this.handleIncrementQty = this.handleIncrementQty.bind(this);
    this.handleDecrementQty = this.handleDecrementQty.bind(this);
    this.state = {
      products: [],
      cart: []
    }
  }
  componentDidMount() {
    const productList = [
      {
        stock: '1000',
        description: 'Business Shirt',
        price: 10.00,
        image: 'https://cdn.pixabay.com/photo/2015/10/16/13/47/premium-991221_960_720.jpg'
      },
      {
        stock: '2000',
        description: 'Dress Shirt',
        price: 12.00,
        image: 'https://cdn.pixabay.com/photo/2014/08/26/21/48/shirts-428600_960_720.jpg'

      },
      {
        stock: '3000',
        description: 'Brown Belt',
        price: 15.50,
        image: 'https://cdn.pixabay.com/photo/2015/09/23/03/07/menswear-952836_960_720.jpg'
      },
      {
        stock: '4000',
        description: 'Silk Tie',
        price: 38.99,
        image: 'https://cdn.pixabay.com/photo/2017/10/13/05/26/silk-tie-2846862_960_720.jpg'
      }
    ]
    this.setState(()=>({
      products: productList
    }))
  }
  handleAddToCart(product) {
    const cartIndex = this.state.cart.findIndex(item => item.stock === product.stock && item.size === product.size);
    const newCart = cartIndex > -1 
                    ? this.state.cart.map((item,index) => {
                      if (index === cartIndex) {
                        item.qty = item.qty + product.qty
                      }
                      return item
                    }) 
                    : this.state.cart.concat(product)

    this.setState(()=>({
      cart: newCart
    }))
  }
  handleRemoveFromCart(id){

    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id)
    }))
  }
  getCartCount() {
    let count = 0;
    if (this.state.cart.length>0) {
        this.state.cart.forEach((item) => {
            count = count + Number.parseInt(item.qty);
        });
    }
    return count;
}
  getCartTotal() {
    let total = 0;
    if (this.state.cart.length>0) {
      this.state.cart.forEach((item) => {
        total = total + Number.parseFloat(item.price*item.qty)
      })
    }
    return total.toFixed(2);
  }
  handleIncrementQty(id) {
    const newCart = this.state.cart.map((item)=> {
      if (item.id === id) {
        item.qty = (item.qty + 1)
      }
      return item
    })
    this.setState(() =>({
      cart: newCart
    }))
  }
  handleDecrementQty(id) {
    const newCart = this.state.cart.map((item)=> {
      if (item.id === id && item.qty>1) {
        item.qty = (item.qty - 1)
      }
      return item
    })
    this.setState(() =>({
      cart: newCart
    }))
  }

  render(){
    return (
      <div>
        <Router>
          <Nav cart={this.state.cart} cartCount={this.getCartCount()}/>
          <div className="container">
          <Switch>            
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Catalogue" render={
              () => <Catalogue 
                      products={this.state.products} 
                      cart={this.state.cart} 
                      handleAddToCart={this.handleAddToCart}
                      handleRemoveFromCart={this.handleRemoveFromCart}
                      cartCount={this.getCartCount()} 
                      cartTotal={this.getCartTotal()}
                      handleIncrementQty={this.handleIncrementQty}
                      handleDecrementQty={this.handleDecrementQty}
                      />} 
            />
            <Route exact path="/Checkout" render={
              () => <Checkout 
                      products={this.state.products} 
                      cart={this.state.cart} 
                      cartCount={this.getCartCount()} 
                      cartTotal={this.getCartTotal()}

                      />} 
            />
          </Switch>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
