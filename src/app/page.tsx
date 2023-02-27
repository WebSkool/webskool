import Link from 'next/link'
import './styles.css'

export default function Home() {
    return (
        <main>
            <head>
                <nav>
                    <ul>
                        <li>
                            <Link href="/login">login</Link>
                        </li>
                    </ul>
                </nav>
            </head>
        </main>
    )
}
