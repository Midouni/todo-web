import { AppBar, Box, Button, Divider, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react';

export function Header({ onLogout }: HeaderProps) {
    const theme = useTheme();
    return (
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <Box sx={{flexGrow: 1, display: { xs: 'none', sm: 'block' }}}/>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                    <Button onClick={onLogout}>
                        <Typography variant='body2' component={'span'} sx={{ color: theme.palette.link.main}}>Logout</Typography>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

interface HeaderProps {
    onLogout?: () => void;
}