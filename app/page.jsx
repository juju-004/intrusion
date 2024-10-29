'use client';

import React from 'react';
import { Box, Button, Container, Divider, Typography, Link as JoyLink } from '@mui/joy';
import NavigateNext from '../icons/NavigateNext';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { useUser } from '@auth0/nextjs-auth0/client';
import { BiPowerOff } from 'react-icons/bi';

const theme = extendTheme({
  colorSchemeSelector: 'media'
});

import NavBar from '../components/NavBar';

export default function Index() {
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <CssVarsProvider theme={theme}>
        <NavBar />
        <main
          id="app"
          className="d-flex bg-slate-800 flex-column w-full items-center justify-center h-screen"
          data-testid="layout">
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              width: '100%'
            }}
            bgcolor={'background.surface'}
            className="text-center flex-1 w-full">
            <Container
              maxWidth={'sm'}
              sx={{
                textAlign: 'center',
                mt: '56px',
                py: 12,
                minHeight: 'calc(100vh - 240px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1
              }}>
              {user ? (
                <>
                  <Typography level={'h1'} mb={2}>
                    Hi <span style={{ color: 'var(--joy-palette-primary-400)' }}>there!!</span>
                  </Typography>
                  <br />
                  <Typography level={'h3'} mb={2}>
                    You are now signed in to our Intrusion Tolerant System
                  </Typography>
                  <Typography level={'h4'} className="text-center" mt={2}>
                    Your rsa key is <br />
                  </Typography>
                  <Typography level={'h4'} className="text-center" mb={2}>
                    <span
                      style={{ color: 'var(--joy-palette-primary-400)', wordWrap: 'break-word', textAlign: 'center' }}>
                      Ggu4H537XLg2GHkfHM6vOZ7ycJtqYqZiSp5BMigfufTS4uRVrGmmURl9g5_s2E0C
                    </span>
                  </Typography>
                  <Box gap={1.5} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                    <Button
                      disabled={isLoading}
                      className="disabled:opacity-70 opacity-100 duration-150"
                      size={'lg'}
                      sx={{ bgcolor: 'primary.500' }}
                      endDecorator={<BiPowerOff />}>
                      <a className="text-white" d href="/api/auth/logout">
                        Logout
                      </a>
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Typography level={'h1'} mb={2}>
                    Intrusion <span style={{ color: 'var(--joy-palette-primary-400)' }}>Tolerant</span> System
                  </Typography>
                  <Typography mb={2}>
                    This is the future of web authentication: using rsa encryption format and email authentication
                  </Typography>
                  <Box gap={1.5} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                    <Button
                      disabled={isLoading}
                      className="disabled:opacity-70 opacity-100 duration-150"
                      size={'lg'}
                      sx={{ bgcolor: 'primary.500' }}
                      endDecorator={<NavigateNext />}>
                      <a className="text-white" d href="/api/auth/login">
                        Sign in
                      </a>
                    </Button>
                  </Box>
                </>
              )}
            </Container>
          </Box>
          <Divider sx={{ blockSize: '0.1px' }} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%'
            }}
            bgcolor={'background.surface'}
            className="dark:bg-purple-700"
            py={3}>
            <Container maxWidth={'lg'}>
              <Box display={'flex'} alignItems={'center'} gap={2} mb={1.5}>
                <Typography fontFamily={'display'} level={'h4'} lineHeight={'32px'} fontWeight={'800'}>
                  I<span style={{ color: 'var(--joy-palette-primary-400)' }}>T</span>S
                </Typography>
                <Divider orientation={'vertical'} />
                <Typography>2024. All rights reserved</Typography>
              </Box>
              <Typography sx={{ opacity: 0.7 }}>This website is licenced under the MIT license</Typography>
            </Container>
          </Box>
        </main>
      </CssVarsProvider>
    </>
  );
}
