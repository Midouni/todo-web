import { Alert, Button, CircularProgress, Link, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCard from '../../components/CustomCard';
import CustomFormInput from '../../components/CustomFormInput';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { signUp } from '../../redux/features/auth/service';

export default function Register() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const theme = useTheme();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const submit = () => {
        dispatch(signUp({
            name,
            email,
            password,
        }))
            .then(response => {
                if (response.payload?.success) {
                    navigate('/login');
                }
            });
    }

    const { loading, error, message } = useAppSelector(state => state.Auth);
    return (
        <div className='app'>
        <CustomCard
            title={'Welcome!'}
            subTitle={'Sign up to start using Simpledo today.'}
        >
            {
                message &&
                <Alert severity={error ? "error" : "info"}>{message}</Alert>
            }
            <CustomFormInput
                name='Full Name'
                type='text'
                onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    setName(target.value);
                }}
            />
            <CustomFormInput
                name='E-mail'
                type='email'
                onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    setEmail(target.value);
                }}
            />
            <CustomFormInput
                name='Password'
                type='password'
                onChange={(event) => {
                    const target = event.target as HTMLInputElement;
                    setPassword(target.value);
                }}
            />
            <Link color={theme.palette.link.main} href='/login'>
                <Typography sx={{ mt: 2 }} color={theme.palette.link.main}>
                    Do have an account? Sign in.
                </Typography>
            </Link>
            <Button
                onClick={submit}
                sx={{ mt: 6 }}
                fullWidth
                color={error ? 'error' : 'primary'}
                variant="contained"
                disabled={loading}
                endIcon={loading && <CircularProgress color={'primary'} size={21} />}
            >
                Sign Up
            </Button>
        </CustomCard>
        </div>
    )
}