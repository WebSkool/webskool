'use client'
import { useRouter } from 'next/navigation'
import { useState, FormEvent } from 'react'
import Link from 'next/link'
import './styles.css'
import { useCookies } from 'react-cookie'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setRepeat] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [cookies, setCookie] = useCookies(['token'])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setLoading(true)
        setError('')
        e.preventDefault()
        if (password !== repeat) {
            setError('Passwords do not match')
            setLoading(false)
            return
        }
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    if (data.error.message === 'User already registered') setError('User already registered')
                    else {
                        setError('An error occurred')
                        console.error(data.error)
                    }
                    setLoading(false)
                } else {
                    setCookie('token', data.token, {
                        httpOnly: true,
                        sameSite: 'lax',
                        secure: true,
                        maxAge: data?.session?.expires_in,
                    })
                    router.replace('/app')
                }
            })
            .catch(e => {
                console.error(e)
                setError('An error occurred!!tec')
                setLoading(false)
            })
    }

    return (
        <main>
            <form action='/api/signup' onSubmit={handleSubmit} method='post'>
                <h1>Register</h1>
                <div>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor='email' className={email ? 'inputUsed' : ''}>
                        email
                    </label>
                </div>
                <div>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor='password' className={password ? 'inputUsed' : ''}>
                        password
                    </label>
                </div>
                <div>
                    <input
                        id='repeat'
                        type='password'
                        name='repeat'
                        value={repeat}
                        onChange={e => setRepeat(e.target.value)}
                        required
                    />
                    <label htmlFor='repeat' className={repeat ? 'inputUsed' : ''}>
                        repeat password
                    </label>
                </div>
                <input type='submit' value='Sign Up' className={loading ? 'inactive' : ''} disabled={loading} />
                {error && <p className='error'>{error}</p>}
                <p>
                    {'Already have an account? '}
                    <Link href='/login'>Sign In</Link>
                </p>
            </form>
        </main>
    )
}
