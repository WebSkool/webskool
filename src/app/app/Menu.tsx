import Link from 'next/link'
import Image from 'next/image'

import grupos from '../../../public/calendario0.1.png'
import horas from '../../../public/tareas.png'
import hgar from '../../../public/home_icon.png'
import User from '../../../public/cuenta.png'
import Sesion from '../../../public/apagado.png'

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
            <style jsx>{`
                nav {
                    /* menu de navegacion */
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    background-color: #252424;
                    padding: 10px;
                    color: #fff;
                }

                ul {
                    /* menu de navegacion */
                    list-style: none;
                    padding: 20px;
                    padding-bottom: 20px;
                    background-color: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(5px);
                    border-radius: 30px;
                }

                li {
                    /* lista de menu */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30%;
                    font-size: 20px;
                    padding: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 30px;
                    border-radius: 50px;
                }

                a {
                    text-decoration: none;
                    color: #000000;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 10px;
                }

                span {
                    font-size: 20px;
                }
            `}</style>
        </>
    )
}
