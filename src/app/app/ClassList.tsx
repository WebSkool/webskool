import grupos from '../../../public/aplicaciones-anadir.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function ClassList({ classes }: { classes: { icon: string; id: string; name: string }[] }) {
    return (
        <header>
            <Link href='/app/new/class/'>
                <Image src={grupos} alt='Create Class' width={50} height={50} layout='responsive' />
            </Link>
            {classes.map((pfp, i) => (
                <Link key={i} href={'/app/class/' + pfp.id}>
                    <Image src={pfp.icon} alt={`Class ${pfp.name}`} width={50} height={50} layout='responsive' />
                </Link>
            ))}
        </header>
    )
}
