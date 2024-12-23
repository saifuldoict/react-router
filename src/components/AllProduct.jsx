import React from 'react'
import { Link } from 'react-router-dom';

const AllProduct = ({product}) => {
  const {body, title}=product;
  return (
    <div className='border border-red-500'>
      <h2 className='font-bold'>Title:  {title}</h2>
      <p>Body:    {body}</p>
      
      <Link to={`/products/${product.id}`}>
               <button className="bg-red-600 my-5 px-4">More Info...</button>
        </Link>
    </div>
  )
}

export default AllProduct