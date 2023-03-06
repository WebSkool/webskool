import Link from 'next/link'
import Image from 'next/image'
import './globals.css'

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
    const pfps = (await fetch('https://randomuser.me/api/?results=' + limit).then((response) =>
        response.json(),
    )) as RandomApi
    return pfps.results
}

export default async function AppLayout({ children }: { children: React.ReactNode }) {
    const pfps = await getClasses(30)

    return (
        <body>
            {/* <header>/
                    <ul className="classList">
                        {pfps.map((pfp: any, i) => (
                            <li
                                className="classicon"
                                key={i}
                            >
                                <Link href={'/app/class/' + i}>
                                    <div className="classpfp">
                                        <Image
                                            src={pfp.picture.thumbnail}
                                            alt="Picture of the author"
                                            width={50}
                                            height={50}
                                            layout="responsive"
                                        />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </header> */}
            {children}
            <div className="burbujas">
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
                <div className="burbuja"></div>
            </div>
        </body>
    )
}
