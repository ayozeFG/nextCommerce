import Head from 'next/head';
import { JSX, useLayoutEffect, useRef, useState } from 'react';
import { Navbar } from '../UI/Navbar';

interface Props {
    children: JSX.Element |JSX.Element[];
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const ShopLayout = ({ children, title, pageDescription, imageFullUrl}: Props) => {

    const targetRef = useRef();
    const [dimensions, setDimensions] = useState(0);

    useLayoutEffect(() => { //Actualiza el marginTop del cuerpo en base al alto de la cabecera.
        if (targetRef.current) {
            const algo = targetRef.current as any;
            const height:number = algo.offsetHeight;
            setDimensions(height!);
        }
    }, []);

    return (
        <div className='autoFadeIn' style={{position: 'relative', minHeight: '100vh'}}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={pageDescription}/>
                <meta name='og:title' content={title}/>
                <meta name='og:description' content={pageDescription}/>

                {
                    imageFullUrl && (
                        <meta name='og:image' content={imageFullUrl}/>
                    )
                }
            </Head>

            <nav>
                <Navbar referencia={targetRef}/>
            </nav>

            {/* <SideMenu/> */}

            <main style={{
                margin: `${dimensions}px auto 0px auto`,
                maxWidth: '1440px',
                padding: '16px',
            }} >
                {children}
            </main>

            <footer style={{
                    position: 'absolute',
                    bottom: '-20px',
                    width: '100%',
                    zIndex: 1,
                    border: '1px solid red',
                }}>

                    <span style={{border: '1px solid red'}}> ESTE ES EL PIE</span>
            </footer>
        </div>
    )
}
