import Badge from 'react-bootstrap/Badge';

import Cart from './Assets/Cart.png'

const styles ={
    img:{
        height: 40
    }
,
    span: {
    paddingLeft: 5,
}
}

export const CartWidget = () => {
    return(
        <Badge bg="light" text='dark'>
        <img src={Cart} alt='Imagen de un carrito' style={styles.img}></img>
        <span style={styles.paddingLeft}>0</span>
        </Badge>
    )
}