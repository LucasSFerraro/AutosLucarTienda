import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer.jsx"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { NavBar } from "./Components/NavBar.jsx"

function App() {
	const onAdd = stock => console.log("Stock:  " + stock)

	return (
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
					element={<ItemDetailContainer onAdd={onAdd} />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
