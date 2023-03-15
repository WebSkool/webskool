import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import Menu from './Menu'

export default async function App() {
    const cookiesList = cookies()
    if (!cookiesList.has('token')) return redirect('/login')

    return (
        <>
            <div>
                <Menu />
                <main>
                    <span></span>
                </main>
                <aside></aside>
            </div>
            <style jsx>{`
                div {
                    display: grid;
                    grid-template-columns: 1fr 2fr 1fr;
                    width: 100%;
                }
            `}</style>
        </>
    )
}
