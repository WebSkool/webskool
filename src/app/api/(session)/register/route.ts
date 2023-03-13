import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import supabase from '@/supabase'

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
    if (error?.message) {
        return new NextResponse(JSON.stringify({ error }), {
            status: 500,
            headers: { 'content-type': 'application/json' },
        })
    } else {
        const response = new NextResponse(JSON.stringify(data), {
            headers: { 'content-type': 'application/json' },
        })
        response.cookies.set('token', data?.session?.access_token ?? '', {
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            maxAge: data?.session?.expires_in,
        })
        response.cookies.set('refresh_token', data?.session?.refresh_token ?? '', {
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
        })
        return response
    }
}
