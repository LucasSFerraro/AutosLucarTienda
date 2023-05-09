import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import { CartWidget } from "./CartWidget/CartWidget"
import products from "../Data/products.json"

export const NavBar = () => {
	const [itemsMenu, setItemsMenu] = useState([])

	useEffect(() => {
		const productList = new Promise((resolve, reject) =>
			resolve(products)
		)
		productList.then(result => {
			const categories = result.map(item => item.category)
			const uniqueCategories = new Set(categories)
			setItemsMenu([...uniqueCategories].sort())
		})
	}, [])

	return (
		<Navbar className="navbar navbar-dark bg-dark">
			<Container>
				<Navbar.Brand href="#home">Autos Lucar</Navbar.Brand>
				<Nav className="navbar navbar-dark bg-dark">
					<NavLink to="/">HOME</NavLink>
					{itemsMenu?.map(item => (
						<NavLink key={item} to={`/category/${item}`}>
							{item.toUpperCase()}
						</NavLink>
					))}
				</Nav>
				<CartWidget />
			</Container>
		</Navbar>
	)
}
