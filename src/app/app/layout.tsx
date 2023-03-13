import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
import grupos from '../../../public/aplicaciones-anadir.svg'

interface RandomApi {
    results: {
        gender: string
        name: {
            title: string
            first: string
            last: string
        }
        location: any
        email: any
        login: any
        dob: any
        registered: any
        phone: any
        cell: any
        id: any
        picture: any
        nat: any
    }[]
    info: {
        seed: string
        results: number
        page: number
        version: string
    }
}

const getClasses = async (limit = 5) => {
    const pfps = (await fetch('https://randomuser.me/api/?results=' + limit).then(response =>
        response.json(),
    )) as RandomApi
    return pfps.results
}

export default async function AppLayout({ children }: { children: React.ReactNode }) {
    const pfps = await getClasses(30)

    return (
        <body>
            <header>
                <Link href='/app/new/class/'>
                    <Image
                        className='icon-list'
                        src={grupos}
                        alt='Create Class'
                        width={50}
                        height={50}
                        layout='responsive'
                    />
                </Link>
                {pfps.map((pfp: any, i) => (
                    <Link key={i} href={'/app/class/' + i}>
                        <Image
                            className='icon-list'
                            src={pfp.picture.thumbnail}
                            alt='Picture of the author'
                            width={50}
                            height={50}
                            layout='responsive'
                        />
                    </Link>
                ))}
            </header>
            {children}
        </body>
    )
}
