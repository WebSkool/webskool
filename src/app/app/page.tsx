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
import { headers } from 'next/headers'

export default async function App() {
    const cookiesList = cookies()
    const headersList = headers()
    if (!cookiesList.has('token')) return redirect('/login')
    console.log('mobile? ', headersList.get('user-agent')?.includes('Mobile'))

    return (
        <div className='container'>
            <nav className='menu-navegacion'>
                <ul className='menu'>
                    <li className='lista-menu'>
                        <Link href='/app'>
                            <div className='div-icon'>
                                {
                                    <Image
                                        className='icono'
                                        src={hgar}
                                        alt='app'
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
                                        alt='tareas'
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
                                        alt='usuario'
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
                                        alt='calendario'
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
                                        alt='cerrar'
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
            <main>
                <span></span>
            </main>
            <aside className=''></aside>
        </div>
    )
}
