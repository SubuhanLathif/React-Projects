import React, { useState } from 'react';
import data from '../assets/products.json';
import { Products } from './Products';
import { Tabs, Tab } from "react-bootstrap";
export const Home = () => {   //{cart,setCart}
    const [allProducts] = useState(data);
    return (
        <>
    <Tabs className="mb-4">
      <Tab eventKey="hotdrinks" title="Hot Drinks" className='hot-drink-tab'>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            {allProducts.filter(product => product.ftype === 'Hot Drinks').map((product) => (
            <Products key={product.id} product={product} />
            ))}
            </div>
      </Tab>
      <Tab eventKey="profile" title="Cool Drinks">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            {allProducts.filter(product => product.ftype === 'Cool Drinks').map((product) => (
            <Products key={product.id} product={product} />
            ))}
            </div>
      </Tab>
    </Tabs>
    </>
    )
}           
