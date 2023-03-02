import Link from 'next/link'
import Image from 'next/image'
import './styles.css'

export default async function App() {
    return (
        <main>
            <nav className="menu-navegacion">
                <ul className="menu">
                    <li>
                        <Link href="/app">
                            {/* <Image
                                src={pfp.picture.thumbnail}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                                layout="responsive"
                            /> */}
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/app">
                            {/* <Image
                                src={pfp.picture.thumbnail}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                                layout="responsive"
                            /> */}
                            Inicio
                        </Link>
                    </li>
                </ul>
            </nav>
            <section></section>
        </main>
    )
}
