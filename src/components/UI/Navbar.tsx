'use client'

import { /*ShoppingCartOutlined,*/ SearchOutlined, MenuOutlined, AccountCircle, FavoriteOutlined/*, Logout, PersonAdd, Settings, LoginOutlined*/ } from '@mui/icons-material';
import { AppBar, Avatar,/* Badge,*/ Box,/* Button,*/ Divider, IconButton, /*Link, ListItem, ListItemIcon, ListItemText,*/ Menu, /*MenuItem, Popover,*/ Toolbar, Typography } from '@mui/material';
//import NextLink from 'next/link';
//import { useRouter } from 'next/router';
import { Ref, /*useContext,*/ useEffect, useRef, useState } from 'react';
//import { AuthContext, CartContext, UIContext } from '../../context';
//import { Buscador } from './Buscador';
import CloseIcon from '@mui/icons-material/Close';
import UserAvatar from './UserAvatar';
import { UserMenu } from './UserMenu';
//import { obtieneIniciales } from '../../utils/inicialesAvatar';

export const Navbar = ({referencia}: any) => {

    //FIXME: Cuando se intenta cerrar sesión sin la base de datos fallan cosas, aunque se cierra la sesión.


    //const {numberOfItems} = useContext(CartContext);
    //const { user, isLoggedIn, logout } = useContext(AuthContext);
    // const theme = useTheme();

    //NOTA: NEXT.js, ejemplo de como marcar la opción activa en el menú según la página activa
    // eslint-disable-next-line no-unused-vars
   // const {asPath, push} = useRouter();
    //const { toggleSideMenu } = useContext(UIContext);

    const refInputBuscador:Ref<any> = useRef(null);

    const [subAppVisible, setSubAppVisible] = useState(true);
    const topbar = true;

    const handleScroll = () => {
        if(window.scrollY > 60){
            setSubAppVisible(false);
        }else{
            setSubAppVisible(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { //Pone el foco en el buscador en modo movil cuando el buscador es visible.
        if(subAppVisible && refInputBuscador.current) refInputBuscador.current.focus();
    }, [subAppVisible]);



    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //const router = useRouter();

  /*const navigateTo = (url: string) =>{
    router.push(url);
}*/

    return (
        <AppBar ref={referencia} className={`navHeight ${subAppVisible ? '' : 'corto'}`}>

            {/* //TODO: Hacer la barra superior un componente, que se incluya de forma dinámica solo cuando el contexto indique que hay que mostrar la barrita.
                //El contexto lo establecerá según cookies del usuario u otros motivos.
            */}

            {
                topbar
                ?
                    <Box className='bgPri' sx={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: '5px', position: 'relative'}}>
                                <Typography variant='caption' color='info' textAlign='center' padding='0px 25px 0px 10px'>
                                    ACTIVA LACUENTA
                                </Typography>
                        <IconButton sx={{position: 'absolute',right: '0'}}>
                            <CloseIcon fontSize='small' color='info'/>
                        </IconButton>
                    </Box>
                :
                    undefined
            }

            <Toolbar sx={{position: 'relative', display: 'flex', justifyContent: 'center', overflow: 'hidden', minHeight: 'auto !IMPORTANT', pt: {xs: '0px', sm: '10px'}, pb: {xs: '0px', sm:'10px'}}}>
                <IconButton onClick={/*toggleSideMenu*/ ()=>{}} sx={{display: {xs: 'inherit', sm: 'none'}, position: 'absolute', left: '5px'}}>
                    <MenuOutlined/>
                </IconButton>

                <IconButton onClick={()=>setSubAppVisible(true)} className='fadeIn' sx={{display: {xs: subAppVisible ? 'none' : 'inherit', sm: 'none'}, position: 'absolute', left: '45px'}}>
                    <SearchOutlined/>
                </IconButton>

                {/* <NextLink href="/" passHref > */}
                    <span>LOGO</span>
                    {/* <Link className='colpri' display='flex' alignItems='center' sx={{position:{xs: 'relative', sm: 'absolute'}, left: {xs: '0', sm:'25px'}}}>
                        <Typography variant='caption' sx={{fontSize: '2rem', fontWeight: 800}}>S</Typography>
                        <Typography variant='caption' sx={{fontSize: '1.5rem', fontWeight: 800, letterSpacing: 1}}>alitre</Typography>
                    </Link> */}
                {/* </NextLink> */}

                <Box className='fadeIn' sx={{display: {xs: 'none', sm: 'flex', width: '60%'}, gap: '10px'}}>
                    {/* <Buscador/> */}
                    <span>BUSCADOR</span>
                </Box>

                <IconButton sx={{position: 'absolute', right: {xs: '45px', sm:'94px'}}}>
                    <FavoriteOutlined/>
                </IconButton>

                {/* <NextLink href="/cart" passHref>
                    <Link sx={{position: 'absolute', right: {xs:'5px', sm: '56px'}}}>
                        <IconButton >
                            <Badge badgeContent={10} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink> */}
                <span>Carrito</span>

                <IconButton
                    onClick={handleClick}
                    sx={{position: 'absolute', right: '18px', display: {xs: 'none', sm: 'flex'}}}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}>
                        {
                            //isLoggedIn
                            // eslint-disable-next-line no-constant-condition
                            false
                            ?
                                <Avatar sx={{ bgcolor: 'black', width: 32, height: 32}}> { /*user ? obtieneIniciales(user) : "U"*/ 'U' } </Avatar>
                            :
                                <AccountCircle/>
                        }
                </IconButton>
                {/* Menu con opciones de usuario */}
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        width: '300px',
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <UserAvatar/>

                    {
                        //isLoggedIn
                        // eslint-disable-next-line no-constant-condition
                        false
                        ?
                            <>
                                <Divider/>
                                <UserMenu callbackClick={handleClose} logoutCallback={handleClose}/>
                            </>
                        :
                            undefined
                    }
                </Menu>
            </Toolbar>

            <Toolbar sx={{display: {xs: 'none', sm: 'flex'}, gap:'1em', justifyContent: 'center', minHeight: 'auto !IMPORTANT', pb: '10px'}}>
                <span> menu 1</span>
                <span> menu 2</span>
            </Toolbar>

            <Toolbar className='fadeIn' sx={{display: {xs: subAppVisible ? 'flex' : 'none', sm: 'none'}, gap:'1em', justifyContent: 'center', minHeight: 'auto !IMPORTANT', pb: '10px'}}>
                {/* <Buscador htmlElRef={refInputBuscador}/> */}
                <span>BUSCADOR</span>
            </Toolbar>
        </AppBar>
    )
}
