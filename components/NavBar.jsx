'use  client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Box, Sheet, IconButton, useColorScheme, Tooltip, Container, Avatar, Typography, Button } from '@mui/joy';
import DarkMode from '../icons/DarkMode';
import LightMode from '../icons/LightMode';
import Roc from '../icons/RocketLaunch';
import { BiPowerOff } from 'react-icons/bi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { mode, setMode } = useColorScheme();

  return (
    <Sheet
      variant={'outlined'}
      sx={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        p: 1.5,
        zIndex: 100,
        borderWidth: '0 0 1px 0',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        '--Card-radius': 0
      }}>
      <Container
        maxWidth={'lg'}
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <span className="items-center gap-2">
          <Roc /> <span className="font-bold">CIS</span>
        </span>
        <Box sx={{ flexGrow: 1 }} />
        <div className="fx gap-3">
          {user && (
            <>
              <Avatar src={user.picture} className="flex md:hidden" size="sm" />
              <span className="items-center pl-1 pr-4 bg-slate-500/15 hidden md:flex rounded-3xl gap-2 py-1">
                <Avatar src={user.picture} size="sm" />
                <Typography>{user.name}</Typography>
              </span>
              <Tooltip title={`Logout`} color="danger" variant={'soft'} arrow>
                <Button size={'sm'} color="danger" variant="outlined">
                  <a d href="/api/auth/logout" className="text-inherit hover:text-inherit fx md:pr-2 gap-2">
                    <BiPowerOff className="md:scale-105 scale-[1.4]" /> <span className="hidden md:flex">Logout</span>
                  </a>
                </Button>
              </Tooltip>
            </>
          )}
          <Tooltip title={`Turn ${mode === 'light' ? 'off' : 'on'} the lights`} variant={'soft'} arrow>
            <IconButton
              size={'sm'}
              variant={'outlined'}
              onClick={() => mounted && setMode(mode === 'light' ? 'dark' : 'light')}>
              {!mounted ? <LightMode /> : mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>
        </div>
      </Container>
    </Sheet>
  );
};

export default NavBar;
