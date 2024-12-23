import React from 'react'
import { useLoaderData } from 'react-router-dom';

const MoreInfo = () => {
    const moreInfo= useLoaderData();
    const {Title, Body}=moreInfo;
  return (
    <div>
        <h2>{Title}</h2>
        <p>{Body}</p>
    </div>
  )
}

export default MoreInfo