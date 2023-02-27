import Link from 'next/link'
import './styles.css'

export default function Login() {
    return (
        <main>
            <form action="/api/signup" method="post">
                <h1>Register</h1>
                <input type="email" name="email" placeholder="email@example.com" required />
                <input type="password" name="password" placeholder="***********" required />
                <input type="password" name="repeat" placeholder="***********" required />
                <input type="submit" value="Sig In" />
                <p>
                    {'Already have an account? '}
                    <Link href="/login">Sign In</Link>
                </p>
            </form>
        </main>
    )
}
