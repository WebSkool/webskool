import Link from 'next/link'
import Image from 'next/image'
import './styles.css'
//import de public
import hgar from '../../../public/hogar(1).svg'
import horas from '../../../public/despertador.svg'
import User from '../../../public/usuario.svg'

export default async function App() {
    return (
        <div className="container">
            <nav className="menu-navegacion">
                <ul className="menu">
                    <li className="lista-menu">
                        <Link href="/app">
                            <div className="div-icon">
                                {
                                    <Image
                                        className="icono"
                                        src={hgar}
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        layout="responsive"
                                    />
                                }
                            </div>
                        </Link>
                    </li>
                    <li className="lista-menu">
                        <Link href="/app">
                            <div className="div-icon">
                                {
                                    <Image
                                        className="icono"
                                        src={horas}
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        layout="responsive"
                                    />
                                }
                            </div>
                        </Link>
                    </li>

                    <li className="lista-menu">
                        <Link href="/app">
                            <div className="div-icon">
                                {
                                    <Image
                                        className="icono"
                                        src={User}
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        layout="responsive"
                                    />
                                }
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="contenedor-gloval">
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate ipsa accusantium quod
                    animi nulla aliquam modi nostrum deleniti, at, sunt perspiciatis, voluptas suscipit dolore soluta
                    hic alias atque quisquam.
                </h1>
            </div>
        </div>
    )
}
