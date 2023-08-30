import Image from 'next/image';

const InitLoader = () => {
    return (
        <div className="container">
            <div className='clip-pathD'>
                <Image
                    className='background-image'
                    src="/fondo.jpg"
                    priority
                    layout="fill"
                    alt="Luxed stones"
                    />
            </div>
            <div className='clip-path'>
                <Image
                    className='background-image'
                    src="/fondo.jpg"
                    priority
                    layout="fill"
                    alt="Luxed stones"
                    />
            </div>
            <div className='clip-pathI'>
                <Image
                    className='background-image'
                    src="/fondo.jpg"
                    priority
                    layout="fill"
                    alt="Luxed stones"
                    />
            </div>
        </div>
    )
}

export default InitLoader;