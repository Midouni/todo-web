import { Alert, Button, CircularProgress, Link, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCard from '../../components/CustomCard';
import CustomFormInput from '../../components/CustomFormInput';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { saveToken } from '../../redux/features/auth/authSlice';
import { signIn } from '../../redux/features/auth/service';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const theme = useTheme();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const submit = () => {
        dispatch(signIn({
            email,
            password,
        }))
            .then(response => {
                if (response.payload?.success && response.payload?.token) {
                    dispatch(saveToken({token: response.payload.token}))
                    navigate('/');
                }
            });
    }

    const {error, loading, message} = useAppSelector(state => state.Auth);
 
    return (
        <CustomCard
            title={'Welcome back!'}
            subTitle={'Log in to continue.'}
        >
            {
                message && 
                <Alert severity={error ? "error": "info"}>{message}</Alert>
            }
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
            <Link color={theme.palette.link.main} href='/register'>
                <Typography sx={{ mt: 2 }} color={theme.palette.link.main}>
                Don’t have an account? Sign up.
                </Typography>
            </Link>
            <Button 
                onClick={submit}
                sx={{ mt: 6 }}
                fullWidth
                color={error ? 'error': 'primary'}
                variant="contained"
                disabled={loading}
                endIcon={loading && <CircularProgress color={'primary'} size={21}/>}
            >
                Log In
            </Button>
        </CustomCard>
    )
}