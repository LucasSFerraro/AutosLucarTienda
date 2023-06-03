import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CartProvider } from "../src/Context/cartContext"
import "./App.css"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { NavBar } from "./Components/NavBar"
import { Cart } from "./Components/Cart/Cart"

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer greeting="Productos" />}
					/>
					<Route
						path="/category/:id"
						element={<ItemListContainer greeting="Productos" />}
					/>
					<Route
						path="/item/:id"
						element={<ItemDetailContainer />}
					/>
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	)
}

export default App