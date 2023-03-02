import Link from 'next/link'
import Image from 'next/image'
import './styles.css'

import hgar from '../../../public/hogar(1).svg'

export default async function App() {
    return (
        <main>
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
                            <Image
                                className="icono"
                                src={hgar}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                                layout="responsive"
                            />
                        </Link>
                    </li>

                    <li className="lista-menu">
                        <div className="div-icon">
                            <Link href="/app">
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
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
            <section></section>
        </main>
    )
}
