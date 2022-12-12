import { Link, Typography, useTheme } from '@mui/material';
import React from 'react';

export default function CustomFilterLink({ 
    title,
    onClick,
    active,
}: CustomFilterLinkProps) {
    const theme = useTheme();
    return (
        <Link onClick={onClick} sx={active ? {textDecoration: 'none'} : {}}>
            <Typography
                color={active ? theme.palette.link.main : theme.palette.primary.main} 
                variant={'body2'}
                component={'span'}
            >
                {title}
            </Typography>
        </Link>
    )
}

interface CustomFilterLinkProps {
    title: string;
    onClick: () => void;
    active: boolean;
}