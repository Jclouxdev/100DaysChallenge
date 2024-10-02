// v1
//  - Temps de dev : 1d

import { useState } from 'react'
import tShirt1 from '../../assets/002/shirt-1.webp'
import tShirt2 from '../../assets/002/shirt-2.webp'

type Product = {
    name: string,
    size: string,
    price: number,
}
type ProductInCart = {
    name: string,
    size: string,
    price: number,
    quantity: number,
}

const AddToCart = () => {
    const [sizeSelector, setSizeSelector] = useState("");
    const [shoppingCartProduct, setShoppingCartProduct] = useState<ProductInCart[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const addProductToCart = (product:Product) => {
        if (sizeSelector == "") return

        const filtered = shoppingCartProduct.filter((cartProduct) => product.name == cartProduct.name && product.size == cartProduct.size )
        
        const productInCart:ProductInCart = {
            name: product.name,
            size: product.size,
            price: product.price,
            quantity: 1
        }

        if(filtered.length == 0) {
            setShoppingCartProduct(shoppingCartProduct.concat(productInCart))
        } else {
            const filtered = shoppingCartProduct.filter((cartProduct) => product.name == cartProduct.name && product.size == cartProduct.size )
            const reverseFiltered = shoppingCartProduct.filter((cartProduct) => !(product.name == cartProduct.name && product.size == cartProduct.size))
            filtered[0].quantity++
            setShoppingCartProduct(reverseFiltered.concat(filtered))
        }
    }

    const removeOneFromCart = (product:Product) => {
        const filtered = shoppingCartProduct.filter((cartProduct) => product.name == cartProduct.name && product.size == cartProduct.size )
        const reverseFiltered = shoppingCartProduct.filter((cartProduct) => !(product.name == cartProduct.name && product.size == cartProduct.size))

        if(filtered[0].quantity > 1) {
            filtered[0].quantity--
            setShoppingCartProduct(reverseFiltered.concat(filtered))
        } else {
            setShoppingCartProduct(reverseFiltered)
        }

    }

    const getCartValue = () => {
        const prices = shoppingCartProduct.map((cartProduct) => cartProduct.quantity * cartProduct.price)
        const totalPrice = prices.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
        return `${totalPrice}`;
    }

    return (
        <div className="bg-[#ffffff] w-full h-full flex items-center justify-center">
            <div className="flex flex-row gap-8 h-[500px]">
                <div className='flex flex-col gap-4 slider max-w-[64px]'>
                    <img src={tShirt1} alt="" className='rounded-md border-2 border-blue-400' />
                    <img src={tShirt2} alt="" className='rounded-md' />
                </div>
                <div className='image-container max-w-[400px] h-full overflow-hidden rounded-md'>
                    <img src={tShirt1} alt="T-shirt un." className='scale-[150%] translate-y-[40px]' />
                </div>
                <div className="details flex flex-col justify-evenly p-4 max-w-[420px]">
                    <div key='shopping-cart' className='grid grid-cols-2 w-full'>
                        <h3 className='uppercase text-sm text-[#455777] font-bold'>Polo Ralph</h3>
                        <div className='place-self-end relative'>
                            <button
                                className='relative hover:-rotate-6 transition-all'
                                onClick={() => {
                                    setModalIsOpen(true)
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 text-[#455777] justify-self-start"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                {shoppingCartProduct.length > 0 && (
                                    <p className='bg-blue-200 text-blue-600 font-medium rounded-full text-xs absolute right-[-5px] top-1/2 w-[18px] h-[18px]'>{shoppingCartProduct.length}</p>
                                )}
                            </button>
                            {modalIsOpen && (
                                <div className='absolute w-[400px] translate-x-[-50%] left-1/2 mt-2 bg-white shadow-xl border-[1px] p-4 rounded-md'>
                                    <div className="grid grid-cols-2">
                                        <h5 className='font-medium'>Shopping cart</h5>
                                        <button
                                            className='place-self-end'
                                            onClick={() => { setModalIsOpen(false) }}
                                        >Close</button>
                                    </div>
                                    <hr className='my-4' />
                                    {shoppingCartProduct.length > 0
                                        ? shoppingCartProduct.map((product) => {
                                            return (
                                                <div key={product.name + product.size} className='cart-content flex flex-row gap-4 mb-2'>
                                                    <div className='w-2/3 text-sm'>
                                                        <p>{product.name}</p>
                                                        <p className='text-xs text-gray-400'>Size: {product.size}</p>
                                                    </div>
                                                    <div className="quantity w-1/3 flex flex-row h-min justify-end">
                                                        <button 
                                                            className='border-[1px] rounded-l-md px-[10px] text-sm'
                                                            onClick={() => {
                                                                removeOneFromCart(product)
                                                            }}
                                                        >-</button>
                                                        <input 
                                                            type="string" 
                                                            name="quantity" 
                                                            id="quantity" 
                                                            value={product.quantity}
                                                            className='w-10 text-center border-[1px] border-gray-200 text-sm'
                                                            disabled
                                                        />
                                                        <button 
                                                            className='bg-[#455777] text-white rounded-r-md px-[8px] text-sm'
                                                            onClick={() => {
                                                                addProductToCart(product)
                                                            }}
                                                        >+</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : <p className='text-gray-400'>Your cart is empty</p>
                                    }
                                    {shoppingCartProduct.length > 0 && (
                                        <>
                                        <hr className='my-4'/>
                                        <div className='grid grid-cols-2'>
                                            <p className='font-medium'>Current cart value:</p>
                                            <p className='place-self-end font-bold'>{getCartValue()}€</p>
                                        </div>
                                        <button className='bg-[#455777] px-4 py-2 rounded-md text-white text-sm uppercase mt-6 m-auto'>Proceed to paiment</button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <h1 className='font-bold text-4xl my-4'>Custom Fit Polo Bear Oxford Shirt</h1>
                    <p className='text-sm text-gray-500'>Blue polo with a classic cut. Made of smooth and soft cotton.</p>
                    <div className="price my-6">
                        <div className="price__currentPrice flex flex-row items-center gap-4">
                            <h2 className='font-bold text-3xl'>99.00€</h2>
                            <label htmlFor="price" className="bg-blue-200 text-blue-600 px-2 rounded-sm font-medium text-sm">-25%</label>
                        </div>
                        <div className="price__oldPrice">
                            <p className='text-gray-400 line-through text-sm'>132.00€</p>
                        </div>
                    </div>
                    <div className="size w-full">
                        <h4 className='uppercase font-medium mb-2'>Choose size</h4>
                        <div className="size__sizeSelector w-full flex flex-row gap-4">
                            <button
                                className={sizeSelector == 'S' ? 'bg-black text-white px-3 py-1 border-2 border-black' : 'border-2 border-white hover:border-2 hover:border-gray-200 px-3 py-1'}
                                onClick={() => {
                                    setSizeSelector("S")
                                }}
                            >S</button>
                            <button
                                className={sizeSelector == 'M' ? 'bg-black text-white px-3 py-1 border-2 border-black' : 'border-2 border-white hover:border-2 hover:border-gray-200 px-3 py-1 disabled:text-gray-200 disabled:hover:border-white'}
                                aria-label='Out of stock'
                                disabled
                                onClick={() => {
                                    setSizeSelector("M")
                                }}
                            >M</button>
                            <button
                                className={sizeSelector == 'L' ? 'bg-black text-white px-3 py-1 border-2 border-black' : 'border-2 border-white hover:border-2 hover:border-gray-200 px-3 py-1'}
                                onClick={() => {
                                    setSizeSelector("L")
                                }}
                            >L</button>
                            <button
                                className={sizeSelector == 'XL' ? 'bg-black text-white px-3 py-1 border-2 border-black' : 'border-2 border-white hover:border-2 hover:border-gray-200 px-3 py-1'}
                                onClick={() => {
                                    setSizeSelector("XL")
                                }}
                            >XL</button>
                            <button
                                className={sizeSelector == 'XXL' ? 'bg-black text-white px-3 py-1 border-2 border-black' : 'border-2 border-white hover:border-2 hover:border-gray-200 px-3 py-1'}
                                onClick={() => {
                                    setSizeSelector("XXL")
                                }}
                            >XXL</button>
                        </div>
                    </div>
                    <button
                        className="bg-[#455777] px-4 py-2 rounded-md text-white w-full uppercase mt-8"
                        onClick={() => {
                            const product: Product = {
                                name: 'Custom Fit Polo Bear Oxford Shirt',
                                size: sizeSelector,
                                price: 99.00
                            }
                            addProductToCart(product)
                        }}
                    >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default AddToCart;