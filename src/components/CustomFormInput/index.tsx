
import { FormControl, Input, InputLabel } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { ChangeEvent } from 'react';

export default function CustomFormInput(props: CustomFormInputProps) {
    const theme = useTheme();

    const { name, type, onChange } = props;
    return (
        <FormControl fullWidth sx={{ mt: 1.5 }} variant="standard" >
            <InputLabel sx={{ color: theme.palette.label.main }} htmlFor={`${name}-input`}>{name}</InputLabel>
            <Input
                id={`${name}-input`}
                onChange={onChange}
                type={type}
            />
        </FormControl>
    )
}

interface CustomFormInputProps {
    name: string;
    onChange: (event: ChangeEvent) => void;
    type: string;
};
