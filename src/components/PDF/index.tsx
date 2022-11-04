import React, { useEffect } from 'react';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';

export default function PDF() {
    const currentURL = window.location.href;
    <Button
        component="a"
        href={"https://api.microlink.io?url=" + currentURL + "&format=Tabloid&pdf=true&meta=false&embed=pdf.url"}
        startDecorator={<PictureAsPdfRoundedIcon />}
        color="primary"
        size="sm"
        variant="soft"
    >
        Download as PDF
    </Button>
}