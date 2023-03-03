'use client'
import './styles.css'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { redirect } from 'next/navigation'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

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
            .then((data) => {
                if (data.error) {
                    if (data.error.message === 'User already registered') setError('User already registered')
                    else {
                        setError('An error occurred')
                        console.error(data.error)
                    }
                } else {
                    redirect('/app')
                }
                setLoading(false)
            })
            .catch((e) => {
                console.error(e)
                setError('An error occurred')
                setLoading(false)
            })
    }

    return (
        <main>
            <form onSubmit={onSubmit}>
                <h1>Login</h1>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        required
                    />
                    <label htmlFor="email" className={email ? 'inputUsed' : ''}>
                        email
                    </label>
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        required
                    />
                    <label htmlFor="password" className={password ? 'inputUsed' : ''}>
                        password
                    </label>
                </div>
                <input type="submit" value="Sig In" className={loading ? 'inactive' : ''} disabled={loading} />
                {error && <p className="error">{error}</p>}
                <p>
                    {"Don't have an account yet? "}
                    <Link href="/register">Sign Up</Link>
                </p>
            </form>
        </main>
    )
}
