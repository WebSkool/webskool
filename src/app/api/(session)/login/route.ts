import { type NextRequest } from 'next/server'
import supabase from '@/supabase'

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json()

        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error?.message)
            return new Response(JSON.stringify({ error }), {
                headers: { 'content-type': 'application/json' },
            })
        else {
            const response = new Response(JSON.stringify(data), {
                headers: { 'content-type': 'application/json' },
            })
            response.headers.set(
                'Set-Cookie',
                `token=${data?.session?.access_token}; Path=/; HttpOnly; SameSite=Lax; Secure`,
            )
            return response
        }
    } catch (error) {
        return new Response('error: ' + (error as Error).toString())
    }
}
