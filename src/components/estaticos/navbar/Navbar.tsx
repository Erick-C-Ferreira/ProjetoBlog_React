import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <>
            <AppBar position='static' className="back">
                <Toolbar variant='dense' className="bar">
                    <Box className='cursor'>
                        <Typography className="title" variant="h5" color="inherit">
                            BlogPessoal
                            <IconButton edge="start" color="inherit" aria-label="menu" className='button'>
                                <MenuIcon />
                            </IconButton>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Link to='/home' className='text-decorator-none'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Link>

                        </Box>

                        <Box mx={1} className='cursor'>
                            <Link to='/postagens' className='text-decorator-none'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Link>

                        </Box>

                        <Box mx={1} className='cursor'>
                            <Link to='/temas' className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                            </Link>
                            
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Link to='cadastrar-tema' className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                            </Link>
                           
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;