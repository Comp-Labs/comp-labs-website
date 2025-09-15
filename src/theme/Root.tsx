import React from 'react';
import { getInitColorSchemeScript } from '@mui/joy/styles';
import { CssVarsProvider } from "@mui/joy/styles";
import { injectSpeedInsights } from '@vercel/speed-insights';
import { register } from 'swiper/element/bundle';

// Default implementation, that you can customize
export default function Root({ children }) {
    // Register swiper custom elements once
    React.useEffect(() => {
        register();
    }, []);

    return (
        <>
            {getInitColorSchemeScript()}
            <CssVarsProvider>
                <div className="bg-gradient-to-r from-rose-100 to-teal-100 dark:from-gray-800 dark:to-gray-900">
                    {children}
                </div>
            </CssVarsProvider>
            injectSpeedInsights();
        </>
    );
}