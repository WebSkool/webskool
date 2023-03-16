import Link from 'next/link'
import Image from 'next/image'
import JoinOrCreateClass from './JoinOrCreateClass'
import './ClassList.css'

export default function ClassList({ classes }: { classes: { icon: string; id: string; name: string }[] }) {
    return (
        <>
            <header>
                <JoinOrCreateClass />
                {classes.map((pfp, i) => (
                    <Link key={i} href={'/app/class/' + pfp.id} className='classListicon'>
                        <Image src={pfp.icon} alt={`Class ${pfp.name}`} width={50} height={50} layout='responsive' />
                    </Link>
                ))}
            </header>
        </>
    )
}
