'use client'
import Link from 'next/link'
import { useState } from 'react'
import './styles.css'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setRepeat] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== repeat) {
            alert('Passwords do not match')
            return
        }
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    alert(data.error)
                } else {
                    alert('Success')
                }
            })
            .catch(console.error)
    }

    return (
        <main>
            <form action="/api/signup" onSubmit={handleSubmit} method="post">
                <h1>Register</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="***********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="repeat"
                    placeholder="***********"
                    value={repeat}
                    onChange={(e) => setRepeat(e.target.value)}
                    required
                />
                <input type="submit" value="Sign Up" />
                <p>
                    {'Already have an account? '}
                    <Link href="/login">Sign In</Link>
                </p>
            </form>
        </main>
    )
}
