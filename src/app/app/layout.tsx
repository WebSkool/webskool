import ClassList from './ClassList'
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
        picture: {
            large: string
            medium: string
            thumbnail: string
        }
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
    const classes = (await getClasses(15)).map((p, i) => ({ icon: p.picture.large, id: i + '', name: i + '' }))
    return (
        <body>
            <ClassList classes={classes} />
            {children}
        </body>
    )
}
