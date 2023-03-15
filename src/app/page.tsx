import Link from 'next/link'
import Image from 'next/image'
import './styles.css'

// estas son las importaciones de las imagenes
import image from '../../public/imagen.jpg'

// Aqui terminan las importaciones de las imagenes

// estas son las importaciones de la tipografia
import { Righteous } from 'next/font/google'

const righteous = Righteous({
    style: ['normal'],
    weight: '400',
    subsets: ['latin'],
})
// aqui termina la importacion de la tipografia

export default function Home() {
    return (
        <main>
            <nav>
                <div className="logo-icon">
                    {/* <Image
                        src={}
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        layout="responsive"
                    /> */}
                </div>
                <ul>
                    <li>inicio</li>
                    <li>novedades</li>
                    <li>contacto</li>
                </ul>
                <div></div>
            </nav>
            <article>
                <Image
                    src={image}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    layout="responsive"
                />
                <div>
                    <h1 className={righteous.className}>inicio</h1>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero doloribus animi praesentium
                        consequatur labore ducimus facilis asperiores ea.
                    </p>
                </div>
            </article>
            <article>
                <div>
                    <h1>contacto</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum iusto cumque, sed nulla
                        aperiam recusandae.
                    </p>
                </div>
                <Image
                    src={image}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    layout="responsive"
                />
            </article>
        </main>
    )
}
