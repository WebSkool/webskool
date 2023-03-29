import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import './page.css'

import Menu from './Menu'

export default async function App() {
    const cookiesList = cookies()
    if (!cookiesList.has('token')) return redirect('/login')

    return (
        <>
            <div className='main'>
                <Menu />
                <main>
                    <span></span>
                </main>
                <aside></aside>
            </div>
        </>
    )
}
