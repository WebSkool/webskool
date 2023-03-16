import Link from 'next/link'
import Image from 'next/image'

import grupos from '../../../public/calendario0.1.png'
import horas from '../../../public/tareas.png'
import hgar from '../../../public/home_icon.png'
import User from '../../../public/cuenta.png'
import Sesion from '../../../public/apagado.png'

import './Menu.css'

// iconos de la pagina del proyecto = https://www.iconfinder.com/search/icons?family=feather

export default function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href='/app'>
                            <Image src={hgar} alt='app' width={50} height={50} layout='responsive' />
                            <span>inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/app/tasks'>
                            <Image src={horas} alt='tareas' width={50} height={50} layout='responsive' />
                            <span>inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/app/user'>
                            <Image src={User} alt='usuario' width={50} height={50} layout='responsive' />
                            <span>inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/app/calendar'>
                            <Image src={grupos} alt='calendario' width={50} height={50} layout='responsive' />
                            <span>inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/api/logout'>
                            <Image src={Sesion} alt='cerrar sesion' width={50} height={50} layout='responsive' />
                            <span>inicio</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
