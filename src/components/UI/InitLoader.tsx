import Image from 'next/image';

const InitLoader = () => {
    return (
        <div className="container">
            <div className='clip-pathD'>
                <Image
                    className='background-image'
                    src="/izq.webp"
                    priority
                    layout="fill"
                    alt="Luxed stones"
                    />
            </div>
            <div className='clip-path'>
                <Image
                    className='background-image'
                    src="/centro.webp"
                    priority
                    layout="fill"
                    alt="Luxed stones"
                    />
            </div>
            <div className='clip-pathI'>
                <Image
                    className='background-image'
                    src="/der.webp"
                    priority
                    layout="fill"
                    alt="Luxed stones"
                    />
            </div>
        </div>
    )
}

export default InitLoader;