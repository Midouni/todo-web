import { Box, CardActionArea, List, ListItem, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CustomCard from '../../components/CustomCard';
import CustomFormInput from '../../components/CustomFormInput';

export default function Dashboard() {
    const [title, setTitle] = useState<string>('');
    const theme = useTheme();

    return (
        <div className='app'>
            <CustomCard
                title={'Todo List'}
            >
                <CustomFormInput
                    name='Add a new Todo'
                    type='text'
                    onChange={(event) => {

                    }}
                />
                <Box sx={{mt: 4, mb: -2}}>
                    <Typography color={theme.palette.link.main} sx={{opacity: .5}} variant={'h5'}>
                        Show :
                    </Typography>
                    <List>
                        <ListItem />
                    </List>
                </Box>
            </CustomCard>
        </div>
    )
}