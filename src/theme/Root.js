import React from 'react';
import { getInitColorSchemeScript } from '@mui/joy/styles';
import { CssVarsProvider } from "@mui/joy/styles";
import BackToTopButton from '@theme/BackToTopButton';

// Default implementation, that you can customize
export default function Root({ children }) {
    return (
        <>
            {getInitColorSchemeScript()}
            <CssVarsProvider>
                {/* <BackToTopButton /> */}
                {children}
            </CssVarsProvider>
        </>
    );
}