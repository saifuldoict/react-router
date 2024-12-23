import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AllProduct from './AllProduct';

const Products = () => {
    const products = useLoaderData();
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {products.map(product => <AllProduct
        key={product.id}
        product={product}
        ></AllProduct>)}
    </div>
  )
}

export default Products