'use client'

import {/* LoginOutlined,*/ AccountCircle } from '@mui/icons-material';
import { ListItem, ListItemIcon, Avatar, ListItemText, MenuItem/*, List*/ } from '@mui/material';
import router from 'next/router';
import { /*useContext,*/ useMemo } from 'react';
//import { AuthContext } from "../../context";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//import { obtieneIniciales } from "../../utils/inicialesAvatar";

interface Props{
    movilStyle?: boolean,
    clickAvatar?: ()=>void;
}

const UserAvatar = ({ movilStyle, clickAvatar }: Props) => {
  //const { user, isLoggedIn } = useContext(AuthContext);

  const avatar = useMemo(() => {
    return (
      <>
        <ListItemIcon>
          <Avatar sx={{ bgcolor: 'black' }}>
            {/*user ? obtieneIniciales(user) : 'U'*/ 'U'}
          </Avatar>
        </ListItemIcon>
        <ListItemText
          primary={'¡Bienvenido!'}
          secondary={/*user?.name || user?.email*/ 'PEPE'}
        />
      </>
    );
  }, [/*user*/]);

  const avatarContainer = (contenido: any) => {
    return movilStyle ? (
      <MenuItem
        onClick={clickAvatar ?? undefined}
        sx={{
          '.MuiListItemText-primary': {
            fontWeight: 'bold',
            paddingLeft: '20px',
          },
          '.MuiListItemText-secondary': {
            paddingLeft: '20px',
          },
          display: 'flex',
        }}
      >
        {contenido}
      </MenuItem>
    ) : (
      <ListItem
        sx={{
          '.MuiListItemText-primary': {
            fontWeight: 'bold',
          },
          display: 'flex',
        }}
      >
        {contenido}
      </ListItem>
    );
  };

  return (
    <>
      {/*isLoggedIn ?*/
      // eslint-disable-next-line no-constant-condition
      false ? (
        <>
          {avatarContainer(
            movilStyle ? (
              <>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  {avatar}
                </div>
                <ArrowForwardIosIcon />
              </>
            ) : (
              avatar
            )
          )}
        </>
      ) : (
        <MenuItem
          onClick={() => router.push(`/auth/login?p=${router.asPath}`)}
          sx={{
            '.MuiListItemText-primary': {
              paddingLeft: '20px',
            },
            '.MuiListItemText-secondary': {
              paddingLeft: '20px',
            },
          }}
        >
          <ListItemIcon>
            <AccountCircle fontSize="large" />
          </ListItemIcon>
          <ListItemText primary={'Iniciar sesión'} secondary={'Registrarse'} />
        </MenuItem>
      )}
    </>
  );
};

export default UserAvatar;