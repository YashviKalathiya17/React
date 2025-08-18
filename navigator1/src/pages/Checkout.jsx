import { useLocation } from "react-router"
const Checkout = () => {
  const location = useLocation()
  console.log(location);

  const {productId ,name,price} = location.state || {}
  return (
    <>
    <p className="text-center mt-5 fs-5">This is Checkout page</p>
    {
        productId ? (
          <>
            <p>Product Id : {productId}</p>
            <p>Product Name : {name}</p>
            <p>Price : {price}</p>
          </>
        ):(
          <p>Product List is Empty !!</p>
        )
      }
    </>
  )
}

export default Checkout