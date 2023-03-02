import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false,
        },
    },
)

export async function POST(request: NextRequest) {
    let body: { email: string; password: string }
    try {
        body = await request.json()
    } catch (error) {
        return new Response(JSON.stringify({ error: { message: "'content-type': 'application/json' is required" } }), {
            headers: { 'content-type': 'application/json' },
            status: 500,
        })
    }
    const { email, password } = body

    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error?.message)
        return new Response(JSON.stringify({ error }), {
            headers: { 'content-type': 'application/json' },
            status: 500,
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
}
