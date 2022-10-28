import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme, styled, alpha } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import AlertTitle from "@mui/material/AlertTitle"

const NEWSLETTER_SUBSCRIBE_URL =
    process.env.DEPLOY_ENV === 'production' || process.env.DEPLOY_ENV === 'staging'
        ? 'https://3867465e.sibforms.com/serve/MUIEAKVJ6U2B-mH1ZUc8FxYzi4j8ghc67ggrpsmqCD3mWzTdteGH7I3nEytJsQjhiVFvOrc2W1dvtOAhLNb5w5hNC6TSZrxjBEnVH9HibdbMvx3oPMfEIFg847tyrZytCfOWQmglR_BGVqv9faLN14CR1jxRMUWFENlPOQskTGfR5ODo-d-7LVrUwds7HFgDFBxHBXYFdOwwT32m'
        : 'https://3867465e.sibforms.com/serve/MUIEAKVJ6U2B-mH1ZUc8FxYzi4j8ghc67ggrpsmqCD3mWzTdteGH7I3nEytJsQjhiVFvOrc2W1dvtOAhLNb5w5hNC6TSZrxjBEnVH9HibdbMvx3oPMfEIFg847tyrZytCfOWQmglR_BGVqv9faLN14CR1jxRMUWFENlPOQskTGfR5ODo-d-7LVrUwds7HFgDFBxHBXYFdOwwT32m';

const Form = styled('form')({});

function searchParams(params: any) {
    return Object.keys(params)
        .filter((key) => params[key] != null)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
}

export default function EmailSubscribe({ sx }: { sx?: SxProps<Theme> }) {
    const [form, setForm] = React.useState<{
        email: string;
        status: 'initial' | 'loading' | 'failure' | 'sent';
    }>({
        email: '',
        status: 'initial',
    });
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setForm((current) => ({ ...current, status: 'loading' }));
        try {
            await fetch(NEWSLETTER_SUBSCRIBE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                mode: 'no-cors',
                body: searchParams({
                    EMAIL: form.email,
                    email_address_check: '',
                    locale: 'en',
                }),
            });
            setForm((current) => ({ ...current, status: 'sent' }));
        } catch (error) {
            setForm((current) => ({ ...current, status: 'failure' }));
        }
    };
    if (form.status === 'sent') {
        return (
            <Alert
                severity="success"
                sx={[
                    (theme) => ({
                        maxWidth: { sm: 400 },
                    }),
                    ...(Array.isArray(sx) ? sx : [sx]),
                ]}
                iconMapping={{
                    success: (
                        <CheckCircleRoundedIcon
                            fontSize="small"
                        />
                    ),
                }}
            >
                <AlertTitle sx={{ typography: 'body2', fontWeight: 700 }}>
                    Thanks! Check your email.
                </AlertTitle>
                You should get a <strong>confirmation email</strong> soon. Open it up and confirm your email
                address so that we can keep you up to date.
                {/* <Typography fontWeight="lg" mt={0.25}>
                    Thanks! Check your email.
                </Typography>
                <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                    You should get a <strong>confirmation email</strong> soon. Open it up and confirm your email
                    address so that we can keep you up to date.
                </Typography> */}
            </Alert>
        );
    }
    return (
        <Form onSubmit={handleSubmit} sx={sx}>
            <FormLabel
                htmlFor="email-subscribe"
                sx={{ typography: 'caption', mb: 0.5, color: 'text.secondary', fontWeight: 500 }}
            >
                Please enter your Email ID:
            </FormLabel>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    width: { xs: '100%', sm: 'auto' },
                    maxWidth: 320,
                }}
            >
                {/* <TextField
                    name="email"
                    type="email"
                    id="email-subscribe"
                    color="primary"
                    label="Email"
                    placeholder="example@email.com"
                    size="lg"
                    variant="soft"
                    helperText="Please enter your Email ID."
                    startDecorator={<EmailRoundedIcon />}
                    required
                    onChange={(event) => setForm({ email: event.target.value, status: 'initial' })}
                    inputProps={{ required: true }}
                /> */}
                <InputBase
                    id="email-subscribe"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    startAdornment={
                        <InputAdornment position="start">
                            <EmailRoundedIcon />
                        </InputAdornment>
                    }
                    value={form.email}
                    onChange={(event) => setForm({ email: event.target.value, status: 'initial' })}
                    inputProps={{ required: true }}
                />
                {/* <InputBase
                    id="email-subscribe"

                    placeholder="example@email.com"
                    value={form.email}

                    sx={[
                        (theme) => ({
                            minWidth: 220,
                            borderRadius: 1,
                            border: '1px solid',
                            bgcolor: '#fff',
                            boxShadow: '0 1px 2px 0 rgba(0 0 0 / 0.1)',
                            borderColor: 'grey.300',
                            px: 1,
                            py: 0.5,
                            typography: 'body2',
                            '&:hover': {
                                borderColor: 'grey.400',
                                boxShadow: '0 1px 2px 0 rgba(0 0 0 / 0.2)',
                            },
                            [`&.${inputBaseClasses.focused}`]: {
                                outline: '3px solid',
                                borderColor: 'primary.500',
                                outlineColor: (theme.vars || theme).palette.primary[200],
                            },
                        }),
                        (theme) =>
                            theme.applyDarkStyles({
                                bgcolor: 'primaryDark.900',
                                boxShadow: '0 1px 2px 0 rgba(0 0 0 / 1)',
                                borderColor: 'primaryDark.500',
                                '&:hover': {
                                    borderColor: 'primaryDark.300',
                                    boxShadow: '0 1px 2px 0 rgba(0 0 0 / 1)',
                                },
                                [`&.${inputBaseClasses.focused}`]: {
                                    borderColor: 'primaryDark.300',
                                    outlineColor: (theme.vars || theme).palette.primaryDark[500],
                                },
                            }),
                    ]}
                /> */}
                <Button
                    disabled={form.status === 'loading'}
                    type="submit"
                >
                    Subscribe
                </Button>
            </Box>
            {form.status === 'failure' && (
                <FormHelperText>
                    Oops! something went wrong, please try again later.
                </FormHelperText>
            )}
        </Form>
    );
}
