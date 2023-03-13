import { NextRequest } from 'next/server'
import supabase from '@/supabase'

export default async function newClass(request: NextRequest) {
    const body = (await request.json()) as {
        subject: string
        name: string
        description?: string
        icon?: string
    }
    const { subject, name, description, icon } = body
    if (!subject || !name) {
        return new Response('Missing required fields', { status: 400 })
    }
    await supabase.auth.setSession({
        access_token: request.cookies.get('token')?.value ?? '',
        refresh_token: request.cookies.get('refresh_token')?.value ?? '',
    })
    const u = await supabase.auth.getUser()
}
