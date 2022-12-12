import { Card, CardContent, CardHeader, Typography, useTheme } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

export default function CustomCard({children, logo, title, subTitle}: CustomCardProps) {
    const theme = useTheme();
    return (
        <Container maxWidth="xs">
            <Card className={'login-container'} sx={{ borderRadius: 2, pt: 4, pl: 2, pr: 2, pb: 4 }}>
                <CardHeader
                    avatar={<img src={logo || "/assets/imgs/logo.png"} alt={'App logo'} className={'logo'} />}
                />
                <CardContent>
                    {
                        title && 
                        <Typography variant={'h1'} component={'h1'}>
                            {title}
                        </Typography>
                    }
                    {
                        subTitle && 
                        <Typography sx={{ color: theme.palette.label.main, mb: 2 }} variant={'h2'} component={'h2'}>
                            {subTitle}
                        </Typography>
                    }
                    {children}
                </CardContent>
            </Card>
        </Container>
    )
}

interface CustomCardProps {
    children?: React.ReactNode;
    logo?: string;
    title?: string,
    subTitle?: string,
}