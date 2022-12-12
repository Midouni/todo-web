import { Alert, Box, CardActionArea, Checkbox, IconButton, LinearProgress, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import React, { useRef, useState } from 'react';
import CustomCard from '../../components/CustomCard';
import CustomFilterLink from '../../components/CustomFilterLink';
import { CustomFilters } from '../../components/CustomFilters';
import CustomFormInput from '../../components/CustomFormInput';
import CustomTaskItem from '../../components/CustomTaskItem';
import { useTasks } from '../../hooks/useTasks';

export default function Dashboard() {
    const [title, setTitle] = useState<string>('');
    const theme = useTheme();

    const { tasks, loading, error, message, filters, setFilterBy, filterBy, addTask, taskClick, removeTask } = useTasks();
    const inputRef = useRef(null);
    return (
        <div className='app'>
            <CustomCard
                title={'Todo List'}
            >
                {
                    loading && 
                    <LinearProgress color={'primary'}/>
                }
                {
                    message && 
                    <Alert severity={error ? "error": "info"}>{message}</Alert>
                }
                <CustomFormInput
                    ref={inputRef}
                    name='Add a new Todo'
                    type='text'
                    onChange={(event) => {
                        const target = event.target as HTMLInputElement;
                        setTitle(target.value);
                    }}
                    onSubmit={() => {
                        addTask(title);
                        setTitle('');
                        if (inputRef.current) {
                            (inputRef.current as HTMLInputElement).value = '';
                        }
                    }}
                />
                <List sx={{maxHeight: 250, overflowY: 'scroll', overflowX: 'clip'}}>
                    {
                        tasks.map(
                            (task, index) => (
                                <CustomTaskItem
                                    onClick={() => taskClick(index)}
                                    onDelete={() => removeTask(index)}
                                    task={task}
                                />
                            )
                        )
                    }
                </List>
                <CustomFilters
                    onClick={setFilterBy}
                    filters={filters}
                    selected={filterBy}
                />
            </CustomCard>
        </div>
    )
}