import Badge from "react-bootstrap/Badge"

import cart from "./Assets/Cart.png"

const styles = {
	span: {
		paddingLeft: 10,
	},
	img: {
		height: 30,
	},
}

export const CartWidget = () => {
	return (
		<Badge bg="secondary">
			<img src={cart} alt="Changuito" style={styles.img} />
			<span style={styles.span}>0</span>
		</Badge>
	)
}
