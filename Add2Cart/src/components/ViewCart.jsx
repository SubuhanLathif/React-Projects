import React, { useEffect, useState,useContext } from 'react';
import { cartContext } from '../App';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export const ViewCart = () => { //cart,setCart

  const {cart,setCart} = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + (parseInt(curr.price) * (curr.quantity || 1)), 0)
    );
  }, [cart]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedQuantity = ((cart[index].quantity || 0) + 1);
    handleQuantityChange(index, updatedQuantity);
  };

  const decreaseQuantity = (index) => {
    const updatedQuantity = Math.max((cart[index].quantity || 0) - 1, 0);
    handleQuantityChange(index, updatedQuantity);
  };

  const removeProduct = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  const checkOut = (total) =>{
    if(total >=100){
      toast.success("Order Successfully. Thank You...", {
        onClose: () => {
          navigate("/"); //navigate to home page
          window.location.reload();
        },
      });
    }
    else {
      toast.warning("Minimun Order Value 100rs. And Get a Free Delivery...")
    }
  }

 
  return (
    <>
      { cart.length === 0 ? (
         <div>
        <img src="src/assets/ProductImages/Empty cart img.svg" className='w-25 d-flex m-auto' alt="emptycart" />
        <h5 className='fw-bold text-center'>Your Cart is Empty !!!</h5>
        </div>
      ) : (
        <>
        <ToastContainer />
      <table className="table table-hover m-0 border">
        <thead>
          <tr>
            <th scope="col" className='fw-bold'>S.No</th>
            <th scope="col" className='fw-bold'>Product Image</th>
            <th scope="col" className='fw-bold'>Product Name</th>
            <th scope="col" className='fw-bold'>Product Qty</th>
            <th scope="col" className='fw-bold'>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={product.id}>
              <th scope="row">{index + 1}</th>
              <td><img src={product.pimg} alt={product.name} className="product-img" /></td>
              <td>{product.name}</td>
              <td>
                <div className='d-flex'>
                  <button className='btn btn-sm btn-danger' onClick={() => decreaseQuantity(index)}><i    className="bi bi-dash-lg"></i></button>
                  <input type="text" className='qty-input mx-1 form-control' value={product.quantity || 1} readOnly />
                  <button className='btn btn-sm btn-success' onClick={() => increaseQuantity(index)}><i className="bi bi-plus-lg"></i></button>
                </div>
              </td>
              <td>{parseInt(product.price) * (product.quantity || 1)} rs 
                <button className='btn btn-sm btn-danger float-end' title='Remove' onClick={() => removeProduct(index)}><i className="bi bi-trash-fill fs-5"></i></button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className='fw-bold text-end fs-5 bg-ass'>Total Amount </td>
            <td className='fw-bold fs-5 bg-ass'> {total} rs
            <button className='btn btn-sm btn-checkout float-end' onClick={() => checkOut(total)}>Checkout</button>
            </td>
          </tr>
        </tbody>
      </table>
      </>
      )}
    </>
  );
};
