'use client'
import { useState , useEffect, useContext } from 'react'
import './styles.css'
import { Context } from '../context/Context'
import Link from 'next/link'
import { MAX_ITEMS_IN_CART } from '../constants'
import InfoIcon from '@mui/icons-material/Info';

export default function CartPage() {


  const [ total , setTotal ] = useState(0)
  const [ envio, setEnvio ] = useState(0)

  const {cartItems, addItemToCart, incrementQuantity, decrementQuantity, removeItemFromCart, calculateTotalItems} = useContext(Context)
  

  function calcTotal() {
    let sbt = 0
    let e = 0
    cartItems.forEach((item:any) => {
      sbt = sbt + (item.product.priceList[0].price * item.quantity)}
    )
    // console.log(cartItems.length)
    if (cartItems.length == 0) {
      setEnvio(0)
    }
    else {
      setEnvio(1200)
    }
    setTotal(sbt)
  }

  useEffect(() => {
    calcTotal()
  }, [cartItems])
  

  function decrementQuant(productId:number, quantity:number) {
    if (quantity === 1) {
      removeItemFromCart(productId)
    }
    else {
      decrementQuantity(productId)
    }
    calcTotal()
  }


  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ]


  return (
    <div className='cart-main-container'>
      <h1>Shopping Cart</h1>
      <div className='max-products-alert'>
          {calculateTotalItems() >= MAX_ITEMS_IN_CART &&  <h2 className=' text-blue-700'><InfoIcon/>Has alcanzado el máximo de productos en el carrito</h2>}
        </div>
      <div className='cart-container'>
        <div className='items-container'>
          { cartItems.length === 0 ? <h2>No hay productos en el carrito</h2> :
            cartItems.map((item:any, index:number) => {
              return (
                <div key={index} className='cart-item' data-aos="fade-down">
                  <img src={item.product.imgUrl} alt="" />
                  <div className='cart-item-detail'>
                    <h3 className='item-name'>{item.product.name}</h3>
                    <h3 className='item-description'>{item.product.description}</h3>
                    <h3 className='item-price'>${(item.product.priceList[0].price * item.quantity)}</h3>
                  </div>
                  <div className='quantity-container'>
                    <button onClick={()=> decrementQuant(item.product.productId,item.quantity)}>-</button>
                    <h3>{item.quantity}</h3>
                    <button disabled={calculateTotalItems() >= MAX_ITEMS_IN_CART} onClick={()=> incrementQuantity(item.product.productId)}>+</button>
                  </div>
                  <button className='remove-btn' onClick={()=> removeItemFromCart(item.product.productId)}>X</button>
                </div>
              )
            })
          }
        </div>
        <div className='total-container'>
          <h1>Resumen de tu compra</h1>
          <div className='order-summary-container'>
            <div className='order-detail-container'>
                <div className='order-detail'>
                  <h4 className='order-label'>Subtotal</h4>
                  <h4>${total}</h4>
                </div>
                <hr />
            </div>
            <div className='order-detail-container'>
                <div className='order-detail'>
                  <h4 className='order-label'>Envio</h4>
                  <h4>${envio}</h4>
                </div>
                <hr />
            </div>
            <div className='order-detail-container'>
              <div className='order-detail'>
                <h4 className='order-label'>Total</h4>
                <h4>${total + envio}</h4>
              </div>
            </div>
          </div>
          <button><Link href={"/pago-envio"}> Comprar </Link></button>
        </div>
      </div>
    </div>
  )
}
