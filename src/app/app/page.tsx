import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'
import { headers } from 'next/headers'

//import de public
// iconos de la pagina del proyecto = https://www.iconfinder.com/search/icons?family=feather
import grupos from '../../../public/calendario0.1.png'
import horas from '../../../public/tareas.png'
import hgar from '../../../public/home_icon.png'
import User from '../../../public/cuenta.png'
import Sesion from '../../../public/apagado.png'
// import aburgesa from '../../../public/cerrar-sesion.png'


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
                                        alt='Picture of the author'
                                        width={50}
                                        height={50}
                                        layout='responsive'
                                    />
                                }
                                <span>inicio</span>
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
                                <span>inicio</span>
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
                                <span>inicio</span>
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
                                <span>inicio</span>
                            </div>
                        </Link>
                    </li>
                    <li className='lista-menu' id='lagaut'>
                        <Link href='/app'>
                            <div className='div-icon'>
                                {
                                    <Image
                                        className='icono'
                                        src={Sesion}
                                        alt='Picture of the author'
                                        width={50}
                                        height={50}
                                        layout='responsive'
                                    />
                                }
                                <span>inicio</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className='contenedor-gloval'>
                <span></span>
            </main>
            <aside className=''>

            </aside>
        </div>
    )
}
