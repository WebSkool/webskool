import Link from 'next/link'
import './styles.css'

export default function Home() {
    return (
        <main>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/login">login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </main>
    )
}
