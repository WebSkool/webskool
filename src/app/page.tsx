import Link from 'next/link'
import './styles.css'
import Image from '../../public/imagen.jpg'

export default function Home() {
    return (
        <main>
            <div>
                {' '}
                <Image></Image>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nulla autem voluptatibus eum quasi sed
                    tenetur! Similique quidem sed corrupti qui cumque esse, quas maxime ab quae at magnam voluptates.
                </p>
            </div>
        </main>
    )
}
