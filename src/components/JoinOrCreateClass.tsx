'use client'
import Image from 'next/image'
import { useState } from 'react'
import grupos from '../../public/aplicaciones-anadir.svg'
import Modal from 'react-modal'
import Link from 'next/link'

Modal.setAppElement('body')

export default function JoinOrCreateClass() {
    const [openModal, setOpenModal] = useState(false)
    const closeModal = () => setOpenModal(false)
    return (
        <>
            <button
                style={{
                    height: '64px',
                    width: '64px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    borderColor: 'transparent',
                }}
                onClick={e => setOpenModal(!0)}
            >
                <Image src={grupos} alt='Create Class' width={50} height={50} layout='responsive' />
            </button>
            <Modal
                isOpen={openModal}
                onRequestClose={closeModal}
                style={{
                    content: {
                        top: 'calc(50% - 200px)',
                        bottom: 'calc(50% - 200px)',
                        right: 'calc(50% - 200px)',
                        left: 'calc(50% - 200px)',
                    },
                }}
            >
                <label>¿Que quieres hacer?</label>
                <Link href='/app/new/class'></Link>
                <button onClick={closeModal}>Unirme a un grupo</button>
                <button onClick={closeModal}>Crear una Clase</button>
            </Modal>
        </>
    )
}
