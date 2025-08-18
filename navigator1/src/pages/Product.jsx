import React from 'react'
import { Link } from 'react-router'
const Product = () => {
  return (
    <>
      <p className='text-center fs-4 mt-5'>This is Product page </p>
      <Link className='checkoutBTN bg-secondary text-white p-3 text-uppercase text-decoration-none' to='/checkout' state={{ productId: 2030, name: 'TV', price: 13000 }}>go to checkout</Link>
    </>
  )
}

export default Product