import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import { Task } from '../../redux/features/tasks/types';

export default function CustomTaskItem({task, onClick, onDelete}: CustomTaskItemProps) {
    return (
        <ListItem
            sx={{ p: 0 }}
            key={task.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={onDelete}>
                    <img src="/assets/imgs/delete.png" className="deleteIcon" />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={onClick} sx={{ m: 0, p: 0 }} >
                <ListItemIcon sx={{ m: 0, p: 0, minWidth: 0 }}>
                    <Checkbox
                        edge="start"
                        checked={task.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': `checkbox-list-label-${task.id}` }}
                    />
                </ListItemIcon>
                <Typography>
                    {task.title}
                </Typography>
            </ListItemButton>
        </ListItem>
    )
}
interface CustomTaskItemProps {
    task: Task;
    onClick: () => void;
    onDelete: () => void;
}