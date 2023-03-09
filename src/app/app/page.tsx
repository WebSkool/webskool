import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'
//import de public
import hgar from '../../../public/hogar(1).svg'
import horas from '../../../public/despertador.svg'
import User from '../../../public/usuario.svg'
import grupos from '../../../public/aplicaciones-anadir.svg'
import { redirect } from 'next/navigation'

export default async function App() {
    const headerList = cookies()
    if (!headerList.has('token')) return redirect('/login')
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
                    <li className="lista-menu">
                        <Link href="/app">
                            <div className="div-icon">
                                {
                                    <Image
                                        className="icono"
                                        src={grupos}
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        layout="responsive"
                                    />
                                }
                            </div>
                        </Link>
                    </li>
                    <li className="lista-menu" id="lagaut">
                        <Link href="/app">
                            <div className="div-icon">
                                {
                                    <Image
                                        className="icono"
                                        src={grupos}
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
                <span></span>
            </div>
        </div>
    )
}
