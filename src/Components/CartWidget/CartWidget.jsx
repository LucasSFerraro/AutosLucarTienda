import Cart from './Assets/Cart.png'

export const CartWidget = () => {
    return(
        <>
        <img src={Cart} alt='Imagen de un carrito'></img>
        <span>0</span>
        </>
    )
}