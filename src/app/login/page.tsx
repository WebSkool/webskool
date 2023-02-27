import './styles.css'
import Link from 'next/link'

export default function Login() {
    return (
        <main>
            <form action="/api/signin" method="post">
                <h1>Login</h1>
                <input type="email" name="email" placeholder="email@example.com" required />
                <input type="password" name="password" placeholder="***********" required />
                <input type="submit" value="Sig In" />
                <p>
                    {"Don't have an account yet? "}
                    <Link href="/register">Sign Up</Link>
                </p>
            </form>
        </main>
    )
}
