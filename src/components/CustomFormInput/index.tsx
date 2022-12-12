
import { FormControl, Input, InputLabel, InputProps } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { ChangeEvent, forwardRef, KeyboardEventHandler } from 'react';

const CustomFormInput = forwardRef<InputProps, CustomFormInputProps>((props, ref) => {
    const theme = useTheme();
    const { name, type, onChange, onSubmit } = props;

    const handleKeyDown = (event: {key: string}) => {
        if (event.key === 'Enter') {
            onSubmit?.();
        }
    }
    return (
        <FormControl fullWidth sx={{ mt: 1.5 }} variant="standard" >
            <InputLabel sx={{ color: theme.palette.label.main }} htmlFor={`${name}-input`}>{name}</InputLabel>
            <Input
                inputRef={ref}
                id={`${name}-input`}
                onChange={onChange}
                type={type}
                onKeyDown={handleKeyDown}
            />
        </FormControl>
    )
});
export default CustomFormInput;
interface CustomFormInputProps {
    name: string;
    onChange: (event: ChangeEvent) => void;
    onSubmit?: () => void;
    type: string;
};
