import React from 'react'

const AllProduct = ({product}) => {
  const {body, title}=product;
  return (
    <div>
      <h2 className='font-bold'>Title:  {title}</h2>
      <p>Body:    {body}</p>
      <hr/>
    </div>
  )
}

export default AllProduct