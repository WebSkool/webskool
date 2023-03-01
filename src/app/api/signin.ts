import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

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
    const { data, error } = await supabase.auth.signInWithPassword({
        email: 'example@email.com',
        password: 'example-password',
    })
}
