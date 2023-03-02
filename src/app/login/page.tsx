'use client'
import './styles.css'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submit', { email, password })
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((r) => r.json())
            .then(console.log)
            .catch(console.error)
    }

    return (
        <main>
            <form onSubmit={onSubmit}>
                <h1>Login</h1>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="email@example.com"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="***********"
                    required
                />
                <input type="submit" value="Sig In" />
                <p>
                    {"Don't have an account yet? "}
                    <Link href="/register">Sign Up</Link>
                </p>
            </form>
        </main>
    )
}
