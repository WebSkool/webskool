import Link from 'next/link'
import Image from 'next/image'
import './styles.css'

export default async function App() {
    return (
        <main>
            <nav>
                <ul>
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
            <section>a</section>
        </main>
    )
}
