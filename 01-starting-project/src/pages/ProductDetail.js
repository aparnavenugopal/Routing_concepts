import React from 'react'
import { useParams, Link } from 'react-router-dom';

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <div>
        <h1>product details</h1>
        <p>{params.productId}</p>
        <Link to=".." >Back</Link>
    </div>
  )
}

export default ProductDetailPage;