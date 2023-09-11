import Image from 'next/image';

const InitLoader = () => {
    return (
        <div className="contLoader">
            <div className='clip-pathD'>
                <Image
                    src="/izq.webp"
                    priority
                    layout="fill"
                    alt="Luxed stones"
                    />
            </div>
            <div className='clip-path'>
                <Image
                    src="/centro.webp"
                    priority
                    layout="fill"
                    alt="Luxed stones"
                    />
            </div>
            <div className='clip-pathI'>
                <Image
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