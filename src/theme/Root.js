import React from 'react';
import { getInitColorSchemeScript } from '@mui/joy/styles';
import { CssVarsProvider } from "@mui/joy/styles";
import { inject } from '@vercel/analytics';

// Default implementation, that you can customize
export default function Root({ children }) {
    return (
        <>
            {getInitColorSchemeScript()}
            <CssVarsProvider>
                {children}
            </CssVarsProvider>
            inject();
        </>
    );
}