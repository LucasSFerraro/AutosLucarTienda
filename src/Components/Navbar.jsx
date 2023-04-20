import { CartWidget } from "./CartWidget/CartWidget"

export const NavBar = () => {
    return (<header>
        <nav>
            <h3>
                Autos Lucar
            </h3>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                    <a href="#">Catalogo</a>
                    <a href="#">Informacion</a>
                </li>
            </ul>
        </nav>
        <CartWidget/>
        </header>)
}
