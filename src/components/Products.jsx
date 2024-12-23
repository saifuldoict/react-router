import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AllProduct from './AllProduct';

const Products = () => {
    const products = useLoaderData();
    console.log(products)
  return (
    <div>
        {products.map(product => <AllProduct
        key={product.id}
        product={product}
        ></AllProduct>)}
    </div>
  )
}

export default Products