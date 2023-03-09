import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'
//import de public
import grupos from '../../../public/aplicaciones-anadir.svg'
import horas from '../../../public/despertador.svg'
import hgar from '../../../public/hogar(1).svg'
import User from '../../../public/usuario.svg'
import Sesion from '../../../public/esquema-del-boton-de-flecha-cuadrada-de-inicio-de-sesion.png'
import aburgesa from '../../../public/cerrar-sesion.png'

export default async function App() {
    const cookiesList = cookies()
    if (!cookiesList.has('token')) return redirect('/login')
    return (
        <div className='container'>
            {/* botondeaburges */}
            <div className='conteiner-buton'>
                <button className='botton-aburgesa'>
                    <Image
                        className='icono-aburgesa'
                        src={aburgesa}
                        alt='Picture of the author'
                        width={50}
                        height={50}
                        layout='responsive'
                    />
                </button>
            </div>
            <nav className='menu-navegacion'>
                <ul className='menu'>
                    <li className='lista-menu'>
                        <Link href='/app'>
                            <div className='div-icon'>
                                {
                                    <Image
                                        className='icono'
                                        src={hgar}
                                        alt='Picture of the author'
                                        width={50}
                                        height={50}
                                        layout='responsive'
                                    />
                                }
                            </div>
                        </Link>
                    </li>
                    <li className='lista-menu'>
                        <Link href='/app'>
                            <div className='div-icon'>
                                {
                                    <Image
                                        className='icono'
                                        src={horas}
                                        alt='Picture of the author'
                                        width={50}
                                        height={50}
                                        layout='responsive'
                                    />
                                }
                            </div>
                        </Link>
                    </li>

                    <li className='lista-menu'>
                        <Link href='/app'>
                            <div className='div-icon'>
                                {
                                    <Image
                                        className='icono'
                                        src={User}
                                        alt='Picture of the author'
                                        width={50}
                                        height={50}
                                        layout='responsive'
                                    />
                                }
                            </div>
                        </Link>
                    </li>
                    <li className='lista-menu'>
                        <Link href='/app'>
                            <div className='div-icon'>
                                {
                                    <Image
                                        className='icono'
                                        src={grupos}
                                        alt='Picture of the author'
                                        width={50}
                                        height={50}
                                        layout='responsive'
                                    />
                                }
                            </div>
                        </Link>
                    </li>
                    <li className='lista-menu' id='lagaut'>
                        <Link href='/app'>
                            <div className='div-icon'>
                                {
                                    <Image
                                        className='icono'
                                        src={grupos}
                                        alt='Picture of the author'
                                        width={50}
                                        height={50}
                                        layout='responsive'
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
