import Link from 'next/link'
import Image from 'next/image'
import './styles.css'
import image from '../../public/imagen.jpg'

export default function Home() {
    return (
        <main>
            <div>
                {' '}
                <Image src={image} alt='Picture of the author' width={50} height={50} layout='responsive' />
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nulla autem voluptatibus eum quasi sed
                    tenetur! Similique quidem sed corrupti qui cumque esse, quas maxime ab quae at magnam voluptates.
                </p>
            </div>
        </main>
    )
}
