import Link from 'next/link'
import Image from 'next/image'
import JoinOrCreateClass from '../../components/JoinOrCreateClass'

export default function ClassList({ classes }: { classes: { icon: string; id: string; name: string }[] }) {
    return (
        <>
            <header>
                <JoinOrCreateClass />
                {classes.map((pfp, i) => (
                    <Link key={i} href={'/app/class/' + pfp.id}>
                        <Image src={pfp.icon} alt={`Class ${pfp.name}`} width={50} height={50} layout='responsive' />
                    </Link>
                ))}
            </header>
            <style jsx>{`
                /* estilos de la lista de contactos */
                header {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: aqua;
                    padding: 10px;
                    overflow: hidden;
                    gap: 10px;
                }

                /* estilos de cada contacto */
                /* a {
                    height: 64px;
                    width: 64px;
                    border-radius: 50%;
                    overflow: hidden;
                } */
            `}</style>
        </>
    )
}
