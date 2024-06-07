//single product code
import {useContext} from 'react';
import { cartContext } from '../App';

export const Products = ({product}) => { //,cart,setCart
  
  const {cart,setCart} = useContext(cartContext);

  const addCart = ()=>{
  setCart([...cart,product]);
  }

  const removeCart = ()=>{
    setCart(cart.filter((c) => c.id !== product.id));
  }
  return (
    <div className="col">
    <div className="card">
      <img src={product.pimg} className="card-img-top py-3 px-5 border-bottom" alt={product.name}/>
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between mb-3">
            <span>{product.name}</span>
            <span>₹ {product.price}</span></h5>
              {cart.includes(product) ? 
              <button className='btn btn-sm btn-danger w-100' onClick={removeCart}>Remove from cart</button> :  <button className='btn btn-sm btn-dark w-100' onClick={addCart}>Add to cart</button>
              }
      </div>
    </div>
  </div>
  )
}