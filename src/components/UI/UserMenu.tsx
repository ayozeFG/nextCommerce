'use client'

import { LoginOutlined } from '@mui/icons-material';
import { ListItemIcon, MenuItem, Link } from '@mui/material';
//import { useContext } from 'react';
//import { AuthContext } from "../../context";
import NextLink from 'next/link';

interface Props{
    callbackClick?: ()=>void;
    logoutCallback?: ()=>void;
}

export const UserMenu = ({callbackClick, logoutCallback} : Props) => {

    //const { logout } = useContext(AuthContext);

    // eslint-disable-next-line no-unused-vars
    const handleClick = (ruta:String)=>{

        if(callbackClick){
            callbackClick();
        }
    }

    const handleLogout = ()=>{
        //logout();
        if(logoutCallback){
            logoutCallback();
        }
    }

    return (
        <>
            <NextLink onClick={()=>handleClick('asdafdf')} href='/pedidos' passHref>
                <Link>
                    <MenuItem>
                        Mis pedidos
                    </MenuItem>
                </Link>
            </NextLink>
            <NextLink onClick={()=>handleClick('asdafdf')} href='/user/miPerfil' passHref>
                <Link>
                    <MenuItem>
                        Mi perfil
                    </MenuItem>
                </Link>
            </NextLink>
            <NextLink onClick={()=>handleClick('asdafdf')} href='/user/direcciones' passHref>
                <Link>
                    <MenuItem>
                        Direcciones
                    </MenuItem>
                </Link>
            </NextLink>
            <NextLink onClick={()=>handleClick('asdafdf')} href='/user/borrarCuenta' passHref>
                <Link>
                    <MenuItem>
                        Eliminar cuenta
                    </MenuItem>
                </Link>
            </NextLink>
            <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                    <LoginOutlined/>
                </ListItemIcon>
                Cerrar sesión
            </MenuItem>
        </>
    )
}
